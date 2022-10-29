import Router from 'next/router';
import React from 'react'

export default function SliderComponent(props: any) {
    
    const [next, setNext] = React.useState(0) 

    React.useEffect(() => {  
        const t1 = setTimeout(() => {  
            clearTimeout(t1);
            if(next > 1){ 
                setNext(0)
                props.next(0)
                // ref.current.scrollLeft +=  -width*3
            } else { 
                setNext(next+1)
                props.next(next+1)
                // ref.current.scrollLeft +=  windowDimensions.width
            }
        }, 6000); 
    },) 
 

    // React.useEffect(() => {   
    //     setNext(props.tab)
    // },[props.tab]) 

    const Next =()=> { 
        if(next > 1){ 
            setNext(0)
            props.next(0)
        } else {
            setNext(next+1)
            props.next(next+1)
        }
    }

    const Back =()=> { 
        if(next === 0){ 
            // setNext(0)
        } else {
            setNext(next-1)
            props.next(next-1)
        }
    }

    return (
        <div className="w-full overflow-x-auto flex scrollBody "  >
            <div className=' absolute z-10 inset-0  ' style={{background: "linear-gradient(180deg, rgba(0, 0, 0, 0.1) 40.1%, #000000 100%)"}}/>  

            {next === 0 && ( 
                <img src='/slide.png' className=' w-full h-full object-cover ' /> 
            )}
            {next === 1 && ( 
                <img src='/slide1.png' className=' w-full h-full object-cover ' /> 
            )}
            {next === 2 && ( 
                <img src='/slide2.png' className=' w-full h-full object-cover ' /> 
            )}
                
            <div className=' absolute lg:px-0 px-6 lg:pl-20 lg:bottom-16 bottom-36 z-30 text-white ' >
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
                <p onClick={()=> Router.push("/about")} className=' font-Poppins-Regular text-sm hidden cursor-pointer lg:flex items-center ' >READ MORE <span className='text-xl ml-1' >{">"}</span></p>
            </div>

            <div className=' flex items-center ml-6 absolute lg:px-0 px-6 lg:pl-20 lg:bottom-20 bottom-36 lg:right-28 right-6 z-20 ' >
                <img onClick={Back}  src='/images/left.png' className=' w-2 cursor-pointer ' />
                <img onClick={Next} src='/images/right.png' className=' w-2 ml-5 cursor-pointer ' />
            </div>
            <div className=' w-full absolute z-30 bottom-28 lg:hidden flex justify-end items-center px-6 ' >
                <p  onClick={()=> setNext(0) } className={next === 0 ? ' text-[#C48F56] mx-2 cursor-pointer ' : ' text-white cursor-pointer mx-2 ' } >01</p>
                {next === 0 && (
                    <div className=' h-[1px] bg-white w-6 mx-2 ' />
                )}
                <p onClick={()=> setNext(1) } className={next === 1 ? ' text-[#C48F56] mx-2 cursor-pointer ' : ' text-white cursor-pointer mx-2 ' }>02</p>
                {next === 1 && (
                    <div className=' h-[1px] bg-white w-6 mx-2 ' />
                )}
                <p onClick={()=> setNext(2) } className={next === 2 ? ' text-[#C48F56] mx-2 cursor-pointer ' : ' text-white cursor-pointer mx-2 ' }>03</p>
                {next === 2 && (
                    <div className=' h-[1px] bg-white w-6 mx-2 ' />
                )}
                <div className=' flex items-center ml-6 ' >
                    <img onClick={Back}  src='/images/left.png' className=' w-2 cursor-pointer ' />
                    <img onClick={Next} src='/images/right.png' className=' w-2 ml-5 cursor-pointer ' />
                </div>
            </div>
        </div>
    )
} 

// function getWindowDimensions() {
//     const { innerWidth: width, innerHeight: height } = window;
//     return {
//       width,
//       height
//     };
//   }
  
//   export default function useWindowDimensions() {
//     const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  
//     useEffect(() => {
//       function handleResize() {
//         setWindowDimensions(getWindowDimensions());
//       }
  
//       window.addEventListener('resize', handleResize);
//       return () => window.removeEventListener('resize', handleResize);
//     }, []);
  
//     return windowDimensions;
//   }