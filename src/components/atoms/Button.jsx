export default function Button({ onClick, children, className, imgSrc }) {
    return (
        <button 
            onClick={onClick}
            className={` text-[#6148FF] hover:opacity-80 flex items-center gap-2 font-bold rounded-[10px] ${className}`}
        >
            {imgSrc && <img src={imgSrc} alt="icon" className="w-6 h-6" />}
            {children}
        </button>
    );
}
