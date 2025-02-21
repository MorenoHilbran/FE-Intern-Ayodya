import { useEffect, useState } from "react";
import axios from "axios";

export default function ProfileForm() {
    const [user, setUser] = useState({ name: "", email: "", phone: "" });

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get("https://be-intern-ayodya.vercel.app/api/user");
                const userData = response.data.datas[0]; 
                setUser({
                    name: userData.name,
                    email: userData.email,
                    phone: userData.phone
                });
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchUser();
    }, []);

    return (
        <div className="">
            <div className="flex justify-center mb-6">
                <div className="w-24 h-24 border-2 border-[#6148FF] rounded-full flex items-center justify-center">
                    <span className="text-[#6148FF] text-xl">📷</span>
                </div>
            </div>
            
            <form className="space-y-4">
                <div>
                    <label className="block text-gray-700">Nama</label>
                    <input type="text" className="w-full p-2 border rounded" value={user.name} readOnly />
                </div>
                <div>
                    <label className="block text-gray-700">Email</label>
                    <input type="email" className="w-full p-2 border rounded" value={user.email} readOnly />
                </div>
                <div>
                    <label className="block text-gray-700">Nomor Telepon</label>
                    <input type="text" className="w-full p-2 border rounded" value={user.phone} readOnly />
                </div>
                <div>
                    <label className="block text-gray-700">Negara</label>
                    <input type="text" className="w-full p-2 border rounded" placeholder="Masukkan Negara tempat tinggal"/>
                </div>
                <div>
                    <label className="block text-gray-700">Kota</label>
                    <input type="text" className="w-full p-2 border rounded" placeholder="Masukkan kota tempat tinggal"/>
                </div>
                <button type="submit" className="w-full p-3 mt-4 bg-[#6148FF] text-white rounded-lg font-semibold shadow">
                    Simpan Profil Saya
                </button>
            </form>
        </div>
    );
}