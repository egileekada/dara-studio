import React from 'react'

export default function SocialMedia() {
    return (
        <div className=' w-full bg-black py-3 font-Poppins-Regular text-white text-sm flex items-center justify-center ' >
            <a href="http://instagram.com/sbdstudios_" className=" flex items-center mr-6"  >
                <img src='/images/Instagram.png' alt='Instagram' />  
                <p className=" ml-3" >Instagram</p>   
            </a>
            <a href="https://web.facebook.com/SBDStudios" className=" flex ml-6 items-center"  > 
                <img className=" w-3 " src='/images/Vector.png' alt='Instagram' />  
                <p className=" ml-3" >FaceBook</p>   
            </a>
        </div>
    )
}
