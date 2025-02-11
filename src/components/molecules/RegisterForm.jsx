import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios"; 

export default function RegisterForm() {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        password: ""
    });
    const [error, setError] = useState(""); 

    // Handle perubahan input form
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle toggle password visibility
    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    // Handle register user
    const handleRegister = async () => {
        setError(""); // Reset error saat submit
        try {
            const response = await axios.post("http://localhost:3000/api/user/register", formData);
            console.log("Registrasi berhasil:", response.data);

            // Arahkan ke halaman utama setelah daftar berhasil
            navigate("/user/home");
        } catch (error) {
            console.error("Registrasi gagal:", error.response?.data?.message || error.message);
            setError(error.response?.data?.message || "Terjadi kesalahan, coba lagi.");
        }
    };

    return (
        <div className="flex-1 flex items-center justify-center bg-white">
            <div className="w-[452px]">
                <h2 className="text-center text-[#6148FF] text-2xl font-bold mb-[40px]">Daftar</h2>

                {/* Tampilkan error jika ada */}
                {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}

                <label className="text-black">Nama Lengkap</label>
                <input
                    type="text"
                    name="name"
                    placeholder="Nama Lengkap"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full h-[48px] border border-gray-300 rounded-lg px-4 mb-4"
                />

                <label className="text-black">Email</label>
                <input
                    type="email"
                    name="email"
                    placeholder="johndoe@gmail.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full h-[48px] border border-gray-300 rounded-lg px-4 mb-4"
                />

                <label className="text-black">Nomor Telepon</label>
                <input
                    type="tel"
                    name="phone"
                    placeholder="08XXXXXXXXXX"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full h-[48px] border border-gray-300 rounded-lg px-4 mb-4"
                />

                <label className="text-black">Buat Password</label>
                <div className="relative mb-4">
                    <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        placeholder="Buat password"
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
