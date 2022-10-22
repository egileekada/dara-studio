import Head from 'next/head'
import React from 'react'
import Footer from '../components/footer'
import Navbar from '../components/Navbar'

export default function Gallery() {
    return (
        <div className=" w-full h-full flex-1 bg-[#0f0f0f] flex flex-col ">
            <Head>
                <title>Gallery on Dara Studios</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head> 
            <Navbar tab='portfolio' />
            <p className=' font-Poppins-ExtraBold text-5xl mt-6 leading-snug text-white text-center ' >Gallery</p>

            <div className=' w-full lg:flex justify-center items-center mt-6 pb-10 hidden px-4 ' > 
                <div className='container w-screen pb-10 ' >
                    {/* <LatestWork /> */}
                    <figure>
                        <img src="/images/Card/Variant2.png" id='img' alt="one" />
                        {/* <figcaption><a href="#">1</a></figcaption> */}
                    </figure>
                    <figure>
                        <img src="/images/Card/Variant2-1.png" id='img' alt="two" />
                        {/* <figcaption><a href="#">2</a></figcaption> */}
                    </figure>
                    <figure>
                        <img src="/images/Card/Variant2-2.png" id='img' alt="three" />
                        {/* <figcaption><a href="#">3</a></figcaption> */}
                    </figure>
                    <figure>
                        <img src="/images/Card/Variant2-3.png" id='img' alt="four" />
                        {/* <figcaption><a href="#">4</a></figcaption> */}
                    </figure>
                    <figure>
                        <img src="/images/Card/Variant2-4.png" id='img' alt="five" />
                        {/* <figcaption><a href="#">5</a></figcaption> */}
                    </figure>
                    <figure>
                        <img src="/images/Card/Variant2-5.png" id='img' alt="six" />
                        {/* <figcaption><a href="#">6</a></figcaption> */}
                    </figure>
                    <figure>
                        <img src="/images/Card/Variant2-6.png" id='img' alt="seven" />
                        {/* <figcaption><a href="#">7</a></figcaption> */}
                    </figure>
                    <figure>
                        <img src="/images/Card/Variant2-7.png" id='img'alt="eight"/>
                        {/* <figcaption><a href="#">8</a></figcaption> */}
                    </figure> 
                    <figure>
                        <img src="/images/Card/Variant2-8.png" id='img' alt="ten" />
                        {/* <figcaption><a href="#">10</a></figcaption> */}
                    </figure> 
                    <figure>
                        <img src="/images/Card/Variant2-9.png" id='img'  alt="twelve" />
                        {/* <figcaption><a href="#">11</a></figcaption> */}
                    </figure>
                    <figure>
                        <img src="/images/Card/Variant2-10.png" id='img' alt="thirteen" />
                        {/* <figcaption><a href="#">11</a></figcaption> */}
                    </figure>
                    <figure>
                        <img src="/images/Card/Variant2-11.png" id='img' alt="fourteen" />
                        {/* <figcaption><a href="#">11</a></figcaption> */}
                    </figure>
                    <figure>
                        <img src="/images/Card/Variant2-12.png" id='img' alt="fithteen" />
                        {/* <figcaption><a href="#">11</a></figcaption> */}
                    </figure>
                    <figure>
                        <img src="/images/Card/Variant2-13.png" id='img'  alt="G16" />
                        {/* <figcaption><a href="#">11</a></figcaption> */}
                    </figure>
                    <figure>
                        <img src="/images/Card/Variant2-14.png" id='img'  alt="G17" />
                        {/* <figcaption><a href="#">11</a></figcaption> */}
                    </figure>
                    <figure>
                        <img src="/images/Card/Variant2-15.png" id='img'  alt="G18" />
                        {/* <figcaption><a href="#">11</a></figcaption> */}
                    </figure>
                    <figure>
                        <img src="/images/Card/Variant2-16.png" id='img'  alt="G19" />
                        {/* <figcaption><a href="#">11</a></figcaption> */}
                    </figure>
                    <figure>
                        <img src="/images/Card/Variant2-17.png" id='img'  alt="G20" />
                        {/* <figcaption><a href="#">11</a></figcaption> */}
                    </figure>
                    <figure>
                        <img src="/images/Card/Variant2-18.png" id='img'  alt="G21" />
                        {/* <figcaption><a href="#">11</a></figcaption> */}
                    </figure>
                    <figure>
                        <img src="/images/Card/Variant2-19.png" id='img'  alt="G22" />
                        {/* <figcaption><a href="#">11</a></figcaption> */}
                    </figure>
                    <figure>
                        <img src="/images/Card/Variant2-20.png" id='img'  alt="G23" />
                        {/* <figcaption><a href="#">11</a></figcaption> */}
                    </figure>
                    <figure>
                        <img src="/images/Card/Variant2-21.png" id='img'  alt="G24" />
                        {/* <figcaption><a href="#">11</a></figcaption> */}
                    </figure>
                    <figure>
                        <img src="/images/Card/Variant2-22.png" id='img'  alt="G25" />
                        {/* <figcaption><a href="#">11</a></figcaption> */}
                    </figure>
                </div>
            </div>
            <div className=' w-full lg:hidden px-4 pb-10 ' >
                <div className='containermobile w-full pb-10 ' >
                    {/* <LatestWork /> */}
                    <figure>
                        <img src="/images/Card/Variant2.png" id='img' alt="one" />
                        {/* <figcaption><a href="#">1</a></figcaption> */}
                    </figure>
                    <figure>
                        <img src="/images/Card/Variant2-1.png" id='img' alt="two" />
                        {/* <figcaption><a href="#">2</a></figcaption> */}
                    </figure>
                    <figure>
                        <img src="/images/Card/Variant2-2.png" id='img' alt="three" />
                        {/* <figcaption><a href="#">3</a></figcaption> */}
                    </figure>
                    <figure>
                        <img src="/images/Card/Variant2-3.png" id='img' alt="four" />
                        {/* <figcaption><a href="#">4</a></figcaption> */}
                    </figure>
                    <figure>
                        <img src="/images/Card/Variant2-4.png" id='img' alt="five" />
                        {/* <figcaption><a href="#">5</a></figcaption> */}
                    </figure>
                    <figure>
                        <img src="/images/Card/Variant2-5.png" id='img' alt="six" />
                        {/* <figcaption><a href="#">6</a></figcaption> */}
                    </figure>
                    <figure>
                        <img src="/images/Card/Variant2-6.png" id='img' alt="seven" />
                        {/* <figcaption><a href="#">7</a></figcaption> */}
                    </figure>
                    <figure>
                        <img src="/images/Card/Variant2-7.png" id='img'alt="eight"/>
                        {/* <figcaption><a href="#">8</a></figcaption> */}
                    </figure> 
                    <figure>
                        <img src="/images/Card/Variant2-8.png" id='img' alt="ten" />
                        {/* <figcaption><a href="#">10</a></figcaption> */}
                    </figure> 
                    <figure>
                        <img src="/images/Card/Variant2-9.png" id='img'  alt="twelve" />
                        {/* <figcaption><a href="#">11</a></figcaption> */}
                    </figure>
                    <figure>
                        <img src="/images/Card/Variant2-10.png" id='img' alt="thirteen" />
                        {/* <figcaption><a href="#">11</a></figcaption> */}
                    </figure>
                    <figure>
                        <img src="/images/Card/Variant2-11.png" id='img' alt="fourteen" />
                        {/* <figcaption><a href="#">11</a></figcaption> */}
                    </figure>
                    <figure>
                        <img src="/images/Card/Variant2-12.png" id='img' alt="fithteen" />
                        {/* <figcaption><a href="#">11</a></figcaption> */}
                    </figure>
                    <figure>
                        <img src="/images/Card/Variant2-13.png" id='img'  alt="G16" />
                        {/* <figcaption><a href="#">11</a></figcaption> */}
                    </figure>
                    <figure>
                        <img src="/images/Card/Variant2-14.png" id='img'  alt="G17" />
                        {/* <figcaption><a href="#">11</a></figcaption> */}
                    </figure>
                    <figure>
                        <img src="/images/Card/Variant2-15.png" id='img'  alt="G18" />
                        {/* <figcaption><a href="#">11</a></figcaption> */}
                    </figure>
                    <figure>
                        <img src="/images/Card/Variant2-16.png" id='img'  alt="G19" />
                        {/* <figcaption><a href="#">11</a></figcaption> */}
                    </figure>
                    <figure>
                        <img src="/images/Card/Variant2-17.png" id='img'  alt="G20" />
                        {/* <figcaption><a href="#">11</a></figcaption> */}
                    </figure>
                    <figure>
                        <img src="/images/Card/Variant2-18.png" id='img'  alt="G21" />
                        {/* <figcaption><a href="#">11</a></figcaption> */}
                    </figure>
                    <figure>
                        <img src="/images/Card/Variant2-19.png" id='img'  alt="G22" />
                        {/* <figcaption><a href="#">11</a></figcaption> */}
                    </figure>
                    <figure>
                        <img src="/images/Card/Variant2-20.png" id='img'  alt="G23" />
                        {/* <figcaption><a href="#">11</a></figcaption> */}
                    </figure>
                    <figure>
                        <img src="/images/Card/Variant2-21.png" id='img'  alt="G24" />
                        {/* <figcaption><a href="#">11</a></figcaption> */}
                    </figure>
                    <figure>
                        <img src="/images/Card/Variant2-22.png" id='img'  alt="G25" />
                        {/* <figcaption><a href="#">11</a></figcaption> */}
                    </figure>
                </div>
            </div>
            <Footer />
        </div>
    )
}
