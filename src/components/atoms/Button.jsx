export default function Button({onClick,children}) {
    return (
<button 
onClick={onClick}
className="px-2 py-2 text-[#6148FF] bg-[#6148FF] hover:opacity-80 flex items-center gap-2 font-bold rounded-[10px]">
                    {children}
</button>
    )
}
