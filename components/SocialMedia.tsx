import React from 'react'
import Link from 'next/link'

export default function SocialMedia() {
    return (
        <div className=' w-full bg-black py-3 font-Poppins-Regular text-white text-sm flex items-center justify-center ' >
            <Link href="http://instagram.com/sbdstudios_" >
                <div className=" flex mr-6 items-center">
                    <img src='/images/Instagram.png' alt='Instagram' />  
                    <p className=" ml-3" >Instagram</p>   
                </div>
            </Link>
            <Link href="https://web.facebook.com/SBDStudios"   >
                <div className=" flex ml-6 items-center">
                    <img className=" w-3 " src='/images/Vector.png' alt='Instagram' />  
                    <p className=" ml-3" >FaceBook</p>  
                </div>  
            </Link>
        </div>
    )
}
