import { useState } from "react";

export default function Form() {
    const [showForm, setShowForm] = useState(true); 
    
    const handleClick = () => {
        setShowForm(false); 
    }

    return (
      <>
        {showForm && (
          <div className="fixed inset-0 backdrop-brightness-20 flex items-center justify-center">
            <div className="bg-white w-[750px] p-10 rounded-3xl shadow-xl relative">
              
              <button className="absolute top-4 right-4" onClick={handleClick}>
                <img src='/assets/close.svg' alt='Close' />
              </button>

              <h1 className="text-[#6148FF] font-bold text-2xl text-center mb-6">
                Tambah Kelas
              </h1>

              <form className="flex flex-col">
                {[ 
                  { label: "Nama Kelas", placeholder: "Text" },
                  { label: "Kategori", placeholder: "Text" },
                  { label: "Kode Kelas", placeholder: "Text" },
                  { label: "Tipe Kelas", placeholder: "Text" },
                  { label: "Level", placeholder: "Text" },
                  { label: "Harga", placeholder: "Text" },
                ].map((field, index) => (
                  <div key={index} className="mb-4">
                    <label htmlFor={field.label} className="block mb-2 font-medium">
                      {field.label}
                    </label>
                    <input
                      type="text"
                      placeholder={field.placeholder}
                      className="border rounded-[20px] w-full py-3 px-4 focus:outline-none focus:ring-2 focus:ring-[#6148FF]"
                    />
                  </div>
                ))}
              
                <div className="mb-4">
                  <label htmlFor="Materi" className="block mb-2 font-medium">
                    Materi
                  </label>
                  <textarea
                    placeholder="Paragraph"
                    className="border rounded-[20px] w-full py-2 px-4 h-24 focus:outline-none focus:ring-2 focus:ring-[#6148FF]"
                  />
                </div>

                <div className="flex gap-5 mt-6">
                  <button className="bg-[#FF0000] text-white rounded-[20px] py-3 w-1/2 font-semibold">
                    Upload Video
                  </button>
                  <button className="bg-[#6148FF] text-white rounded-[20px] py-3 w-1/2 font-semibold">
                    Simpan
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </>
    );
}
