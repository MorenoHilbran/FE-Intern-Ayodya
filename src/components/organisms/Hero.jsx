import Button from "../atoms/Button";

export default function Hero() {
    return (
        <div className="flex items-center bg-[#6148FF] text-white text-2xl font-bold text-center relative">
            <div className="relative flex justify-end w-2/3 h-1/2">
                <div className="absolute h-full w-1/2 align-center bg-gradient-to-l from-[#6148FF] to-transparent "></div>
                <img src="/assets/hero-img.svg" alt="Hero" className="w-full h-full" />
            </div>
            <div className="flex flex-col items-center mx-auto">
                <h1 className="text-2xl font-bold text-left">Belajar <br></br>dari Praktisi Terbaik!</h1>
                <Button className="flex gap-[10px] bg-white text-[#6148FF] py-[8px] px-[37px] rounded-[15px] w-full justify-center text-[16px] mt-[16px]" ButtonText="IKUTI KELAS" />
            </div>
        </div>
    );
}