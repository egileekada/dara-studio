import React from 'react'

export default function SliderComponent(props: any) {
    
    const [next, setNext] = React.useState(0)

    React.useEffect(() => {  
        const t1 = setTimeout(() => {  
            clearTimeout(t1);
            if(next > 1){ 
                setNext(0)
                props.next(0)
            } else { 
                setNext(next+1)
                props.next(next+1)
            }
        }, 6000); 
    },) 

    return (
        <div className=' w-full h-screen relative  '  >
            <div className=' absolute z-10 inset-0 lg:bottom-36  ' style={{background: "linear-gradient(180deg, rgba(0, 0, 0, 0.1) 40.1%, #000000 100%)"}}/>
            {next === 0 && ( 
                <img src='/slide.png' className=' w-full h-full lg:pb-36  object-cover ' /> 
            )}
            {next === 1 && ( 
                <img src='/slide1.png' className=' w-full h-full lg:pb-36  object-cover ' /> 
            )}
            {next === 2 && ( 
                <img src='/slide2.png' className=' w-full h-full lg:pb-36  object-cover ' /> 
            )}
            <div className=' absolute lg:px-0 px-6 lg:pl-20 bottom-48 z-30 text-white ' >
                <div className=' flex items-center ' > 
                    <div className=' h-[1.2px] bg-[#C48F56] w-6 ' />
                    <p className=' font-Poppins-Regular text-sm ml-4 ' >Portraits</p>
                </div>
                {next === 0 && ( 
                    <p className=' font-Poppins-Bold lg:font-Poppins-ExtraBold text-2xl lg:text-4xl my-2 lg:w-[428px] ' >The difference is so much more.</p>
                )}
                {next === 1 && ( 
                    <p className=' font-Poppins-Bold lg:font-Poppins-ExtraBold text-2xl lg:text-4xl my-2 lg:w-[428px] ' >The Power of a woman</p>
                )}
                {next === 2 && ( 
                    <p className=' font-Poppins-Bold lg:font-Poppins-ExtraBold text-2xl lg:text-4xl my-2 lg:w-[432px] ' >Through the eyes of the innocent</p>
                )}
                <p className=' font-Poppins-Regular text-sm hidden lg:flex items-center ' >READ MORE <span className='text-xl ml-1' >{">"}</span></p>
            </div>
            <div className=' w-full absolute z-30 bottom-40 lg:hidden flex justify-center items-center ' >
                <p className={next === 0 ? ' text-[#C48F56] mx-2 ' : ' text-white mx-2 ' } >01</p>
                {next === 0 && (
                    <div className=' h-[1px] bg-white w-6 mx-2 ' />
                )}
                <p className={next === 1 ? ' text-[#C48F56] mx-2 ' : ' text-white mx-2 ' }>02</p>
                {next === 1 && (
                    <div className=' h-[1px] bg-white w-6 mx-2 ' />
                )}
                <p className={next === 2 ? ' text-[#C48F56] mx-2 ' : ' text-white mx-2 ' }>03</p>
            </div>
        </div>
    )
} 