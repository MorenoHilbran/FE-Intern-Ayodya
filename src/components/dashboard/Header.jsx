function Search() {
    return (
        <div className="flex items-center bg-white rounded-md border px-2 py-4 h-12 mt-2 mr-4">
           
            <button className="px-2 py-1 bg-[#6148FF] text-white rounded-md hover:opacity-80">
                <img src="/assets/search.svg" alt="Search" />
            </button>
        </div>
    );
}

function Header() {
    return <h1 className="px-3 py-6 ml-[40px] text-2xl font-bold text-[#6148FF]">Hi, Admin!</h1>;
}

export default function HeaderDashboard() {
    return (
        <div className="flex justify-between px-4 py-2 bg-[#EBF3FC] text-white w-full h-[100px]">
            <Header />
            <Search />
        </div>
    );
}
