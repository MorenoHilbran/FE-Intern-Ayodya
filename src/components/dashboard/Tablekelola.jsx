import { useState } from "react";
import Form from "../molecules/Form";

const kelas = [
    { ID: "UIUX0123", kategori: "UI/UX Design", Kelas: "Belajar Web Designer dengan Figma", tipe: "GRATIS", Level: "Beginner", Harga: "Rp 0,00", Aksi: [
        <div className="flex items-center gap-2">
        <button className="px-2 py-1 bg-[#6148FF] text-white rounded-full font-bold">Ubah</button>
        <button className="px-2 py-1 bg-red-500 text-white rounded-full font-bold">Hapus</button>
        </div>
    ] },
    { ID: "UIUX0456", kategori: "UI/UX Design", Kelas: "Belajar UI dengan Adobe XD", tipe: "GRATIS", Level: "Advanced", Harga: "Rp 0,00", Aksi: [
        <div className="flex items-center gap-2">
        <button className="px-2 py-1 bg-[#6148FF] text-white rounded-full font-bold">Ubah</button>
        <button className="px-2 py-1 bg-red-500 text-white rounded-full font-bold">Hapus</button>
        </div>
    ] },
    { ID: "WEB0789", kategori: "Web Development", Kelas: "Fullstack dengan React & Node.js", tipe: "PREMIUM", Level: "Intermediate", Harga: "Rp 199,000", Aksi: [
        <div className="flex items-center gap-2">
        <button className="px-2 py-1 bg-[#6148FF] text-white rounded-full font-bold">Ubah</button>
        <button className="px-2 py-1 bg-red-500 text-white rounded-full font-bold">Hapus</button>
        </div>
    ] },
];

function Header() {
    const [showForm, setShowForm] = useState(false);

    const handleClick = () => setShowForm(true);
    const handleClose = () => setShowForm(false);

    return (
        <div className="flex justify-between items-center px-8 py-4 bg-white text-black">
            <h2 className="text-2xl font-bold">Kelola Kelas</h2>
            <div className="flex gap-2">
                <button
                    className="px-4 py-2 bg-[#6148FF] border border-[#6148FF] text-white rounded-full hover:opacity-80 flex items-center gap-2 font-bold"
                    onClick={handleClick}
                >
                    <img src="/assets/plus.svg" alt="Tambah" />
                    Tambah
                </button>
                <button className="px-4 py-2 bg-white border border-[#6148FF] text-[#6148FF] rounded-full hover:opacity-80 flex items-center gap-2 font-bold">
                    <img src="/assets/filter.svg" alt="Filter" />
                    Filter
                </button>
                <button className="px-4 py-2 bg-white text-[#6148FF] rounded-full hover:opacity-80">
                    <img src="/assets/search2.svg" alt="Search"/>
                </button>
            </div>

            {showForm && (
                
                        <Form />
                   
            )}
        </div>
    );
}


function TableKelas() {
    return (
        <div className="px-8 py-4 bg-white ">
            <table className="w-full ">
                <thead className="bg-[#EBF3FC] text-black">
                    <tr className="h-10">
                        <th className=" px-4 py-2">Kode Kelas</th>
                        <th className=" px-4 py-2">Kategori</th>
                        <th className=" px-4 py-2">Nama Kelas</th>
                        <th className=" px-4 py-2">Tipe Kelas</th>
                        <th className=" px-4 py-2">Level</th>
                        <th className=" px-4 py-2">Harga Kelas</th>
                        <th className=" px-4 py-2">Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {kelas.map((item, index) => (
                        <tr key={index} className="h-10 text-center hover:bg-gray-100">
                            <td className=" px-4 py-2">{item.ID}</td>
                            <td className=" px-4 py-2">{item.kategori}</td>
                            <td className=" px-4 py-2">{item.Kelas}</td>
                            <td className={`px-4 py-2 font-semibold ${item.tipe === "GRATIS" ? "text-green-500" : "text-[#6148FF]"}`}>
                                {item.tipe}
                            </td>
                            <td className=" px-4 py-2">{item.Level}</td>
                            <td className=" px-4 py-2">{item.Harga}</td>
                            <td className=" px-4 py-2">{item.Aksi}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default function TableKelola() {
  

    return (
        <div className="ml-[69px] mr-[87px]">
            <Header />
            <TableKelas />
        </div>
    );
}