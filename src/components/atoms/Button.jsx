export default function Button({ onClick, className, imgSrc, ButtonText }) {
    return (
        <button 
            onClick={onClick}
            className={className}
        >
            {imgSrc && <img src={imgSrc} alt="icon" className="w-6 h-6" />}
            {ButtonText && <span>{ButtonText}</span>}
        </button>
    );
}
