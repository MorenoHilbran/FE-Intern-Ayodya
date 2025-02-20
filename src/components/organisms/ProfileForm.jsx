export default function ProfileForm() {
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
    );
}

