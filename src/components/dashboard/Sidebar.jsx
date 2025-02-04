export default function Sidebar() {
    const isActive = (pathname) => {
      return window.location.pathname === pathname ? "bg-[#489CFF]" : "";
    };

    return (
      <div className="w-1/6 h-screen fixed bg-[#6148FF]">
        <img src="/assets/Belajar_white 3.svg" alt="" className="w-1/2 mx-auto" />
        <ul className="mt-4">
          <li className={`py-2 px-4 ${isActive("/Admin/dashboard")} hover:bg-[#489CFF]`}>
            <a href="/Admin/dashboard" className="text-white">
              Dashboard
            </a>
          </li>
          <li className={`py-2 px-4 ${isActive("/Admin/kelola")} hover:bg-[#489CFF]`}>
            <a href="/Admin/kelola" className="text-white">
              Kelola Kelas
            </a>
          </li>
          <li className={`py-2 px-4 ${isActive("/login")} hover:bg-[#489CFF]`}>
            <a href="/" className="text-white">
              Keluar
            </a>
          </li>
        </ul>
      </div>
    );
}
