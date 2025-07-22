import { useState } from "react";

function Hero(){
    const numPetals = 40; // A good number for a beautiful effect

    const petals = Array.from({ length: numPetals }).map((_, i) => {
        const style = {
            left: `${Math.random() * 100}vw`, 
            width: `${Math.random() * 15 + 10}px`,
            height: `${Math.random() * 10 + 10}px`,
            animationDelay: `${Math.random() * 10}s`, 
            transform: `rotate(${Math.random() * 360}deg)`,
        };
        return <div key={i} className="petal" style={style}></div>;
    });

    return (
        <>
            {/* The beautiful, solid card design */}
            <div className="bg-gradient-to-br from-[#A1E8FF] to-[#FEEFFF] text-center rounded-2xl shadow-2xl
                       w-[90%] max-w-md p-8
                       md:max-w-xl
                       lg:max-w-3xl lg:p-12
                       transform transition-transform duration-300
                       absolute top-1/2 -translate-y-1/2 
                       left-1/2 -translate-x-1/2 
                       lg:left-8 lg:translate-x-0
                       hover:scale-105">
                
                {/* Quote with Gradient Text */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-[#F875AA] to-[#ff92a3] bg-clip-text text-transparent font-rubik leading-tight">
                    "Believe in yourself! If you don't,
                    <br />
                    who will?"
                </h1>
            </div>

            {/* Container for the falling petals */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                {petals}
            </div>
        </>
    )
}

export default Hero;