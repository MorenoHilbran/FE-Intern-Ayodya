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
        <div className="bg-white w-[940px] h-full justify-end ml-[550px] ">
            <div className="flex flex-col h-full items-center ">
                <h2 className="text-center text-[#6148FF] text-2xl font-bold mt-[200px] mb-[40px]">Login</h2>
                
               
                <div className="w-[452px] mt-4">
                    <label className="self-start text-black">ID Admin</label>
                    <input 
                        type="text" 
                        placeholder="ID Admin" 
                        className="w-full h-[48px] border border-gray-300 rounded-lg px-4"
                    />
                </div>
                
                <div className="flex w-[452px] justify-between mt-3">
                    <label className="self-start text-black">Password</label>
                    <label className="self-end text-[#6148FF]">Lupa Kata Sandi</label>
                </div>
                <div className="w-[452px]">
                    <div className="relative">
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
                </div>
                

            
                <button 
                    className="w-[452px] h-[48px] bg-[#6148FF] text-white font-bold rounded-lg mt-4"
                    onClick={handleLogin} 
                >
                    Masuk
                </button>
            </div>
        </div>
    );
}
