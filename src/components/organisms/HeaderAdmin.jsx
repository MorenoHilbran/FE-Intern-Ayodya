function Search({ placeholder }) {
    return (
        <div className="flex items-center bg-white rounded-md border px-2 py-4 h-12 mt-2 mr-4">
            <input 
                type="text" 
                placeholder={placeholder} 
                className="outline-none px-3 py-1 w-full"
            />
            <button className="px-2 py-1 bg-[#6148FF] text-white rounded-md hover:opacity-80">
                <img src="/assets/search.svg" alt="Search" />
            </button>
        </div>
    );
}

export default function HeaderAdmin({ adminName = "Admin", searchPlaceholder = "Cari..." }) {
    return (
        <div className="flex justify-between px-4 py-2 bg-[#EBF3FC] w-full h-[100px]">
            <h1 className="px-3 py-6 ml-[40px] text-2xl font-bold text-[#6148FF]">
                Hi, {adminName}!
            </h1>
            <Search placeholder={searchPlaceholder} />
        </div>
    );
}
