import { useState, useEffect } from "react";
import Form from "../molecules/Form";
import axios from "axios";

function TableKelas({ datas, onEdit, onDelete }) {
  return (
    <div className="px-8 py-4 bg-white">
      <table className="w-full">
        <thead className="bg-[#EBF3FC] text-black">
          <tr className="h-10">
            <th className="px-4 py-2">Kode Kelas</th>
            <th className="px-4 py-2">Kategori</th>
            <th className="px-4 py-2">Nama Kelas</th>
            <th className="px-4 py-2">Tipe Kelas</th>
            <th className="px-4 py-2">Level</th>
            <th className="px-4 py-2">Harga Kelas</th>
            <th className="px-4 py-2">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {datas.map((item) => (
            <tr key={item.id} className="h-10 text-center hover:bg-gray-100">
              <td className="px-4 py-2">{item.code}</td>
              <td className="px-4 py-2">{item.category || "-"}</td>
              <td className="px-4 py-2">{item.name}</td>
              <td className={`px-4 py-2 font-semibold ${item.type === "GRATIS" ? "text-green-500" : "text-[#6148FF]"}`}>{item.type}</td>
              <td className="px-4 py-2">{item.level}</td>
              <td className="px-4 py-2">{item.price}</td>
              <td className="flex px-4 py-2">
                <button className="text-white bg-[#6148FF] px-2 py-1 rounded-full" onClick={() => onEdit(item)}>Ubah</button>
                <button className="text-white bg-[#FF0000] px-2 py-1 rounded-full ml-2" onClick={() => onDelete(item)}>Hapus</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function TableKelola() {
  const [showForm, setShowForm] = useState(false);
  const [editData, setEditData] = useState(null);
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    dataFetching();
  }, []);

  const dataFetching = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/class");
      if (response.data && response.data.datas) {
        setDatas(response.data.datas);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleOpenForm = async (data = null) => {
    setEditData(data);
    setShowForm(true);
    
  };
  
  const handleDelete = async (item) => {
    if (window.confirm(`Apakah Anda yakin ingin menghapus kelas ${item.name}?`)) {
      try {
        await axios.delete(`http://localhost:3000/api/class/${item.id}`);
        alert(`Kelas ${item.name} berhasil dihapus`);
        dataFetching();
      } catch (error) {
        console.error("Error hapus data:", error);
        alert(`Gagal menghapus kelas ${item.name}`);
      }
    }
  };

  return (
    <div className="ml-[69px] mr-[87px]">
      <div className="flex justify-between items-center px-8 py-4 bg-white text-black">
        <h2 className="text-2xl font-bold">Kelola Kelas</h2>
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-[#6148FF] text-white rounded-full font-bold" onClick={() => handleOpenForm()}>Tambah</button>
          <button className="px-4 py-2 bg-white border border-[#6148FF] text-[#6148FF] rounded-full hover:opacity-80 flex items-center gap-2 font-bold">
            <img src="/assets/filter.svg" alt="Filter" />
            Filter
          </button>
          <button className="px-4 py-2 bg-white text-[#6148FF] rounded-full hover:opacity-80">
            <img src="/assets/search2.svg" alt="Search" />
          </button>
        </div>
      </div>

      <TableKelas datas={datas} onEdit={handleOpenForm} onDelete={handleDelete} />

      {showForm && (
        <Form
          onClose={() => setShowForm(false)}
          editData={editData}
          callback={dataFetching}
        />
      )}
    </div>
  );
}
