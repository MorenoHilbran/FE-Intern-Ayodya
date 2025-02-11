import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../atoms/Button";
import Search from "../molecules/Search";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  return (
    <div className="flex justify-between px-4 py-2 bg-[#6148FF] text-white w-full h-[100px] align-center">
      <div className="flex items-center">
        <img
          src="/assets/Belajar_white 3.svg"
          className="w-[140px] h-[150px] ml-[95px] mb-[10px] mr-[35px]"
        />
        <Search className="p-[22px] align-center" placeholder={"Cari Kursus Terbaik..."} />
      </div>

      <div className="flex justify-end items-center mr-[116px]">
        {isLoggedIn ? (
          <>
            {/* Tombol "Kelas" */}
            <button
              onClick={() => navigate("/user/kelas")}
              className="relative group cursor-pointer"
            >
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg transition duration-300 group-hover:bg-[#489CFF]">
                <Button imgSrc="/assets/list_class.svg" />
                <span className="hidden group-hover:block text-white font-medium">Kelas</span>
              </div>
            </button>

            {/* Tombol "Notifikasi" */}
            <div className="relative group cursor-pointer">
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg transition duration-300 group-hover:bg-[#489CFF]">
                <Button imgSrc="/assets/notification.svg" />
                <span className="hidden group-hover:block text-white font-medium">Notifikasi</span>
              </div>
            </div>

            {/* Tombol "Profil" dengan Navigasi */}
            <button
              onClick={() => navigate("/user/profil")}
              className="relative group cursor-pointer"
            >
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg transition duration-300 group-hover:bg-[#489CFF]">
                <Button imgSrc="/assets/profile.svg" />
                <span className="hidden group-hover:block text-white font-medium">Profil</span>
              </div>
            </button>
          </>
        ) : (
          <div className="hover:bg-blue-700 p-2 rounded-lg transition duration-300">
            <Button imgSrc="/assets/masuk.svg" ButtonText="Masuk" to="/login" />
          </div>
        )}
      </div>
    </div>
  );
}
