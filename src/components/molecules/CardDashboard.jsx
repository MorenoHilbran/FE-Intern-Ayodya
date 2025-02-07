const cards = [
    { name: "Active Users", jumlah_pengguna: "450", type: "au" },
    { name: "Active Class", jumlah_pengguna: "25", type: "ac" },
    { name: "Premium Class", jumlah_pengguna: "20", type: "pc" },
];

function Card({ card }) {
    return (
        <div className={`flex items-center w-1/3 p-6 rounded-lg shadow-md ${card.type === "au" ? "bg-[#489CFF]" : card.type === "ac" ? "bg-[#73CA5C]" : "bg-[#6148FF]"} text-white`}>
            <div className="rounded-[25px] bg-white p-3 mr-4">
                <img src="/assets/Users.svg" alt="User" />
            </div>
            <div className="flex flex-col justify-center">
                <h2 className="text-xl font-semibold">{card.jumlah_pengguna}</h2>
                <p className="text-xl font-bold">{card.name}</p>
            </div>
        </div>
    );
}


export default function CardDashboard() {
    return (
        <div className="flex justify-between gap-[24px] mt-[79px] ml-[69px] mb-[54px] mr-[87px]">
            {cards.map((card) => (
                <Card key={card.name} card={card} />
            ))}
        </div>
    );
}
