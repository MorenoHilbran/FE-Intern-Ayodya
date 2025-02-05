import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login() {
    const navigate = useNavigate(); 
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = () => {
        navigate("/Admin/dashboard"); 
    };

    const handleTogglePassword = () => {
        setShowPassword(!showPassword); 
    };

    return (
        <div className="flex-1 flex items-center justify-center bg-white">
            <div className="w-[452px]">
                <h2 className="text-center text-[#6148FF] text-2xl font-bold mb-[40px]">Login</h2>
                
                <label className="text-black">ID Admin</label>
                <input 
                    type="text" 
                    placeholder="ID Admin" 
                    className="w-full h-[48px] border border-gray-300 rounded-lg px-4 mb-4"
                />
                
                <div className="flex justify-between">
                    <label className="text-black">Password</label>
                    <label className="text-[#6148FF] cursor-pointer">Lupa Kata Sandi</label>
                </div>
                <div className="relative mb-4">
                    <input 
                        type={showPassword ? "text" : "password"} 
                        placeholder="Password" 
                        className="w-full h-[48px] border border-gray-300 rounded-lg px-4"
                    />
                    <button className="absolute right-2 top-1/2 transform -translate-y-1/2" 
                        onClick={handleTogglePassword}>
                        <img src="/assets/eye.svg" alt="show password"/>
                    </button>
                </div>
                
                <button 
                    className="w-full h-[48px] bg-[#6148FF] text-white font-bold rounded-lg"
                    onClick={handleLogin} 
                >
                    Masuk
                </button>
            </div>
        </div>
    );
}