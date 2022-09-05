import Router from 'next/router'
import React from 'react'

export default function Navbar(props: any){

    return( 
        <div className=' w-full flex justify-between items-center fixed px-6 lg:px-12 z-40 py-3 lg:py-6 bg-black bg-opacity-30 text-white top-0 ' > 
            <button onClick={()=> Router.push("/")} >
                <img alt='Navbar' src="/images/sbd.png" className=" w-10 lg:w-20 "  />
            </button>
            <button> 
                <img alt='Navbar' src="/images/roll.png" className=" w-12 lg:hidden "  />
            </button>
            <div className=' hidden lg:flex ' > 
                <button onClick={()=> Router.push("/")} className={props.tab === "home" ? ' mx-6 w-20 h-9 Raleway-600 border border-[#FF9B05] flex justify-center items-center ' : ' mx-6 w-20 h-9 flex justify-center items-center Raleway-600 '}>Home</button>
                <button onClick={()=> Router.push("/about")} className={props.tab === "about" ? ' mx-6 w-20 h-9 flex justify-center items-center Raleway-600 border border-[#FF9B05] ' : ' mx-6 w-20 h-9 flex justify-center items-center Raleway-600 '}>About </button>
                <button onClick={()=> Router.push("/portfolio")} className={props.tab === "portfolio" ? ' mx-6 w-20 h-9 flex justify-center items-center Raleway-600 border border-[#FF9B05] ' : ' mx-6 w-20 h-9 flex justify-center items-center Raleway-600 '} >Portfolio</button>
                <button onClick={()=> Router.push("/")} className={props.tab === "chat" ? ' mx-6 w-20 h-9 flex justify-center items-center Raleway-600 border border-[#FF9B05] ' : ' mx-6 w-20 h-9 flex justify-center items-center Raleway-600 '} >Let’s talk</button>
            </div>
        </div> 
    )
}