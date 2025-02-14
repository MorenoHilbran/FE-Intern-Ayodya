import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function LoginForm({ role }) {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });
    const [error, setError] = useState(""); // Untuk menampilkan pesan error

    // Handle perubahan input form
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle toggle password visibility
    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    // Handle login user
    const handleLogin = async () => {
        setError(""); // Reset error saat submit
        try {
            const response = await axios.post("https://be-intern-ayodya.vercel.app/api/user/login", formData);
            console.log("Login berhasil:", response.data);

            // Simpan token ke local storage
            localStorage.setItem("token", response.data.token);

            // Arahkan ke halaman sesuai role
            if (role === "admin") {
                navigate("/admin/dashboard");
            } else {
                navigate("/user/home");
            }
        } catch (error) {
            console.error("Login gagal:", error.response?.data?.message || error.message);
            setError(error.response?.data?.message || "Terjadi kesalahan, coba lagi.");
        }
    };

    return (
        <div className="flex-1 flex items-center justify-center bg-white">
            <div className="w-[452px]">
                <h2 className="text-center text-[#6148FF] text-2xl font-bold mb-[40px]">
                    {role === "admin" ? "Login Admin" : "Masuk"}
                </h2>

                {/* Tampilkan error jika ada */}
                {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}

                <label className="text-black">
                    {role === "admin" ? "ID Admin" : "Email"}
                </label>
                <input
                    type="text"
                    name="email"
                    placeholder={role === "admin" ? "ID Admin" : "johndoe@gmail.com"}
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full h-[48px] border border-gray-300 rounded-lg px-4 mb-4"
                />

                <div className="flex justify-between">
                    <label className="text-black">Password</label>
                    <label className="text-[#6148FF] cursor-pointer">Lupa Kata Sandi</label>
                </div>

                <div className="relative mb-4">
                    <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        placeholder="Masukkan password"
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full h-[48px] border border-gray-300 rounded-lg px-4"
                    />
                    <button
                        type="button"
                        className="absolute right-2 top-1/2 transform -translate-y-1/2"
                        onClick={handleTogglePassword}
                    >
                        <img src="/assets/eye.svg" alt="show password" />
                    </button>
                </div>

                <button
                    className="w-full h-[48px] bg-[#6148FF] cursor-pointer text-white font-bold rounded-lg"
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
