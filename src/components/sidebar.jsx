
export default function Sidebar() {
    return (
        <div className="w-1/6 h-screen bg-[#6148FF]" >
            <img src="/assets/Belajar_white 3.svg" alt="" className="w-1/2 mx-auto" />
            <ul className="mt-4">
                <li className="py-2 px-4 hover:bg-[#489CFF] ">
                    <a href="#" className="text-white">Dashboard</a>
                </li>
                <li className="py-2 px-4 hover:bg-[#489CFF] ">
                    <a href="#" className="text-white">Kelola Kelas</a>
                </li>
                <li className="py-2 px-4 hover:bg-[#489CFF] ">
                    <a href="#" className="text-white">Keluar</a>
                </li>
            </ul>
        </div>
    )
    
}