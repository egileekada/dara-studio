import React from "react";
import Navbar from "../components/Navbar";
import Head from 'next/head'
import Footer from "../components/footer";

export default function Portfolio(){

    const [tab, setTab] = React.useState("0")
    
    React.useEffect(()=> {
        if(sessionStorage.getItem("tab")){
            setTab(sessionStorage.getItem("tab")+"")
        }
    },[tab])

    const ClickHandler =(items: any)=>{
        sessionStorage.setItem("tab", items)
        setTab(items)
    }

    return(
        <div className=" w-full h-full flex-1 bg-[#0f0f0f] flex flex-col ">
            <Head>
                <title>Shot by Dara Studios</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head> 
            <Navbar tab='portfolio' />
            <div className=" lg:pt-44 pt-20 w-full flex lg:flex-row flex-col lg:justify-center  " >
                <div className=" NotoSan-500 flex lg:flex-col justify-center lg:justify-start items-start lg:mb-0 mb-10" >
                    <button onClick={()=> ClickHandler("0")} className={tab === "0" ? "text-white lg:mx-0 px-2 lg:border-r-0 border-r my-2 lg:text-base text-[10px] " : "text-[#A1A1A1] lg:mx-0 px-2 lg:border-r-0 border-r my-2 lg:text-base text-[10px] "}>BEAUTY</button>
                    <button onClick={()=> ClickHandler("1")} className={tab === "1" ? "text-white lg:mx-0 px-2 lg:border-r-0 border-r my-2 lg:text-base text-[10px] " : "text-[#A1A1A1] lg:mx-0 px-2 lg:border-r-0 border-r my-2 lg:text-base text-[10px] "}>LIFESTYLE</button>
                    <button onClick={()=> ClickHandler("2")} className={tab === "2" ? "text-white lg:mx-0 px-2 lg:border-r-0 border-r my-2 lg:text-base lg:flex hidden text-[10px] " : "text-[#A1A1A1] lg:mx-0 px-2 lg:border-r-0 border-r my-2 lg:text-base lg:flex hidden text-[10px] "}>FAMILY PORTRAIT</button>
                    <button onClick={()=> ClickHandler("2")} className={tab === "2" ? "text-white lg:mx-0 px-2 lg:border-r-0 border-r my-2 lg:text-base text-[10px] lg:hidden " : "text-[#A1A1A1] lg:mx-0 px-2 lg:border-r-0 border-r my-2 lg:text-base text-[10px] lg:hidden "}>FAMILY</button>
                    <button onClick={()=> ClickHandler("3")} className={tab === "3" ? "text-white lg:mx-0 px-2 lg:border-r-0 border-r my-2 lg:text-base text-[10px] " : "text-[#A1A1A1] lg:mx-0 px-2 lg:border-r-0 border-r my-2 lg:text-base text-[10px] "}>PORTRAIT</button>
                    <button onClick={()=> ClickHandler("4")} className={tab === "4" ? "text-white lg:mx-0 px-2 my-2 lg:text-base text-[10px] " : "text-[#A1A1A1] lg:mx-0 px-2 my-2 lg:text-base text-[10px] "}>DOCUMENTARY</button>
                </div>
                {tab === "0" && ( 
                    <div className=" flex flex-col lg:ml-20 mb-20 " >
                        <div className=" grid lg:grid-cols-2 grid-cols-1 gap-6" >
                            <img alt='gallery' src="/images/Beauty/1.png" className=" w-full lg:w-80" />
                            <img alt='gallery' src="/images/Beauty/2.png" className=" w-full lg:w-80" />
                            <img alt='gallery' src="/images/Beauty/3.png" className=" w-full lg:w-80" />
                            <img alt='gallery' src="/images/Beauty/4.png" className=" w-full lg:w-80" />
                            <img alt='gallery' src="/images/Beauty/5.png" className=" w-full lg:w-80" />
                            <img alt='gallery' src="/images/Beauty/6.png" className=" w-full lg:w-80" />
                            <img alt='gallery' src="/images/Beauty/7.png" className=" w-full lg:w-80" />
                            <img alt='gallery' src="/images/Beauty/8.png" className=" w-full lg:w-80" />
                        </div>
                    </div>
                )}
                {tab === "1" && ( 
                    <div className=" flex flex-col lg:ml-20 mb-20 " >
                        <div className="flex flex-col" >
                            <div className=" flex lg:flex-row flex-col " >
                                <img alt='gallery' src="/images/lifestyle/1.png" className=" w-full lg:w-80 lg:mr-3" />
                                <img alt='gallery' src="/images/lifestyle/5.png" className=" w-full lg:w-80 lg:mt-0 mt-6 lg:ml-3" />
                            </div>
                            <img alt='gallery' src="/images/lifestyle/2.png" className=" w-full my-6" />
                            <div className=" flex lg:flex-row flex-col " >
                                <img alt='gallery' src="/images/lifestyle/3.png" className=" w-full lg:w-80 lg:mr-3" />
                                <img alt='gallery' src="/images/lifestyle/6.png" className=" w-full lg:w-80 lg:mt-0 mt-6 lg:ml-3" />
                            </div>
                            <img alt='gallery' src="/images/lifestyle/4.png" className=" w-full my-6" />
                        </div> 
                    </div>
                )}
                {tab === "2" && ( 
                    <div className=" flex flex-col lg:ml-20 mb-20 " >
                        <div className=" grid lg:grid-cols-2 grid-cols-1 gap-6" >
                            <img alt='gallery' src="/images/family/2.png" className=" w-full lg:w-80" />
                            <img alt='gallery' src="/images/Beauty/5.png" className=" w-full lg:w-80" />
                            <img alt='gallery' src="/images/family/3.png" className=" w-full lg:w-80" />
                            <img alt='gallery' src="/images/family/4.png" className=" w-full lg:w-80" />
                            <img alt='gallery' src="/images/family/5.png" className=" w-full lg:w-80" />
                            <img alt='gallery' src="/images/family/6.png" className=" w-full lg:w-80" />
                            <img alt='gallery' src="/images/family/7.png" className=" w-full lg:w-80" />
                            <img alt='gallery' src="/images/family/8.png" className=" w-full lg:w-80" />
                        </div>
                    </div>
                )}
                {tab === "3" && ( 
                    <div className=" flex flex-col lg:ml-20 mb-20 " >
                        <div className=" grid lg:grid-cols-2 grid-cols-1 gap-6" >
                            <img alt='gallery' src="/images/Portrait/1.png" className=" w-full lg:w-80" />
                            <img alt='gallery' src="/images/Portrait/2.png" className=" w-full lg:w-80" />
                            <img alt='gallery' src="/images/Portrait/3.png" className=" w-full lg:w-80" />
                            <img alt='gallery' src="/images/Portrait/4.png" className=" w-full lg:w-80" />
                            <img alt='gallery' src="/images/Portrait/5.png" className=" w-full lg:w-80" />
                            <img alt='gallery' src="/images/Portrait/6.png" className=" w-full lg:w-80" />
                            <img alt='gallery' src="/images/Portrait/7.png" className=" w-full lg:w-80" />
                            <img alt='gallery' src="/images/Portrait/8.png" className=" w-full lg:w-80" />
                        </div>
                    </div>
                )}
                {tab === "4" && ( 
                    <div className=" flex flex-col lg:ml-20 mb-20 " >
                        <div className=" grid lg:grid-cols-2 grid-cols-1 gap-6" >
                            <img alt='gallery' src="/images/Documentary/1.png" className=" w-full lg:w-80" />
                            <img alt='gallery' src="/images/Documentary/2.png" className=" w-full lg:w-80" />
                            <img alt='gallery' src="/images/Documentary/3.png" className=" w-full lg:w-80" />
                            <img alt='gallery' src="/images/Documentary/4.png" className=" w-full lg:w-80" />
                            <img alt='gallery' src="/images/Documentary/5.png" className=" w-full lg:w-80" />
                            <img alt='gallery' src="/images/Documentary/6.png" className=" w-full lg:w-80" />
                            <img alt='gallery' src="/images/Documentary/7.png" className=" w-full lg:w-80" />
                            <img alt='gallery' src="/images/Documentary/8.png" className=" w-full lg:w-80" />
                        </div>
                    </div>
                )}
            </div>
            <Footer />
        </div>
    )
}