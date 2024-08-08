
'use client'
import { useState } from "react";
import Flip from "./component/flip";

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="h-screen w-full flex justify-center items-center">
         <div className="w-[335px] flex gap-[8px] bg-white p-2 flex-wrap">
            {Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className="relative w-[100px] h-[100px]">
                    <Flip index={index} activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
                </div>
            ))}
        </div>
    </div>
  );
}
