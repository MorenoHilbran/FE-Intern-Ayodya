export default function Panel({ className = "" }) {
    return (
        <div className={`flex w-1/3 h-screen bg-[#6148FF] items-center justify-center ${className}`}>
            <img src="/assets/Belajar_white 3.svg" className="max-w-full" />
        </div>
    );
}
