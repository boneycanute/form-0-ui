import React from "react";
import "../styles/Mascot.css";
import Image from "next/image";

interface MascotProps {
  className?: string;
}

export const Mascot: React.FC<MascotProps> = ({ className = "" }) => {
  return (
    <div className={`mascot-wrapper ${className}`}>
      {/* <Image 
        src="/mascot.svg"
        alt="Mascot"
        width={300}
        height={300}
        className="mascot-svg"
        priority
      /> */}
    </div>
  );
};

export default Mascot;
