'use client'
import { useState, useEffect } from "react"

const Flip = ({ index, activeIndex, setActiveIndex }:any) => {
    const isFlip = activeIndex === index;
    const [zIndex, setZIndex] = useState(97);

    useEffect(() => {
        if (isFlip) {
            setZIndex(99); // Set zIndex high when flipping
        } else {
            // Reset zIndex after 1 second when flipping back
            const timeout = setTimeout(() => {
                setZIndex(97);
            }, 1000);

            return () => clearTimeout(timeout); // Clean up the timeout if component unmounts or re-renders
        }
    }, [isFlip]);

    const handleClick = () => {
        setActiveIndex(index);
    }

    return (
        <div className={`box ${isFlip ? 'flip' : ''}`} style={{ zIndex }}>
            <div className="front" onClick={handleClick}></div>
            <div className="back" onClick={() => setActiveIndex(null)}></div>
        </div>
    );
}

export default Flip;
