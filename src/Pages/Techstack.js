import reactPng from "../Tech Stack/React.png";
import Bootstrap from "../Tech Stack/Bootstrap.svg";
import Next from "../Tech Stack/Next.svg";
import Node from "../Tech Stack/NodeJs.svg";
import Js from "../Tech Stack/Javascript.svg";
import css from "../Tech Stack/CSS.png";
import Express from "../Tech Stack/Express.png";
import Mongo from "../Tech Stack/MongoDB.svg";
import Git from "../Tech Stack/Git.svg";
import Github from "../Tech Stack/Github.svg";
import python from "../Tech Stack/icons8-python.svg";
import c from "../Tech Stack/icons8-c-programming.svg";
import cpp from "../Tech Stack/icons8-c++.svg";
import Redux from "../Tech Stack/Redux.svg";
import Tailwind from "../Tech Stack/Tailwind.png";
import Typescript from "../Tech Stack/Typescript.svg";
import Vercel from "../Tech Stack/Vercel.svg";
import Postman from "../Tech Stack/postman-icon-svgrepo-com.svg";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

function Techstack() {
  const control = useAnimation();
    const [ref, inView] = useInView();
    

   useEffect(() => {
    if (inView) {
      control.start("visible");
    } 
    }, [control, inView]);


    //Head animation
    const headVariant = {
        hidden: {
            scale: -1,
            opacity: 0,
                   
        },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                delay: 0.18
            }
        },
    };


    const iv = {
        hidden: { translateY: '100px', opacity: '0' },
        visible:{translateY:'0',opacity:"1",transition:{delay:0.2,duration:'0.1'}}
    }

    const iv2 = {
        hidden: { translateY: '100px', opacity: '0' },
         visible:{translateY:'0',opacity:"1",transition:{delay:0.3,duration:'0.1'}}
    }

    const iv3 = {
        hidden: { translateY: '100px', opacity: '0' },
         visible:{translateY:'0',opacity:"1",transition:{delay:0.4,duration:'0.1'}}
    }

      const iv4 = {
          hidden: { translateY: '100px', opacity: '0' },
           visible:{translateY:'0',opacity:"1",transition:{delay:0.5,duration:'0.1'}}
    }


      const iv5 = {
          hidden: { translateY: '100px', opacity: '0' },
           visible:{translateY:'0',opacity:"1",transition:{delay:0.6,duration:'0.1'}}
    }

      const iv6 = {
          hidden: { translateY: '100px', opacity: '0' },
           visible:{translateY:'0',opacity:"1",transition:{delay:0.7,duration:'0.1'}}
    }

      const iv7 = {
          hidden: { translateY: '100px', opacity: '0' },
           visible:{translateY:'0',opacity:"1",transition:{delay:0.8,duration:'0.1'}}
    }

      const iv8 = {
          hidden: { translateY: '100px', opacity: '0' },
           visible:{translateY:'0',opacity:"1",transition:{delay:0.9,duration:'0.1'}}
    }

      const iv9 = {
          hidden: { translateY: '100px', opacity: '0' },
           visible:{translateY:'0',opacity:"1",transition:{delay:1,duration:'0.1'}}
    }

      const iv10 = {
          hidden: { translateY: '100px', opacity: '0' },
           visible:{translateY:'0',opacity:"1",transition:{delay:1.1,duration:'0.1'}}
    }

      const iv11= {
          hidden: { translateY: '100px', opacity: '0' },
           visible:{translateY:'0',opacity:"1",transition:{delay:1.2,duration:'0.1'}}
    }

      const iv12= {
          hidden: { translateY: '100px', opacity: '0' },
           visible:{translateY:'0',opacity:"1",transition:{delay:1.3,duration:'0.1'}}
    }

      const iv13= {
          hidden: { translateY: '100px', opacity: '0' },
           visible:{translateY:'0',opacity:"1",transition:{delay:1.4,duration:'0.1'}}
    }

      const iv14= {
          hidden: { translateY: '100px', opacity: '0' },
           visible:{translateY:'0',opacity:"1",transition:{delay:1.5,duration:'0.1'}}
    }

      const iv15= {
          hidden: { translateY: '100px', opacity: '0' },
           visible:{translateY:'0',opacity:"1",transition:{delay:1.6,duration:'0.1'}}
    }

      const iv16= {
          hidden: { translateY: '100px', opacity: '0' },
           visible:{translateY:'0',opacity:"1",transition:{delay:1.7,duration:'0.1'}}
    }


      const iv17= {
          hidden: { translateY: '100px', opacity: '0' },
           visible:{translateY:'0',opacity:"1",transition:{delay:1.8,duration:'0.1'}}
    }

      const iv18= {
          hidden: { translateY: '100px', opacity: '0' },
           visible:{translateY:'0',opacity:"1",transition:{delay:1.9,duration:'0.1'}}
    }


    return (
        <div className="flex justify-center items-center w-[100vw] h-[100vh] mt-20" id="Techstack">
        <div className="flex flex-col justify-center gap-6 items-center w-[76%] h-[80%] max-md:h-full max-md:mt-0 max-md:w-full place-self-center">
            <div>
                 <motion.div ref={ref} initial="hidden" animate={control} variants={headVariant}><h1 className="text-emerald-500 text-5xl font-extrabold max-md:text-3xl mt-8" id="text">Tech Stack</h1></motion.div>
                
            </div>
            <div className="flex gap-x-7 flex-wrap w-[90%] h-full place-items-center justify-center max-md:w-full max-sm:items-start pb-9">
                    <motion.div initial="hidden" animate={control} variants={iv}
                      className="flex-wrap max-md:w-15 max-md:h-15 w-20 h-20 max-[378px]:w-12 max-[378px]:h-12 rounded hover:scale-125 duration-300 ease-in-out flex flex-col justify-center items-center hover:border-emerald-500 hover:border-4"><img className="w-full h-full" src={c}></img> </motion.div>
        
                
                <motion.div initial="hidden" animate={control} variants={iv2} className="flex-wrap w-20 h-20 max-md:w-15 max-md:h-15 max-[378px]:w-12 max-[378px]:h-12  rounded-md flex  hover:scale-125 duration-300 ease-in-out justify-center items-center hover:border-emerald-500 hover:border-4"><img className="w-full h-full" src={cpp}></img></motion.div>
                <motion.div initial="hidden" animate={control} variants={iv3} className="flex-wrap w-20 h-20 max-md:w-15 max-md:h-15 max-[378px]:w-12 max-[378px]:h-12   rounded-md flex hover:scale-125 duration-300 ease-in-out justify-center items-center hover:border-emerald-500 hover:border-4"><img className="w-full h-full" src={python}></img></motion.div>
                <motion.div initial="hidden" animate={control} variants={iv4} className="flex-wrap w-20 h-20 max-md:w-15 max-md:h-15 max-[378px]:w-12 max-[378px]:h-12  rounded-md flex hover:scale-125 duration-300 ease-in-out justify-center items-center hover:border-emerald-500 hover:border-4"><img className="w-full h-full" src={reactPng}></img></motion.div>
                <motion.div initial="hidden" animate={control} variants={iv5} className="flex-wrap w-20 h-20 max-md:w-15 max-md:h-15 max-[378px]:w-12 max-[378px]:h-12  rounded-md flex hover:scale-125 duration-300 ease-in-out justify-center items-center hover:border-emerald-500 hover:border-4"><img className="w-full h-full" src={Redux}></img></motion.div>
                <motion.div initial="hidden" animate={control} variants={iv6} className="flex-wrap w-20 h-20 max-md:w-15 max-md:h-15 max-[378px]:w-12 max-[378px]:h-12  rounded-md flex hover:scale-125 duration-300 ease-in-out justify-center items-center hover:border-emerald-500 hover:border-4"><img className="w-full h-full" src={Express}></img></motion.div>
                <motion.div initial="hidden" animate={control} variants={iv7} className="flex-wrap w-20 h-20 max-md:w-15 max-md:h-15 max-[378px]:w-12 max-[378px]:h-12  rounded-md flex hover:scale-125 duration-300 ease-in-out justify-center items-center hover:border-emerald-500 hover:border-4"><img className="w-full h-full" src={Mongo}></img></motion.div>
                <motion.div initial="hidden" animate={control} variants={iv8} className="flex-wrap w-20 h-20 max-md:w-15 max-md:h-15 max-[378px]:w-12 max-[378px]:h-12   rounded-md flex hover:scale-125 duration-300 ease-in-out justify-center items-center hover:border-emerald-500 hover:border-4"><img className="w-full h-full" src={Node}></img></motion.div>
                <motion.div initial="hidden" animate={control} variants={iv9} className="flex-wrap w-20 h-20 max-md:w-15 max-md:h-15 max-[378px]:w-12 max-[378px]:h-12  rounded-md flex hover:scale-125 duration-300 ease-in-out justify-center items-center hover:border-emerald-500 hover:border-4"><img className="w-full h-full" src={Js}></img></motion.div>
                <motion.div initial="hidden" animate={control} variants={iv10} className="flex-wra w-20 h-20 max-md:w-15 max-md:h-15 max-[378px]:w-12 max-[378px]:h-12  rounded-md flex hover:scale-125 duration-300 ease-in-out justify-center items-center hover:border-emerald-500 hover:border-4"><img className="w-full h-full" src={Typescript}></img></motion.div>
                <motion.div initial="hidden" animate={control} variants={iv11} className="flex-wrap w-20 h-20 max-md:w-15 max-md:h-15 max-[378px]:w-12 max-[378px]:h-12  rounded-md flex hover:scale-125 duration-300 ease-in-out justify-center items-center hover:border-emerald-500 hover:border-4"><img className="w-full h-full" src={Next}></img></motion.div>
                <motion.div initial="hidden" animate={control} variants={iv12} className="flex-wrap w-20 h-20 max-md:w-15 max-md:h-15 max-[378px]:w-12 max-[378px]:h-12  rounded-md flex hover:scale-125 duration-300 ease-in-out justify-center items-center hover:border-emerald-500 hover:border-4"><img className="w-full h-full" src={Git} ></img></motion.div>
                <motion.div initial="hidden" animate={control} variants={iv13} className="flex-wrap w-20 h-20 max-md:w-15 max-md:h-15 max-[378px]:w-12 max-[378px]:h-12  rounded-md flex hover:scale-125 duration-300 ease-in-out justify-center items-center hover:border-emerald-500 hover:border-4"><img className="w-full h-full" src={Github}></img></motion.div>

                
                <motion.div initial="hidden" animate={control} variants={iv14}
             className="flex-wrap w-20 h-20 max-md:w-15 max-md:h-15 max-[378px]:w-12 max-[378px]:h-12  rounded-md flex hover:scale-125 duration-300 ease-in-out justify-center items-center hover:border-emerald-500 hover:border-4"><img className="w-full h-full" src={css}></img></motion.div>
                <motion.div initial="hidden" animate={control} variants={iv15} className="flex-wrap w-20 h-20 max-md:w-15 max-md:h-15 max-[378px]:w-12 max-[378px]:h-12  rounded-md flex hover:scale-125 duration-300 ease-in-out justify-center items-center hover:border-emerald-500 hover:border-4"><img className="w-full h-full" src={Tailwind}></img></motion.div>
                <motion.div initial="hidden" animate={control} variants={iv16} className="flex-wrap w-20 h-20 max-md:w-15 max-md:h-15 max-[378px]:w-12 max-[378px]:h-12 rounded-md flex hover:scale-125 duration-300 ease-in-out justify-center items-center hover:border-emerald-500 hover:border-4"><img className="w-full h-full" src={Bootstrap}></img></motion.div>
                <motion.div initial="hidden" animate={control} variants={iv17} className="flex-wrap w-20 h-20 max-md:w-15 max-md:h-15 max-[378px]:w-12 max-[378px]:h-12  rounded-md flex hover:scale-125 duration-300 ease-in-out justify-center items-center hover:border-emerald-500 hover:border-4"><img className="w-full h-full" src={Vercel}></img></motion.div>
                <motion.div initial="hidden" animate={control} variants={iv18} className="flex-wrap w-20 h-20 max-md:w-15 max-md:h-15 max-[378px]:w-12 max-[378px]:h-12  rounded-md flex hover:scale-125 duration-300 ease-in-out justify-center items-center hover:border-emerald-500 hover:border-4"><img className="w-full h-full" src={Postman}></img></motion.div>
           </div>
            </div>
            </div>
    )
}
export default Techstack;