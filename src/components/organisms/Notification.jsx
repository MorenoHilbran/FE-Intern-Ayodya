import ButtonBack from "../molecules/ButtonBack";

export default function Notification() {
    const notifications = [
        {
            title: "Promosi",
            description: "Dapatkan Potongan 50% selama Bulan Maret!",
            subtext: "Syarat dan Ketentuan berlaku!",
            date: "2 Maret, 12:00",
            status: "green",
        },
        {
            title: "Notifikasi",
            description: "Password berhasil diubah",
            date: "1 Maret, 10:00",
            status: "red",
        },
        {
            title: "Promosi",
            description: "Dapatkan Potongan 50% selama Bulan Maret!",
            subtext: "Syarat dan Ketentuan berlaku!",
            date: "1 Maret, 09:00",
            status: "green",
        },
    ];

    return (

        <div className="flex flex-col px-[270px] pb-[70px]">
              
            <ButtonBack />

            
            <div className="border-[1px] border-[#6148FF] rounded-[16px] overflow-hidden w-full shadow-lg">
                
                
                <div className="bg-[#6148FF] py-4 px-6 text-center w-[401px] mx-auto rounded-t-[16px] w-full">
                    <h1 className="text-[20px] font-bold text-white">Notifikasi</h1>
                </div>

                
                <div className="bg-white p-6">
                    {notifications.map((notif, index) => (
                        <div key={index} className="flex items-start gap-3 py-3 border-b last:border-none">
                            <img src="/assets/notif-icon.svg" alt="Icon" className="w-6 h-6 mt-1" />
                            <div className="flex-1">
                                <p className="text-[#6148FF] font-bold">{notif.title}</p>
                                <p className="text-gray-700 font-semibold">{notif.description}</p>
                                {notif.subtext && (
                                    <p className="text-gray-500 text-sm">{notif.subtext}</p>
                                )}
                            </div>
                            <div className="flex flex-col items-end">
                                <p className="text-gray-500 text-sm">{notif.date}</p>
                                <span 
                                    className={`w-2 h-2 rounded-full ${
                                        notif.status === "green" ? "bg-green-500" : "bg-red-500"
                                    }`}
                                ></span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
