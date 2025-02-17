import ButtonBack from "../molecules/ButtonBack";

export default function Profile() {
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
                                <li className="flex items-center cursor-pointer p-4 border-b border-[#8451e6]">
                                    <img src="/assets/edit.svg" alt="" className="w-4 h-4 mr-2" />
                                    Profil Saya
                                </li>
                                <li className="flex items-center cursor-pointer  p-4 border-b border-[#8451e6]">
                                    <img src="/assets/settings.svg" alt="" className="w-4 h-4 mr-2" />
                                    Ubah Password
                                </li>
                                <li className="flex items-center cursor-pointer  p-4 border-b border-[#8451e6]">
                                    <img src="/assets/cart.svg" alt="" className="w-4 h-4 mr-2" />
                                    Riwayat Pembayaran
                                </li>
                                <li className="flex items-center cursor-pointer  p-4 border-b border-[#8451e6]">
                                    <img src="/assets/logout.svg" alt="" className="w-4 h-4 mr-2" />
                                    Keluar
                                </li>
                            </ul>
                        </div>
                        <p className="text-xs opacity-75">Version 1.1.0</p>
                    </div>
                    
                    <div className="w-2/3 p-6">
                        <div className="flex justify-center mb-6">
                            <div className="w-24 h-24 border-2 border-[#6148FF] rounded-full flex items-center justify-center">
                                <span className="text-[#6148FF] text-xl">📷</span>
                            </div>
                        </div>
                        
                        <form className="space-y-4">
                            <div>
                                <label className="block text-gray-700">Nama</label>
                                <input type="text" className="w-full p-2 border rounded" defaultValue="John Doe"/>
                            </div>
                            <div>
                                <label className="block text-gray-700">Email</label>
                                <input type="email" className="w-full p-2 border rounded" defaultValue="johndoe@gmail.com"/>
                            </div>
                            <div>
                                <label className="block text-gray-700">Nomor Telepon</label>
                                <input type="text" className="w-full p-2 border rounded" defaultValue="+62 81212121121"/>
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
                </div>
            </div>
        </div>
    );
}
