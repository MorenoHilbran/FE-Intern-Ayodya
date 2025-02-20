import { useState } from "react";

export default function ChangePass() {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        oldPassword: "",
        newPassword: "",
        confirmPassword: "",
    });

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logic untuk mengubah password bisa ditambahkan di sini
        console.log("Password Changed:", formData);
    };

    return (
        <div className="">
            <h1 className="font-bold text-[24px] text-center px-[20px] pb-[20px]">Ubah Password</h1>
            <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                    <label className="text-black">Masukkan Password Lama</label>
                    <div className="relative mb-4">
                        <input
                            type={showPassword ? "text" : "password"}
                            name="oldPassword"
                            placeholder="Masukkan password lama"
                            value={formData.oldPassword}
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
                </div>
                <div>
                    <label className="text-black">Masukkan Password Baru</label>
                    <div className="relative mb-4">
                        <input
                            type={showPassword ? "text" : "password"}
                            name="newPassword"
                            placeholder="Masukkan password baru"
                            value={formData.newPassword}
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
                </div>
                <div>
                    <label className="text-black">Konfirmasi Password Baru</label>
                    <div className="relative mb-4">
                        <input
                            type={showPassword ? "text" : "password"}
                            name="confirmPassword"
                            placeholder="Konfirmasi password baru"
                            value={formData.confirmPassword}
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
                </div>
                <button type="submit" className="w-full p-3 mt-4 bg-[#6148FF] text-white rounded-lg font-semibold shadow">
                    Ubah Password
                </button>
            </form>
        </div>
    );
}
