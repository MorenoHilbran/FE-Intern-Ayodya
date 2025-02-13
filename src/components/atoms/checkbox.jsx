import React, { useState } from "react";

const Checkbox = () => {
  const [checked, setChecked] = useState(false);

  return (
    <label className="relative flex items-center cursor-pointer select-none">
      
      <input
        type="checkbox"
        className="peer hidden"
        checked={checked}
        onChange={() => setChecked(!checked)}
      />

      
      <div
        className={`w-[24px] h-[24px] border-2 border-[#8451e6] rounded-md flex items-center justify-center transition-all duration-200 ease-in-out ${
          checked ? "bg-[#6148FF]" : "bg-[#E8F1FF]"
        }`}
      >
    
        {checked && <img src="/assets/check-icon.svg" alt="Check" className="w-[16px] h-[16px]" />}
      </div>
    </label>
  );
};

export default Checkbox;
