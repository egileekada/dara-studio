import Head from 'next/head'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import SliderComponent from '../components/SliderComponent'
import Categories from '../components/Categories'
import AboutUs from '../components/AboutUs'
import { motion, AnimatePresence } from "framer-motion"; 

export default function Index() {

    const [next, setNext] = React.useState(0) 
    const [tab, setTab] = React.useState(0) 
    // function getWindowDimensions() {
    //   const { innerWidth: width} = window;
    //   return {
    //     width 
    //   };
    // }

    // const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    // useEffect(() => {
    //   function handleResize() {
    //     setWindowDimensions(getWindowDimensions());
    //   }
  
    //   window.addEventListener('resize', handleResize);
    //   return () => window.removeEventListener('resize', handleResize);
    // }, []);

    const xOffset =  200;

    const variants = {
        enter: {
        x: -xOffset,
        opacity: 0
        },
        active: {
        x: 0,
        opacity: 1,
        transition: { delay: 0.5 }
        },
        exit:{
        x: xOffset,
        opacity: 0
        }
    };

    return (
            <div className=" w-full h-screen  overflow-hidden font-Poppins-Medium bg-[#0F0F0F] flex flex-col ">
                <Head>
                    <title>Shot by Dara Studios</title>
                    <meta name="description" content="Generated by create next app" />
                    <link rel="icon" href="/favicon.ico" />
                </Head> 
                <Navbar tab='home' />
                <div className=' flex w-screen lg:w-full overflow-y-hidden h-screen ' >
                    <div className=' w-[60px] relative z-50 hidden lg:flex flex-col ' >
                        <div id='SideText' className=' h-full flex -rotate-90 justify-center items-center px-4 text-white w-full font-Poppins-Medium ' >
                            <img src="/images/Twitter.png" className=' w-3 mr-3 '  /><Link href="" > twitter</Link>
                        </div>
                        <div className=' w-full ' > 
                            <div style={{borderRadius: "999px", width: "5px", height: "5px"}} className='mx-auto  bg-[#C48F56] ' />
                        </div>
                        <div id='' className=' -rotate-90  h-full flex justify-center items-center px-4 text-white w-full ' >
                            <img src="/images/Instagram.png" className=' w-3 mr-3  '  /><Link href="http://instagram.com/sbdstudios_" >instagram</Link>
                        </div>
                        <div className=' w-full ' > 
                            <div style={{borderRadius: "999px", width: "5px", height: "5px"}} className='mx-auto  bg-[#C48F56] ' />
                        </div>
                        <div id='' className=' -rotate-90  h-full flex justify-center items-center px-4 text-white w-full ' >
                            <img src="/images/Facebook.png" className=' w-3 mr-3 rotate-90  '  /><Link href="https://web.facebook.com/SBDStudios" >facebook</Link>
                        </div>
                    </div>
                    {tab === 0 && (
                        <SliderComponent next={setNext} tab={next} />
                    )}
                    {tab === 1 && (
                        <Categories />
                    )} 

                    <AnimatePresence  >
                        {tab === 2 && (
                            <motion.div className=' w-full h-full ' {...variants}> 
                                <AboutUs />
                            </motion.div >
                        )}
                    </AnimatePresence>

                    <div className=' w-[60px] relative z-50 hidden lg:flex flex-col ' >
                        
                        {tab !== 1 &&  
                            <button onClick={()=> setTab(1)} id='' className=' h-full -rotate-90  flex justify-center items-center px-4 relative text-white w-full font-Poppins-Medium ' >
                                CATEGORIES
                            </button>
                        }
                        {tab === 1 && ( 
                            <div  id='' className='-rotate-90  h-full flex justify-center items-center pl-1 text-white w-full ' >
                                <button  onClick={()=> setTab(0)} className=' py-3 px-2 w-full text-sm flex  items-center rounded bg-[#1D1D1D] ' >
                                    <img src="/images/close.png" className=' w-3 mr-3 '  />CLOSE
                                </button>
                            </div> 
                        )}

                        <div className=' w-full ' > 
                            <div style={{borderRadius: "999px", width: "5px", height: "5px"}} className='mx-auto  bg-[#C48F56] ' />
                        </div> 

                        {tab !== 2  &&  
                            <button onClick={()=> setTab(2)} className='-rotate-90  h-full flex justify-center items-center px-4 text-white w-full font-Poppins-Medium ' >
                                About
                            </button>
                        }
                        {tab === 2 && ( 
                            <div  id='' className='-rotate-90  h-full flex justify-center items-center pl-1 text-white w-full ' >
                                <button  onClick={()=> setTab(0)} className=' py-3 px-2 w-full text-sm flex  items-center rounded bg-[#1D1D1D] ' >
                                    <div className=' flex items-center bg-[#1D1D1D]' >
                                    <img src="/images/close.png" className=' w-3 mr-3 '  />CLOSE
                                    </div>
                                </button>
                            </div> 
                        )}
                    </div>
                </div>
                <div className=' w-full font-Poppins-Regular  pt-2 bg-[#0F0F0F] fixed z-40 bottom-0 lg:px-[60px] pb-3 ' >
                    {tab === 0 && (
                        <div className=' w-full hidden lg:flex justify-end items-center ' >
                            <p onClick={()=> setNext(0)} className={next === 0 ? ' text-[#C48F56] cursor-pointer mx-2 ' : ' text-white cursor-pointer mx-2 ' } >01</p>
                            {next === 0 && (
                                <div className=' h-[1px] bg-white w-6 mx-2 ' />
                            )}
                            <p onClick={()=> setNext(1)} className={next === 1 ? ' text-[#C48F56] cursor-pointer mx-2 ' : ' text-white cursor-pointer mx-2 ' }>02</p>
                            {next === 1 && (
                                <div className=' h-[1px] bg-white w-6 mx-2 ' />
                            )}
                            <p onClick={()=> setNext(2)} className={next === 2 ? ' text-[#C48F56] cursor-pointer mx-2 ' : ' text-white cursor-pointer mx-2 ' }>03</p>
                            {next === 2 && (
                                <div className=' h-[1px] bg-white w-6 mx-2 ' />
                            )}
                        </div>
                    )}

                    <div className=' w-full h-[60px] flex lg:hidden items-center ' > 
                        {tab !== 1 && 
                            <button onClick={()=> setTab(1)} className=' text-[#C48F56] w-32 relative z-20 flex justify-center mx-auto font-Poppins-Medium ' >
                                <p> CATEGORIES</p>
                            </button>  
                        } 
                        {tab === 1 && 
                            <div onClick={()=> setTab(0)} id='' className='h-full flex relative z-20 mx-auto justify-center items-center text-white w-28 ' >
                                <button className=' h-12 px-3 w-full flex items-center rounded bg-[#1D1D1D] ' >
                                    <img src="/images/close.png" className=' w-5 mt-1 mr-2 '  /><Link href="" >CLOSE</Link>
                                </button>
                            </div>
                        }
                        <div className=' w-full absolute h-full flex items-center justify-center  ' > 
                            <div style={{ borderRadius: "9999px" }} className=" bg-[#C48F56] w-[6px] h-[6px] rounded-full " /> 
                        </div>
                        <div className=' text-white w-32 mx-auto flex relative z-20 justify-center font-Poppins-Medium  ' > 
                            <button onClick={()=> setTab(2)} >ABOUT</button>               
                        </div> 
                    </div>
                </div>
            </div>
    )
} 