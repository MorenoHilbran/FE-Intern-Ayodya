import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function RegisterForm() {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    const handleRegister = () => {
        navigate("/user/home"); // Setelah daftar, arahkan ke halaman utama user
    };

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="flex-1 flex items-center justify-center bg-white">
            <div className="w-[452px]">
                <h2 className="text-center text-[#6148FF] text-2xl font-bold mb-[40px]">Daftar</h2>

                <label className="text-black">Nama Lengkap</label>
                <input
                    type="text"
                    placeholder="Nama Lengkap"
                    className="w-full h-[48px] border border-gray-300 rounded-lg px-4 mb-4"
                />

                <label className="text-black">Email</label>
                <input
                    type="email"
                    placeholder="johndoe@gmail.com"
                    className="w-full h-[48px] border border-gray-300 rounded-lg px-4 mb-4"
                />

                <label className="text-black">Nomor Telepon</label>
                <input
                    type="tel"
                    placeholder="08XXXXXXXXXX"
                    className="w-full h-[48px] border border-gray-300 rounded-lg px-4 mb-4"
                />

                <label className="text-black">Buat Password</label>
                <div className="relative mb-4">
                    <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Buat password"
                        className="w-full h-[48px] border border-gray-300 rounded-lg px-4"
                    />
                    <button
                        className="absolute right-2 top-1/2 transform -translate-y-1/2"
                        onClick={handleTogglePassword}
                    >
                        <img src="/assets/eye.svg" alt="show password" />
                    </button>
                </div>

                <button
                    className="w-full h-[48px] bg-[#6148FF] text-white font-bold rounded-lg"
                    onClick={handleRegister}
                >
                    Daftar
                </button>

                <div className="flex justify-center mt-4">
                    <p className="text-gray-500 text-[12px]">
                        Sudah punya akun?
                        <a href="/login" className="text-[#6148FF] cursor-pointer font-bold"> Masuk di sini</a>
                    </p>
                </div>
            </div>
        </div>
    );
}
