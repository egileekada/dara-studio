import Router from 'next/router'
import React from 'react'

export default function AboutUs() {
 
    return ( 
        <div className="  lg:mt-0 mt-1 lg:pb-0 pb-48 lg:px-0 px-6 bg-[#121212] overflow-y-auto lg:overflow-y-hidden w-full h-screen flex lg:flex-row flex-col items-center  " > 
            <div className=' w-full flex lg:mt-0  ' > 
                <img  src="/images/About1.png" alt='one' className=' w-full h-full object-cover ' /> 
            </div> 
            <div className=' w-full flex justify-center items-center text-white h-full flex-col ' >
                <div className=' lg:px-24 xl:px-24 lg:mt-0 mt-10 ' > 
                        <p className=' font-Poppins-ExtraBold lg:text-4xl text-2xl lg:text-left text-left leading-snug ' >My name is Idara Adiakpan,</p>
                        <p className=' font-Poppins-ExtraBold lg:text-4xl text-2xl lg:text-left text-left lg:mt-5 text-[#C48F56] '>I’m a Photographer.</p> 
                        <p className=' font-Poppins-Regular mt-4 lg:text-left text-left' >The world without photography will be meaningless to us if there is no light and color, which opens up our minds and expresses passion.</p>
                        {/* <p className=' font-Poppins-Regular mt-4 lg:text-left text-left'>I hail from Akwa Ibom State, Nigeria. My style is a combination between photojournalism, fine-art photography, documentary photography, with a touch of fashion and creative lighting. My photos are inspired by light, color, techniques from black & white processing, vintage photos, creative perspective,  and of course, most importantly, the personalities of the people i photograph!</p> */}
                <p onClick={()=> Router.push("/about")} className=' font-Poppins-SemiBold text-sm mt-8  cursor-pointer text-[#C48F56]' >READ MORE</p>
                </div>
            </div >
        </div>
    )
} 