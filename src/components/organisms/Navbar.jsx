import Button from "../atoms/button";
import Search from "../molecules/search";

export default function Navbar() {
    return (
        <div className="flex justify-between px-4 py-2 bg-[#6148FF] text-white w-full h-[100px]">
            <img src="/assets/Belajar_white 3.svg" className="w-[140px] h-[150px] ml-[95px] mb-[10px]"/>
            <Search 
            className="w-[526px] h-[62px]"
            placeholder="Cari Kursus terbaik..."/>
            <div className="flex justify-end gap-[24px] items-center mr-[116px]">
                <Button 
                className="flex items-center gap-[8px]"
                imgSrc="/assets/masuk.svg" 
                text="Masuk"
                />
            </div>
        </div>
    )
}