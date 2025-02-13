import { useNavigate } from "react-router-dom";

export default function Button({ onClick, className = "", imgSrc, ButtonText, to, children }) {
    const navigate = useNavigate();

    const handleClick = () => {
        if (to) {
            navigate(to);
        } else if (onClick) {
            onClick();
        }
    };

    return (
        <button 
            onClick={handleClick}
            className={`flex items-center ${className} cursor-pointer`}
        >
            {imgSrc && <img src={imgSrc} alt="icon" className="w-6 h-6 mr-2" />}
            {ButtonText && <span>{ButtonText}</span>}
            {children} 
        </button>
    );
}
