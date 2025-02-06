export default function Sidebar() {
    const isActive = (pathname) => {
      return window.location.pathname === pathname ? "bg-[#489CFF]" : "";
    };

    return (
      <div className="w-1/6 h-screen fixed bg-[#6148FF]">
        <img src="/assets/Belajar_white 3.svg" alt="" className="w-1/2 mx-auto" />
        <ul className="mt-4 py-[12px] align-center">
          <li className={`${isActive("/Admin/dashboard")} hover:bg-[#489CFF]`}>
            <a href="/Admin/dashboard" className="font-bold py-[13px] px-4 inline-block text-white text-[16px] font-[700]">
              Dashboard
            </a>
          </li>
          <li className={`${isActive("/Admin/kelola")} hover:bg-[#489CFF]`}>
            <a href="/Admin/kelola" className="font-bold py-[13px] px-4 inline-block text-white text-[16px] font-[700]">
              Kelola Kelas
            </a>
          </li>
          <li className={`${isActive("/login")} hover:bg-[#489CFF]`}>
            <a href="/" className="font-bold py-[13px] px-4 inline-block text-white text-[16px] font-[700]">
              Keluar
            </a>
          </li>
        </ul>
      </div>
    );
}
