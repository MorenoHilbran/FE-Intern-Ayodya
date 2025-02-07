export default function Sidebar() {
  const isActive = (pathname) => {
    return window.location.pathname === pathname ? "bg-[#489CFF]" : "";
  };

  return (
    <div className="w-1/6 h-screen fixed bg-[#6148FF]">
      <img src="/assets/Belajar_white 3.svg" alt="" className="w-1/2 mx-auto" />
      <ul className="mt-4 py-[12px] align-center">
        <li className={`${isActive("/admin/dashboard")} hover:bg-[#489CFF]`}>
          <a
            href="/admin/dashboard"
            className="py-[13px] w-full px-4 inline-block text-white text-[16px] font-[700]"
          >
            Dashboard
          </a>
        </li>
        <li className={`${isActive("/admin/kelola")} hover:bg-[#489CFF]`}>
          <a
            href="/admin/kelola"
            className="py-[13px] w-full px-4 inline-block text-white text-[16px] font-[700]"
          >
            Kelola Kelas
          </a>
        </li>
        <li className={`${isActive("/admin/user")} hover:bg-[#489CFF]`}>
          <a
            href="/admin/user"
            className="py-[13px] w-full px-4 inline-block text-white text-[16px] font-[700]"
          >
            User
          </a>
        </li>
        <li className={`${isActive("/login")} hover:bg-[#489CFF]`}>
          <a
            href="/"
            className="py-[13px] w-full px-4 inline-block text-white text-[16px] font-[700]"
          >
            Keluar
          </a>
        </li>
      </ul>
    </div>
  );
}
