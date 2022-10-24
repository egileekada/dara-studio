import React from "react";
import Image from 'next/image'
import Router from "next/router";

export default function Footer(){
    return(
        <div className=" w-full py-7 pt-14 flex flex-col px-6 lg:px-12 bg-[#232323] text-white " > 
            <div className=" w-full flex flex-col lg:flex-row " >
                <div className="w-full flex flex-col " >
                    <p className=' font-Poppins-Bold text-[32px] lg:text-left text-center lg:text-[35px] leading-snug ' >SBD <span className=" font-Poppins-Regular" >STUDIOS</span></p>
                    <p className='  lg:w-[522px] xl:w-[522px] lg:text-left text-center font-Poppins-Regular mt-4 ' >The world without photography will be
                        meaningless to us if there is no light and color,
                        which opens up our minds and expresses passion.</p>
                </div>
                <div className="w-full flex flex-col lg:items-end lg:mt-0 mt-12 " >
                    <p className=' font-Poppins-Bold text-[32px] lg:text-right text-center lg:text-[35px] leading-snug ' >Contacts</p>
                    <div className=" w-full lg:w-72 font-Poppins-Regular mt-4 flex lg:flex-row flex-col items-center " >
                        <p>Phone:</p>  
                            <p className="lg:ml-auto ">+2349077601790</p> 
                    </div>
                    <div className=" w-full lg:w-72 font-Poppins-Regular mt-6 lg:mt-1 flex lg:flex-row flex-col items-center " >
                        <p className="  " >Email:</p> 
                            <p className=" lg:ml-auto " >support@sbdstudios.com</p> 
                    </div> 
                </div>
            </div>
            {/* <img alt="footer" src="/images/sbd.png" className=" w-20 ml-20 lg:flex hidden "  /> */}
            <div className=" w-full flex flex-col lg:mt-10 mt-10 items-center  " >
                <p className=" font-Poppins-Regular text-sm lg:text-[15px] text-center " >Copyright 2022 SBD STUDIOS. All Rights Reserved.</p>
                <button onClick={()=> Router.push("")} className="font-Poppins-Regular mt-1 text-[13px] text-center lg:text-base " >Developed by ICOWEB AGENCY</button>
            </div>
        </div>
    )
}