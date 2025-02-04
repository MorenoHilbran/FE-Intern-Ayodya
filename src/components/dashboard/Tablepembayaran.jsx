const kelas = [
    { ID: "UIUX0123", kategori: "UI/UX Design", Kelas: "Belajar Web Designer dengan Figma", status: "Belum Bayar", metode: "Credit Card", tanggal: "21 Sep, 2023 at 2:00 A.M" },
    { ID: "UIUX0456", kategori: "UI/UX Design", Kelas: "Belajar UI dengan Adobe XD", status: "Sudah Bayar", metode: "Bank Transfer", tanggal: "22 Sep, 2023 at 3:00 P.M" },
    { ID: "WEB0789", kategori: "Web Development", Kelas: "Fullstack dengan React & Node.js", status: "Belum Bayar", metode: "E-Wallet", tanggal: "23 Sep, 2023 at 1:00 P.M" },
];

function Header() {
    return (
        <div className="flex justify-between items-center px-8 py-4 bg-white text-black ">
            <h2 className="text-2xl font-bold">Status Pembayaran</h2>
            <div className="flex gap-2">
                <button className="px-4 py-2 bg-white border border-[#6148FF] text-[#6148FF] rounded-full hover:opacity-80 flex items-center gap-2 font-bold">
                    <img src="/assets/filter.svg" alt="Filter" />
                    Filter
                </button>
                <button className="px-4 py-2 bg-white text-[#6148FF] rounded-full hover:opacity-80">
                    <img src="/assets/search2.svg" alt="Search"/>
                </button>
            </div>
        </div>
    );
}


function TableKelas() {
    return (
        <div className="px-8 py-4 bg-white ">
            <table className="w-full ">
                <thead className="bg-[#EBF3FC] text-black">
                    <tr className="h-10">
                        <th className=" px-4 py-2">ID</th>
                        <th className=" px-4 py-2">Kategori</th>
                        <th className=" px-4 py-2">Kelas Premium</th>
                        <th className=" px-4 py-2">Status</th>
                        <th className=" px-4 py-2">Metode Pembayaran</th>
                        <th className=" px-4 py-2">Tenggat Bayar</th>
                    </tr>
                </thead>
                <tbody>
                    {kelas.map((item, index) => (
                        <tr key={index} className="h-10 text-center hover:bg-gray-100">
                            <td className=" px-4 py-2">{item.ID}</td>
                            <td className=" px-4 py-2">{item.kategori}</td>
                            <td className=" px-4 py-2">{item.Kelas}</td>
                            <td className={`px-4 py-2 font-semibold ${item.status === "Belum Bayar" ? "text-red-500" : "text-green-500"}`}>
                                {item.status}
                            </td>
                            <td className=" px-4 py-2">{item.metode}</td>
                            <td className=" px-4 py-2">{item.tanggal}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default function TablePembayaran() {
  

    return (
        <div className="ml-[69px] mr-[87px]">
            <Header />
            <TableKelas />
        </div>
    );
}