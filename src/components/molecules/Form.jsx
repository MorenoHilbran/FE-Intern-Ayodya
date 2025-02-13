import { useState, useEffect } from "react";
import axios from "axios";

export default function Form({ onClose, callback, editData }) {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    code: "",
    type: "",
    level: "",
    price: "",
    content: "",
  });

  const [categories, setCategories] = useState([]);
  const classTypes = ["Premium", "Free"];

  useEffect(() => {
    fetchCategories();
    
    if (editData) {
      setFormData({
        ...editData,
        category: editData?.category?.id || "",
        type: editData?.type?.id || "",
      });
    }
  }, [editData]);

  const fetchCategories = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/category");
      setCategories(response.data.datas);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        ...formData,
        category: formData.category || null, // Kirim ID kategori, bukan objek
    };
      if (editData) {
        await axios.patch(`http://localhost:3000/api/class/${editData.id}`, formData);
        alert("Data kelas berhasil diperbarui!");
      } else {
        await axios.post("http://localhost:3000/api/class", formData, payload);
        alert("Data kelas berhasil ditambahkan!");
      }
      callback();
      onClose();
    } catch (error) {
      console.error("Terjadi kesalahan:", error);
      alert(`Gagal ${editData ? "memperbarui" : "menambahkan"} data kelas.`);
    }
  };

  return (
    <div className="flex justify-center items-center w-full h-screen backdrop-brightness-20 fixed top-0 left-0">
      <div className="bg-white max-h-screen overflow-y-scroll scrollbar-none px-[150px] py-[50px] rounded-3xl relative">
        <button className="absolute top-4 right-4" onClick={onClose}>
          <img src="/assets/close.svg" alt="Close" />
        </button>

        <h1 className="text-[#6148FF] font-bold text-2xl text-center mb-6">
          {editData ? "Edit Kelas" : "Tambah Kelas"}
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col">
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2 font-medium">
              Nama Kelas
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Masukkan nama kelas"
              className="w-[450px] border rounded-[20px] py-3 px-4 focus:outline-none focus:ring-2 focus:ring-[#6148FF]"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="category" className="block mb-2 font-medium">
              Kategori
            </label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-[450px] border rounded-[20px] py-3 px-4 focus:outline-none focus:ring-2 focus:ring-[#6148FF]"
              required
            >
              <option value="">Pilih Kategori</option>
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="code" className="block mb-2 font-medium">
              Kode Kelas
            </label>
            <input
              type="text"
              name="code"
              value={formData.code}
              onChange={handleChange}
              placeholder="Masukkan kode kelas"
              className="w-[450px] border rounded-[20px] py-3 px-4 focus:outline-none focus:ring-2 focus:ring-[#6148FF]"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="type" className="block mb-2 font-medium">
              Tipe Kelas
            </label>
            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="w-[450px] border rounded-[20px] py-3 px-4 focus:outline-none focus:ring-2 focus:ring-[#6148FF]"
              required
            >
            <option value="">Pilih Tipe</option>
            {classTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="level" className="block mb-2 font-medium">
              Level
            </label>
            <input
              type="text"
              name="level"
              value={formData.level}
              onChange={handleChange}
              placeholder="Masukkan level kelas"
              className="w-[450px] border rounded-[20px] py-3 px-4 focus:outline-none focus:ring-2 focus:ring-[#6148FF]"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="price" className="block mb-2 font-medium">
              Harga
            </label>
            <input
              type="text"
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="Masukkan harga kelas"
              className="w-[450px] border rounded-[20px] py-3 px-4 focus:outline-none focus:ring-2 focus:ring-[#6148FF]"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="content" className="block mb-2 font-medium">
              Materi
            </label>
            <textarea
              name="content"
              value={formData.content}
              onChange={handleChange}
              placeholder="Masukkan materi"
              className="border rounded-[20px] w-full py-2 px-4 h-24 focus:outline-none focus:ring-2 focus:ring-[#6148FF]"
            />
          </div>

          <div className="flex gap-5 mt-6">
            <button
              type="button"
              className="bg-[#FF0000] text-white rounded-[30px] py-4 w-1/2 font-semibold cursor-pointer"
            >
              Upload Video
            </button>
            <button
              type="submit"
              className="bg-[#6148FF] text-white rounded-[30px] py-4 w-1/2 font-semibold cursor-pointer"
            >
              Simpan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
