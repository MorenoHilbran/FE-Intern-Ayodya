import Button from "../atoms/Button";

export default function ButtonBack() {
    return (
        <Button to="/user/home" className="text-[#6148FF] text-[16px] font-semibold mb-[15px] mt-[24px]">
            <img src="/assets/back.svg" alt="Back" className="w-5 h-5 mr-2" />
            <span>Kembali ke Beranda</span>
        </Button>
    );
}
