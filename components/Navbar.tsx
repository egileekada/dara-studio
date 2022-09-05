import Router from 'next/router'
import React from 'react'

export default function Navbar(props: any){

    const [tab, setTab] = React.useState(false)

    const el: any = document.querySelector('html'); 

    React.useEffect(()=> {
        if(tab){
            el.style.overflow = 'hidden';
            } else {
            el.style.overflow = 'auto';
        }
    }, [tab])

    return( 
        <div className={tab ? ' w-full flex justify-between items-center fixed px-6 lg:px-12 z-40 py-3 lg:py-6 text-white top-0 ' : ' w-full flex justify-between items-center fixed px-6 lg:px-12 z-40 py-3 lg:py-6 bg-black bg-opacity-30 text-white top-0 '} > 
            <button  className=' relative z-50' onClick={()=> Router.push("/")} >
                <img alt='Navbar' src="/images/sbd.png" className=" w-10 lg:w-20 "  />
            </button>
            {!tab && 
                <button onClick={()=> setTab(true)} > 
                    <img alt='Navbar' src="/images/roll.png" className=" w-12 lg:hidden "  />
                </button>
            }
            {tab && 
                <button className=' relative z-50' onClick={()=> setTab(false)} > 
                    <img alt='Navbar' src="/images/close.png" className=" w-12 mt-2 lg:hidden "  />
                </button>
            }
            <div className=' hidden lg:flex ' > 
                <button onClick={()=> {Router.push("/"), setTab(false)}} className={props.tab === "home" ? ' mx-6 w-20 h-9 Raleway-600 border border-[#FF9B05] flex justify-center items-center ' : ' mx-6 w-20 h-9 flex justify-center items-center Raleway-600 '}>Home</button>
                <button onClick={()=> {Router.push("/about"), setTab(false)}} className={props.tab === "about" ? ' mx-6 w-20 h-9 flex justify-center items-center Raleway-600 border border-[#FF9B05] ' : ' mx-6 w-20 h-9 flex justify-center items-center Raleway-600 '}>About </button>
                <button onClick={()=> {Router.push("/portfolio"), setTab(false), sessionStorage.setItem("tab", "0")}} className={props.tab === "portfolio" ? ' mx-6 w-20 h-9 flex justify-center items-center Raleway-600 border border-[#FF9B05] ' : ' mx-6 w-20 h-9 flex justify-center items-center Raleway-600 '} >Portfolio</button>
                <button onClick={()=> {Router.push("/"), setTab(false)}} className={props.tab === "chat" ? ' mx-6 w-20 h-9 flex justify-center items-center Raleway-600 border border-[#FF9B05] ' : ' mx-6 w-20 h-9 flex justify-center items-center Raleway-600 '} >Let’s talk</button>
            </div>
            {tab &&  
                <div className=' fixed inset-0 bg-black z-40 w-full flex flex-col items-center bg-opacity-60 justify-center ' >
                    <button onClick={()=> {Router.push("/"), setTab(false)}} className={props.tab === "home" ? ' my-6 w-20 lg:text-base text-lg  h-11 Raleway-600 border border-[#FF9B05] flex justify-center items-center ' : ' lg:text-base text-lg my-6 w-20 h-11 flex justify-center items-center Raleway-600 '}>Home</button>
                    <button onClick={()=> {Router.push("/about"), setTab(false)}} className={props.tab === "about" ? ' lg:text-base text-lg my-6 w-20 h-11 flex justify-center items-center Raleway-600 border border-[#FF9B05] ' : ' lg:text-base text-lg my-6 w-20 h-11 flex justify-center items-center Raleway-600 '}>About </button>
                    <button onClick={()=> {Router.push("/portfolio"), setTab(false), sessionStorage.setItem("tab", "0")}} className={props.tab === "portfolio" ? ' lg:text-base text-lg my-6 w-20 h-11 flex justify-center items-center Raleway-600 border border-[#FF9B05] ' : ' lg:text-base text-lg my-6 w-20 h-11 flex justify-center items-center Raleway-600 '} >Portfolio</button>
                    <button onClick={()=> {Router.push("/"), setTab(false)}} className={props.tab === "chat" ? ' lg:text-base text-lg my-6 w-20 h-11 flex justify-center items-center Raleway-600 border border-[#FF9B05] ' : ' lg:text-base text-lg my-6 w-20 h-11 flex justify-center items-center Raleway-600 '} >Let’s talk</button>
                </div>
            }
        </div> 
    )
}