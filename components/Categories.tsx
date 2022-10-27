import React from 'react'

export default function Categories() {
    return (
        <div className="w-full overflow-x-auto flex overflow-y-hidden"  >
            <div className=' flex lg:w-full ' > 
                <div className="lg:w-full w-[400px] h-full  relative"  > 
                    <img src="/images/1.png" className=" lg:w-full w-[400px] h-full object-cover "  />
                    <div className=" absolute flex items-center z-20 bottom-24 lg:bottom-0 lg:pb-6 left-4 "  >
                        <p className="font-Poppins-ExtraBold text-4xl text-[#00000066]"  >01</p>
                        <p className="font-Poppins-Bold text-2xl text-[#000] ml-2 " >Portraits</p>
                    </div>
                </div> 
                <div className="lg:w-full w-[400px] relative"  > 
                    <img src="/images/2.png" className="lg:w-full w-[400px]  h-full  object-cover" />
                    <div className=" absolute flex items-center  bottom-24 lg:bottom-0 lg:pb-6 left-4 "  >
                        <p className="font-Poppins-ExtraBold text-4xl text-[#FFFFFF66]"  >01</p>
                        <p className="font-Poppins-Bold text-2xl text-[#FFFFFF] ml-2 " >Lifestyle</p>
                    </div>
                </div>
                <div className="lg:w-full w-[400px]  relative"  > 
                    <img src="/images/3.png" className="lg:w-full w-[400px]  h-full object-cover" />
                    <div className=" absolute flex items-center  bottom-24 lg:bottom-0 lg:pb-6 left-4 "  >
                        <p className="font-Poppins-ExtraBold text-4xl text-[#FFFFFF66]"  >01</p>
                        <p className="font-Poppins-Bold text-2xl text-[#FFFFFF] ml-2 " >Studio</p>
                    </div>
                </div>
                <div className="lg:w-full w-[400px]  relative"  > 
                    <img src="/images/4.png" className="lg:w-full w-[400px] h-full  object-cover" />
                    <div className=" absolute flex items-center  bottom-24 lg:bottom-0 lg:pb-6 left-4 "  >
                        <p className="font-Poppins-ExtraBold text-4xl text-[#FFFFFF66]"  >01</p>
                        <p className="font-Poppins-Bold text-2xl text-[#FFFFFF] ml-2 " >Fashion</p>
                    </div>
                </div>
            </div> 
        </div>
    )
} 