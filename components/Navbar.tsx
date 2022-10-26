import Router from 'next/router'
import React from 'react'

export default function Navbar(props: any){

    const [tab, setTab] = React.useState(false)

    // const el: any = document.querySelector('html'); 

    // React.useEffect(()=> {
    //     if(tab){
    //         el.style.overflow = 'hidden';
    //         } else {
    //         el.style.overflow = 'auto';
    //     }
    // }, [tab])

    return( 
        <div className={tab ? ' w-full flex justify-between items-center px-6 lg:px-[60px] z-40 py-4 lg:py-6 text-white top-0 ' : ' w-full flex justify-between items-center  px-6 lg:px-[60px] z-40 py-4 lg:py-6 bg-[#0F0F0F] bg-opacity-30 text-white top-0 '} > 
            <button  className=' relative z-50' onClick={()=> Router.push("/")} > 
                <p className=' font-Poppins-Bold text-[32px] leading-snug ' >SBD <span className=" font-Poppins-Regular" >STUDIOS</span></p>
                {/* <img alt='Navbar' src="/images/sbd.png" className=" w-10 lg:w-20 "  /> */}
            </button>
            {!tab && 
                <button onClick={()=> setTab(true)} className='w-12 flex justify-center'  > 
                    <img alt='Navbar' src="/images/roll.png" className=" w-12 lg:hidden "  />
                </button>
            }
            {tab && 
                <button className=' relative z-50 w-12 flex justify-center' onClick={()=> setTab(false)} > 
                    <img alt='Navbar' src="/images/close.png" className=" w-8 mt-1 lg:hidden "  />
                </button>
            }
            <div className=' hidden lg:flex ' > 
                <button onClick={()=> {Router.push("/"), setTab(false)}} className={props.tab === "home" ? ' mx-6 w-20 h-9 font-Poppins-SemiBold border-b border-[#FF9B05] flex justify-center items-center ' : ' mx-6 w-20 h-9 flex justify-center items-center font-Poppins-SemiBold '}>Home</button>
                <button onClick={()=> {Router.push("/about"), setTab(false)}} className={props.tab === "about" ? ' mx-6 w-32 h-9 flex justify-center items-center font-Poppins-SemiBold border-b border-[#FF9B05] ' : ' mx-6 w-32 h-9 flex justify-center items-center font-Poppins-SemiBold '}>ABOUT ME</button>
                <button onClick={()=> {Router.push("/gallery"), setTab(false), sessionStorage.setItem("tab", "0")}} className={props.tab === "portfolio" ? ' mx-6 w-20 h-9 flex justify-center items-center font-Poppins-SemiBold border-b border-[#FF9B05] ' : ' mx-6 w-20 h-9 flex justify-center items-center font-Poppins-SemiBold '} >GALLERY</button>
                <button onClick={()=> {Router.push("http://wa.me/2348035583369"), setTab(false)}} className={props.tab === "chat" ? ' mx-6 w-20 h-9 flex justify-center items-center font-Poppins-SemiBold border-b border-[#FF9B05] ' : ' mx-6 w-20 h-9 flex justify-center items-center font-Poppins-SemiBold '} >BOOKING</button>
            </div>
            {tab &&  
                <div className=' fixed inset-0 bg-black z-40 w-full flex flex-col items-center bg-opacity-60 justify-center ' >
                    <button onClick={()=> {Router.push("/"), setTab(false)}} className={props.tab === "home" ? ' my-6 w-20 lg:text-base text-lg  h-11 font-Poppins-SemiBold border-b border-[#FF9B05] flex justify-center items-center ' : ' lg:text-base text-lg my-6 w-20 h-11 flex justify-center items-center font-Poppins-SemiBold '}>HOME</button>
                    {/* <button onClick={()=> {Router.push("/about"), setTab(false)}} className={props.tab === "about" ? ' lg:text-base text-lg my-6 w-32 h-11 flex justify-center items-center font-Poppins-SemiBold border-b border-[#FF9B05] ' : ' lg:text-base text-lg my-6 w-32 h-11 flex justify-center items-center font-Poppins-SemiBold '}>ABOUT ME</button> */}
                    <button onClick={()=> {Router.push("/gallery"), setTab(false), sessionStorage.setItem("tab", "0")}} className={props.tab === "portfolio" ? ' lg:text-base text-lg my-6 w-20 h-11 flex justify-center items-center font-Poppins-SemiBold border-b border-[#FF9B05] ' : ' lg:text-base text-lg my-6 w-20 h-11 flex justify-center items-center font-Poppins-SemiBold '} >GALLERY</button>
                    <button onClick={()=> {Router.push("http://wa.me/2348035583369"), setTab(false)}} className={props.tab === "chat" ? ' lg:text-base text-lg my-6 w-20 h-11 flex justify-center items-center font-Poppins-SemiBold border-b border-[#FF9B05] ' : ' lg:text-base text-lg my-6 w-20 h-11 flex justify-center items-center font-Poppins-SemiBold '} >BOOKING</button>
                </div>
            }
        </div> 
    )
}