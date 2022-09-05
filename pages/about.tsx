import Head from 'next/head'
import React from "react";
import Navbar from "../components/Navbar";
import Image from 'next/image'
import Footer from '../components/footer';

export default function About(){
    return(
        <div className=" w-full h-full flex-1 bg-[#0f0f0f] flex flex-col ">
            <Head>
            <title>Create Next App</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
            </Head> 
            <Navbar tab='about' />
            <div className=" pt-36 w-full  " > 
                <div className=" py-20 w-full flex items-center  " >
                <div className=' w-full    ' > 
                    <Image src="/images/One.png" width={639} height={702} objectFit='cover' /> 
                    </div>
                    <div className=' w-full flex px-28 text-white h-full justify-center items-center ' >
                    <p className='w-529px NotoSan-300 text-2xl' >We invest noteworthy energy in wedding photography, corporate, family and senior pictures, normally heading off to your objective to get the perfect moment in the perfect place.</p>
                    </div >
                </div>
                <div className=" py-20 w-full flex items-center  " >
                    <div className=' w-full flex px-28 text-white h-full justify-center items-center ' >
                    <p className='w-529px NotoSan-300 text-2xl' >We invest noteworthy energy in wedding photography, corporate, family and senior pictures, normally heading off to your objective to get the perfect moment in the perfect place.</p>
                    </div >
                    <div className=' w-full    ' > 
                    <Image src="/images/Two.png" width={639} height={702} objectFit='cover' /> 
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}