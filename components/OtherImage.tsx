import React from "react";
import Image from 'next/image'

export default function OtherImage(){
    return( 

        <div className=' w-auto overflow-x-auto py-0 lg:py-0 dashboardslide flex  items-center' >
            <img className=' lg:w-[450px] lg:h-[306px] w-64 object-contain mr-3' src="/images/G6.png" alt='eight' />
            <img className=' lg:w-[450px] lg:h-[306px] w-64 object-contain mx-3' src="/images/G7.png" alt='nine' /> 
            <img className=' lg:w-[450px] lg:h-[306px] w-64 object-contain mx-3' src="/images/G6.png" alt='eleven' />
            <img className=' lg:w-[450px] lg:h-[306px] w-64 object-contain mx-3' src="/images/G6.png" alt='four' />
        </div>
    //   <div className=' w-auto py-6 dashboardslide overflow-x-auto flex  items-center' > 
    //     <div> 
    //         <div className=' w-450px h-306px pr-2 ' > 
    //             <Image src="/images/G6.png" width={450} height={306} />
    //         </div>
    //     </div>
    //     <div> 
    //         <div className=' w-450px h-306px mx-2 ' > 
    //             <Image src="/images/G6.png" width={450} height={306} />
    //         </div>
    //     </div>
    //     <div> 
    //         <div className=' w-450px h-306px mx-2 ' > 
    //             <Image src="/images/G6.png" width={450} height={306} />
    //         </div>
    //     </div>
    //     <div> 
    //         <div className=' w-450px h-306px mx-2 ' > 
    //             <Image src="/images/G6.png" width={450} height={306} />
    //         </div>
    //     </div>
    //   </div>
    )
}