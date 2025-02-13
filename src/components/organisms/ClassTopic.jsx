import Search from "../molecules/Search";


export default function ClassTopic() {
    return (
        <div className="flex mb-[30px] justify-between">
            <h1 className="text-2xl font-bold text-[#000000] mt-[50px]">Topik Kelas</h1>
            <Search 
            className="border-[1px] border-[#6148FF] px-[16px] py-[8px] align-center rounded-[16px] mt-[50px]"
            placeholder={"Cari Kelas..."}/>    
        </div>
    );
}