import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function LoginForm({ role }) {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = () => {
        if (role === "admin") {
            navigate("/admin/dashboard");
        } else {
            navigate("/user/home");
        }
    };

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="flex-1 flex items-center justify-center bg-white">
            <div className="w-[452px]">
                <h2 className="text-center text-[#6148FF] text-2xl font-bold mb-[40px]">
                    {role === "admin" ? "Login Admin" : "Masuk"}
                </h2>

                <label className="text-black">
                    {role === "admin" ? "ID Admin" : "Email/No. Telepon"}
                </label>
                <input
                    type="text"
                    placeholder={role === "admin" ? "ID Admin" : "johndoe@gmail.com"}
                    className="w-full h-[48px] border border-gray-300 rounded-lg px-4 mb-4"
                />

                <div className="flex justify-between">
                    <label className="text-black">Password</label>
                    <label className="text-[#6148FF] cursor-pointer">Lupa Kata Sandi</label>
                </div>

                <div className="relative mb-4">
                    <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Masukkan password"
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
                    onClick={handleLogin}
                >
                    Masuk
                </button>

                {role !== "admin" && (
                    <div className="flex justify-center mt-4">
                        <p className="text-gray-500 text-[12px]">
                            Belum punya akun?
                            <a href="/register" className="text-[#6148FF] cursor-pointer font-bold">Daftar disini</a>
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}