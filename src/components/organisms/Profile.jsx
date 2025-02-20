import { useState } from "react";
import ButtonBack from "../molecules/ButtonBack";
import ProfileForm from "./ProfileForm";
import ChangePass from "./ChangePass";
import PaymentLog from "./PaymentLog";

export default function Profile() {
    const [activeTab, setActiveTab] = useState("profile");

    return (
        <div className="flex flex-col px-[270px] pb-[70px] bg-[#EBF3FC] ">
            <ButtonBack />
            
            <div className="bg-white rounded-lg w-full max-w-4xl overflow-hidden">
                <div className="bg-[#6148FF] py-4 px-6 text-center w-[401px] mx-auto rounded-t-[16px] w-full">
                    <h1 className="text-[20px] font-bold text-white">Akun</h1>
                </div>
                
                <div className="flex">
                    <div className="w-1/3 bg-white p-6 flex flex-col justify-between">
                        <div>
                            <ul className="space-y-4">
                                <li 
                                    className={`flex items-center cursor-pointer p-4 border-b border-[#8451e6] ${activeTab === "profile" ? "font-bold text-[#6148FF]" : ""}`}
                                    onClick={() => setActiveTab("profile")}
                                >
                                    <img src="/assets/edit.svg" alt="" className="w-4 h-4 mr-2" />
                                    Profil Saya
                                </li>
                                <li 
                                    className={`flex items-center cursor-pointer p-4 border-b border-[#8451e6] ${activeTab === "changePass" ? "font-bold text-[#6148FF]" : ""}`}
                                    onClick={() => setActiveTab("changePass")}
                                >
                                    <img src="/assets/settings.svg" alt="" className="w-4 h-4 mr-2" />
                                    Ubah Password
                                </li>
                                <li 
                                    className={`flex items-center cursor-pointer p-4 border-b border-[#8451e6] ${activeTab === "riwayat" ? "font-bold text-[#6148FF]" : ""}`}
                                    onClick={() => setActiveTab("riwayat")}
                                >
                                    <img src="/assets/cart.svg" alt="" className="w-4 h-4 mr-2" />
                                    Riwayat Pembayaran
                                </li>
                                <li className="flex items-center cursor-pointer p-4 border-b border-[#8451e6]">
                                    <img src="/assets/logout.svg" alt="" className="w-4 h-4 mr-2" />
                                    Keluar
                                </li>
                            </ul>
                        </div>
                        <p className="text-xs opacity-75">Version 1.1.0</p>
                    </div>
                    
                    <div className="w-2/3 p-6">
                        {activeTab === "profile" && <ProfileForm />}
                        {activeTab === "changePass" && <ChangePass />}
                        {activeTab === "riwayat" && <PaymentLog />}

                    </div>
                </div>
            </div>
        </div>
    );
}
