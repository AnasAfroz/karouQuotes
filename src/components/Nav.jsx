import { useState } from 'react'

function Nav(){


    return(
        <>
        <nav className="h-16 w-full bg-[#FFEAFF] text-[#C0DBEA] flex items-center px-6 justify-between shadow-sm">
            <div>
                <h1 className="text-lg font-semibold font-rubik">22nd July 2025</h1>
            </div>
            <div>
                <h2 className="text-xl font-bold font-rubik text-[#A3E4DB]">KarouQuotes</h2>
            </div>
        </nav>
        </>
    )
}

export default Nav