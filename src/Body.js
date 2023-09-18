import { Typewriter } from 'react-simple-typewriter'
import { motion } from 'framer-motion';


function Body() {
    return (
        <div className='flex w-[100vw] h-[100vh] justify-center items-center' id="Home">
        <div className="flex flex-col justify-center gap-10 items-baseline h-full w-full max-md:items-center">
            <div className="text-[96px] font-light text-white max-md:text-[40px]  md:ml-[5%] " id='text'>
                <motion.div initial={{ translateX: '300px',opacity:'0',translateY:'100px'}} animate={{translateX:'0',translateY:'0',opacity:"1",transition:{delay:0.1,duration:'0.3'}}} variants={{
                 
                }}>

                   Hello ! this is
                </motion.div>
                 
            </div>

            <div id='text' className="font-normal text-center md:text-left text-6xl leading-16 md:leading-none 2xl:leading-none md:text-[120px] mt-6 text-emerald-500 tracking-wide tracking-in-expand 2xl:text-[160px] sm:text-[100px]">
                 <motion.div initial={{ translateX: '200px',opacity:'0'}} animate={{translateX:'0',opacity:"1",transition:{delay:0.4,duration:0.3}}} variants={{
                 
                }}>
                       Zynox The Dev
                </motion.div>
               
            </div>

            <div className="text-[40px] font-normal leading-normal font-sans text-white max-sm:text-[20px]" id="text2">
                 <motion.div id="text2" initial="hidden" animate="visible" variants={{
                    hidden: {
                        scaleY: -1,
                        opacity: 0,
                   
                    },
                       visible: {
                        scaleY: 1,
                           opacity: 1,
                        transition: {
                        delay:0.6
                        }
                    },
                }}>
            <Typewriter
            words={['FullStack Developer', 'UI/UX Designer', 'C/C++ Programmer', 'BackEnd Developer']}
            loop={false}
            cursor
             skipAddStyles
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
                    />
                    </motion.div>
            </div>

            

            <div className="flex mx-auto"> 
                 <motion.div initial="hidden" animate="visible" variants={{
                    hidden: {
                        scaleY: -1,
                        opacity: 0,
                   
                    },
                       visible: {
                        scaleY: 1,
                           opacity: 1,
                        transition: {
                        delay:1.2
                        }
                    },
                }}>
                    <button id='text' className="font-semibold w-[260px] h-[45px] rounded-[30px] text-black bg-[#10B67A] text-[32px] text-center hover:text-white shadow-lg shadow-emerald-400 hover:scale-110 duration-300 transition ease-in-out" >
                          <a href="#Contact">Contact Me</a></button>
               </motion.div>
            </div>

            
            </div>
            </div>
    )
}

export default Body;
