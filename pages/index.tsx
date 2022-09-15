import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image' 
import Footer from '../components/footer'
import OtherImage from '../components/OtherImage'
import Navbar from '../components/Navbar'
import Link from 'next/link'
import Router from 'next/router'

const Home: NextPage = () => {
  return (
    <div className=" w-full h-full flex-1 bg-[#0f0f0f] flex flex-col ">
      <Head>
        <title>Shot by Dara Studios</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head> 
      <Navbar tab='home' />
      <div className=' w-full h-screen relative  ' >
        <Image src="/images/HeroImage.png" layout="fill"  objectFit='cover' />
        <div className=' absolute left-6 bottom-10 text-white ' >
          <p className='Raleway-600 text-4xl ' >Shot by Dara Studios</p>
          <p className='NotoSan-300 ' >Photography</p>
        </div>
      </div>
      <div className=" py-6 lg:mt-0 mt-12 lg:py-20 w-full px-6 flex lg:flex-row flex-col-reverse items-center  " >
        <div className=' w-full  lg:mt-0 mt-6  ' > 
          <img src="/images/One.png" alt='one' className=' w-full lg:w-639px lg:h-702px ' /> 
        </div>
        <div className=' w-full relative flex lg:px-28 text-white h-full flex-1 flex-col justify-center items-center ' >
          <p className='NotoSan-600 lg:text-2xl lg:w-[529px] lg:text-right lg:absolute text-center mb-6 lg:mb-0 lg:mr-28 -top-40  z-20'>About</p>
          <p className='lg:w-[529px] NotoSan-300 lg:text-2xl' >My name is Idara Adiakpan, I’m from Akwa Ibom State, Nigeria.
I’m a graduate of theatre arts from the University Uyo I also studied the art of digital photography at the Losgiddy School of Photography Lagos.</p>
        </div >
      </div>
      <div className=" py-6 lg:py-20 w-full px-6 flex lg:flex-row flex-col items-center  " >
        <div className=' w-full flex lg:px-28 text-white h-full justify-center items-center ' >
          <p className='lg:w-[529px] NotoSan-300 lg:text-2xl' >Photography is more than just a passion, It is a medium for me to express myself, to tell stories, give people new perspectives and ways of seeing the world and I also love the creative process. 
I shoot for a great variety of projects, doing Portrait, Fashion, Beauty and Documentary.


</p>
        </div >
        <div className=' w-full  lg:mt-0 mt-6  ' > 
          <img  src="/images/Two.png" alt='one' className=' w-full lg:w-639px lg:h-702px ' /> 
        </div> 
      </div>
      <div className=' w-full flex flex-col  lg:mt-0 mt-12 text-white' >
        <p className=' Raleway text-2xl text-center lg:text-end lg:ml-auto px-6 lg:px-20 ' >Porfolio</p>
        <button onClick={()=> {Router.push("/portfolio"), sessionStorage.setItem("tab", "0")}} className=' mt-12 pt-5 px-6 lg:mt-6 lg:px-20 w-full flex border-t border-white justify-between items-center ' >
          <p className=' NotoSan-300 lg:text-2xl ' >Beauty</p>
          <img alt="2342" src="/images/arrow-up-right.png" className=' w-8 h-8 lg:w-14 lg:h-14' />
        </button>
        <button onClick={()=> {Router.push("/portfolio"), sessionStorage.setItem("tab", "1")}} className=' mt-6 pt-5 px-6 lg:px-20 w-full flex border-t border-white justify-between items-center ' >
          <p className=' NotoSan-300 lg:text-2xl ' >LifeStyle</p>
          <img alt="2342" src="/images/arrow-up-right.png" className=' w-8 h-8 lg:w-14 lg:h-14' />
        </button>
        <button onClick={()=> {Router.push("/portfolio"), sessionStorage.setItem("tab", "2")}} className=' mt-6 pt-5 px-6 lg:px-20 w-full flex border-t border-white justify-between items-center ' >
          <p className=' NotoSan-300 lg:text-2xl ' >Family</p>
          <img alt="2342" src="/images/arrow-up-right.png" className=' w-8 h-8 lg:w-14 lg:h-14' />
        </button>
        <button onClick={()=> {Router.push("/portfolio"), sessionStorage.setItem("tab", "3")}} className=' mt-6 pt-5 px-6 lg:px-20 w-full flex border-t border-white justify-between items-center ' >
          <p className=' NotoSan-300 lg:text-2xl ' >Portrait</p>
          <img alt="2342" src="/images/arrow-up-right.png" className=' w-8 h-8 lg:w-14 lg:h-14' />
        </button>
        <button onClick={()=> {Router.push("/portfolio"), sessionStorage.setItem("tab", "4")}} className=' mt-6 py-5 px-6 lg:px-20 w-full flex border-t border-b border-white justify-between items-center ' >
          <p className=' NotoSan-300 lg:text-2xl ' >Documentary</p>
          <img alt="2342" src="/images/arrow-up-right.png" className=' w-8 h-8 lg:w-14 lg:h-14' />
          {/* <Image src="/images/arrow-up-right.png" width={60} height={60} /> */}
        </button>
      </div>
      <div className=' w-full flex items-center lg:flex-row flex-col py-16 ' >
        <div className=' w-full flex justify-center ' >
          <img alt="2342" src="/images/Three.png" className=' w-full h-full lg:w-[518px] lg:h-[584px]' /> 
        </div>
        <div className=' w-full flex justify-center pt-10 lg:pt-80 ' >
          <img alt="2342" src="/images/Four.png" className=' w-full h-full lg:w-[518px] lg:h-[584px]' /> 
          {/* <Image src="/images/Four.png" width={518} height={584} /> */}
        </div>
      </div>
      <div className=' w-full flex text-white bg-[#FF5005] justify-center items-center py-6  ' >
        <button onClick={()=> Router.push("#")} className=' NotoSan-600 mx-3 text-sm lg:mx-6 cursor-pointer ' >Twitter</button>
        <button onClick={()=> Router.push("#")} className=' NotoSan-600 mx-3 text-sm lg:mx-6 cursor-pointer ' >Linkedin</button>
        <button onClick={()=> Router.push("http://instagram.com/sbdstudios_")} className=' NotoSan-600 mx-3 text-sm lg:mx-6 cursor-pointer ' >Instagram</button>
        <button onClick={()=> Router.push("#")} className=' NotoSan-600 mx-3 text-sm lg:mx-6 cursor-pointer ' >Facebook</button>
      </div>
      <div className=' w-auto py-6 dashboardslide overflow-x-auto flex  items-center' >
        <div>
          <div className=' w-40 lg:w-80 ml-3 ' >
            <img src="/images/G1.png" className='w-full' alt='new' /> 
          </div>
        </div> 
        <div>
          <div className=' w-40 lg:w-80 mx-3 ' >
            <img src="/images/G2.png" className='w-full' alt='new' /> 
          </div>
        </div> 
        <div>
          <div className=' w-40 lg:w-80 mx-3 ' > 
            <img src="/images/G3.png" className='w-full' alt='new' /> 
          </div>
        </div> 
        <div>
          <div className=' w-40 lg:w-80 mx-3 ' > 
            <img src="/images/G1.png" className='w-full' alt='new' /> 
          </div>
        </div> 
        <div>
          <div className=' w-40 lg:w-80 mx-3 ' > 
            <img src="/images/G1.png" className='w-full' alt='new' /> 
          </div>
        </div> 
        <div>
          <div className=' w-40 lg:w-80 mx-3 ' > 
            <img src="/images/G1.png" className='w-full' alt='new' /> 
          </div>
        </div>  
      </div> 
      <OtherImage />
      <Footer />
    </div>
  )
}

export default Home
