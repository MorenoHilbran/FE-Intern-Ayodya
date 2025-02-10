import Button from "../atoms/Button";
import Search from "../molecules/Search";

export default function Navbar() {
  return (
    <div className="flex justify-between px-4 py-2 bg-[#6148FF] text-white w-full h-[100px] align-center">
      <div className="flex items-center ">
        <img
          src="/assets/Belajar_white 3.svg"
          className="w-[140px] h-[150px] ml-[95px] mb-[10px] mr-[35px]"
        />
        <Search className="p-[22px] align-center" placeholder={"Cari Kursus Terbaik..."} />
      </div>

      <div className="flex justify-end gap-[24px] items-center mr-[116px]">
        <Button className="flex gap-[10px] bg-[#6148FF] text-white cursor-pointer" imgSrc="/assets/masuk.svg" ButtonText="Masuk" to="/login" />
      </div>
    </div>
  );
}