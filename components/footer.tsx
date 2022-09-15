import React from "react";
import Image from 'next/image'
import Router from "next/router";

export default function Footer(){
    return(
        <div className=" w-full py-7 flex flex-col px-6 text-white " >
            <div className=" w-full flex justify-between lg:justify-center mx-auto items-center " >  
                <img alt="footer" src="/images/mobile.png" className=" w-4 lg:hidden "  />
                <div className="  flex items-center lg:flex-row flex-col " >
                    <div className=" flex justify-center items-center mx-3 " > 
                        <img alt="footer" src="/images/mail.png" className=" w-5 h-4 "  />
                        <p className=" Raleway-300 ml-3  " >info@shotbydara.com</p>
                    </div>
                    <div className=" flex justify-center items-center lg:mt-0 mt-2 mx-3 " > 
                    <img alt="footer" src="/images/call.png" className=" w-5 h-5" /> 
                        <p className=" Raleway-300 ml-3  " >+2348035583369</p>
                    </div>
                </div>
                <div className=" flex items-center lg:flex-row flex-col " > 
                    <button onClick={()=> Router.push("#")} className="lg:mx-3 my-3" ><img alt="footer" src="/images/Snapchat.png" className=" w-5 h-5 "  /></button>
                    <button onClick={()=> Router.push("http://instagram.com/sbdstudios_")} className="lg:mx-3 my-3" ><img alt="footer" src="/images/Instagram.png" className=" w-5 h-5 "  /></button>
                    <button onClick={()=> Router.push("#")} className="lg:mx-3 my-3" ><img alt="footer" src="/images/Twitter.png" className=" w-5 h-5 "  /></button>
                </div>
            </div> 
            <img alt="footer" src="/images/sbd.png" className=" w-20 ml-20 lg:flex hidden "  />
            <div className=" w-full flex flex-col lg:mt-0 mt-10 items-center  " >
                <button onClick={()=> Router.push("#")} className="NotoSan-400 text-sm " >Develop by Icoweb</button>
                <p className="NotoSan-400 text-sm mt-1 " >Dara Studio © 2022 All Right Reserved</p>
            </div>
        </div>
    )
}