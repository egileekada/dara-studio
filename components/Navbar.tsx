import Link from 'next/link'
import React from 'react'

export default function Navbar(props: any){
    return( 
        <div className=' w-full flex justify-between items-center fixed px-6 lg:px-12 z-40 py-3 lg:py-6 bg-black bg-opacity-30 text-white top-0 ' > 
            <img src="/images/sbd.png" className=" w-10 lg:w-20 "  />
            <button> 
                <img src="/images/roll.png" className=" w-12 lg:hidden "  />
            </button>
            <div className=' hidden lg:flex ' > 
                <a href='/' className={props.tab === "home" ? ' mx-6 w-20 h-9 Raleway-600 border border-[#FF9B05] flex justify-center items-center ' : ' mx-6 w-20 h-9 flex justify-center items-center Raleway-600 '}>Home</a>
                <a href='/about' className={props.tab === "about" ? ' mx-6 w-20 h-9 flex justify-center items-center Raleway-600 border border-[#FF9B05] ' : ' mx-6 w-20 h-9 flex justify-center items-center Raleway-600 '}>About </a>
                <a href='/portfolio' className={props.tab === "portfolio" ? ' mx-6 w-20 h-9 flex justify-center items-center Raleway-600 border border-[#FF9B05] ' : ' mx-6 w-20 h-9 flex justify-center items-center Raleway-600 '} >Portfolio</a>
                <a href='/' className={props.tab === "chat" ? ' mx-6 w-20 h-9 flex justify-center items-center Raleway-600 border border-[#FF9B05] ' : ' mx-6 w-20 h-9 flex justify-center items-center Raleway-600 '} >Let’s talk</a>
            </div>
        </div> 
    )
}