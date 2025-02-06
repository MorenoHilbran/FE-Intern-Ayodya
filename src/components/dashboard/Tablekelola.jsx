import { useState, useEffect } from "react";
import Form from "../molecules/Form";
import axios from "axios";


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
                
                        <Form onClose={handleClose}/>
                   
            )}
        </div>
    );
}


function TableKelas() {
    const [data, setData] = useState([]);

    useEffect(() => {
        dataFetching();
    }, []);

    const dataFetching = async () => {
        try {
            const response = await axios.get('http://localhost:3000/api/class');
            if (response.data && response.data.datas) {
                setData(response.data.datas);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

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
                        {data.filter(item => item.status).map((item) => (
                            <tr key={item.id} className="h-10 text-center hover:bg-gray-100">
                                <td className="px-4 py-2">{item.code}</td>
                                <td className="px-4 py-2">{item.category || '-'}</td>
                                <td className="px-4 py-2">{item.name}</td>
                                <td className={`px-4 py-2 font-semibold ${item.type === "GRATIS" ? "text-green-500" : "text-[#6148FF]"}`}>{item.type}</td>
                                <td className="px-4 py-2">{item.level}</td>
                                <td className="px-4 py-2">{item.price}</td>
                                <td className=" flex px-4 py-2">
                                    <button className="text-white bg-[#6148FF] px-2 py-1 rounded-full" >Ubah</button>
                                    <button className="text-white bg-[#FF0000] px-2 py-1 rounded-full ml-2" onClick={async () => {
                                        if (window.confirm(`Apakah Anda yakin ingin menghapus kelas ${item.name}?`)) {
                                            try {
                                                await axios.delete(`http://localhost:3000/api/class/${item.id}`);
                                                setData(data.filter(i => i.id !== item.id));
                                                alert(`Kelas ${item.name} berhasil dihapus`);
                                            } catch (error) {
                                                console.error('Error hapus data:', error);
                                                alert(`Gagal menghapus kelas ${item.name}`);
                                            }
                                        }
                                    }}>Hapus</button>
                                </td>
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