import React from "react";
import Image from 'next/image'

export default function Footer(){
    return(
        <div className=" w-full py-7 flex flex-col px-6 text-white " >
            <div className=" w-full flex justify-between lg:justify-center mx-auto items-center " >  
                <img src="/images/mobile.png" className=" w-4 lg:hidden "  />
                <div className="  flex items-center lg:flex-row flex-col " >
                    <div className=" flex justify-center items-center mx-3 " > 
                        <img src="/images/mail.png" className=" w-5 h-4 "  />
                        <p className=" Raleway-300 ml-3  " >darastudio@gmail.com</p>
                    </div>
                    <div className=" flex justify-center items-center mx-3 " > 
                    <img src="/images/call.png" alt="dd" className=" w-5 h-5" /> 
                        <p className=" Raleway-300 ml-3  " >darastudio@gmail.com</p>
                    </div>
                </div>
                <div className=" flex items-center lg:flex-row flex-col " > 
                    <a href="#" className="mx-3" ><img src="/images/Snapchat.png" className=" w-5 h-5 "  /></a>
                    <a href="#" className="mx-3" ><img src="/images/Instagram.png" className=" w-5 h-5 "  /></a>
                    <a href="#" className="mx-3" ><img src="/images/Twitter.png" className=" w-5 h-5 "  /></a>
                </div>
            </div> 
            <img src="/images/sbd.png" className=" w-20 ml-20 lg:flex hidden "  />
            <div className=" w-full flex flex-col lg:mt-0 mt-10 items-center  " >
                <a href="#" className="NotoSan-400 text-sm " >Develop by Icoweb</a>
                <p className="NotoSan-400 text-sm mt-1 " >Dara Studio © 2022 All Right Reserved</p>
            </div>
        </div>
    )
}