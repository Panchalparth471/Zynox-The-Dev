import { motion } from "framer-motion";
import Hamburger from 'hamburger-react'

import { useState } from "react";

function Navbar() {
    const [isOpen, setOpen] = useState(false)
    return (
        <div className="flex place-items-start h-[5%] w-full z-10">
        <div className="flex text-white max-md:pr-0 bg-black bg-transparent  text-[24px] fixed w-full h-[10%] justify-end gap-10 pr-[40px] font-normal font-sans mb-5"id="text">
             <motion.div initial={{ translateX: '-100px',opacity:'0',translateY:'30px'}} animate={{translateX:'0',translateY:'0',opacity:"1",transition:{delay:0.1,duration:'0.1'}}} variants={{
                 
                }} className="hover:text-[#10B67A] max-md:hidden  cursor-pointer  hover:scale-110 duration-300 transition ease-in-out">
                <a className="max-md:hidden" href="#Home">HOME</a></motion.div>
            <motion.div initial={{ translateX: '-90px',opacity:'0',translateY:'30px'}} animate={{translateX:'0',translateY:'0',opacity:"1",transition:{delay:0.2,duration:'0.1'}}} variants={{
                 
                }} className="hover:text-[#10B67A] max-md:hidden cursor-pointer  hover:scale-110 duration-300 transition ease-in-out">
                <a className="max-md:hidden" href="#About">ABOUT ME</a></motion.div>
            <motion.div initial={{ translateX: '-80px',opacity:'0',translateY:'30px'}} animate={{translateX:'0',translateY:'0',opacity:"1",transition:{delay:0.3,duration:'0.1'}}} variants={{
                 
                }} className="hover:text-[#10B67A] max-md:hidden cursor-pointer  hover:scale-110 duration-300 transition ease-in-out">
                <a className="max-md:hidden" href="#Projects">PROJECTS</a></motion.div>
            <motion.div initial={{ translateX: '-70px',opacity:'0',translateY:'30px'}} animate={{translateX:'0',translateY:'0',opacity:"1",transition:{delay:0.4,duration:'0.1'}}} variants={{
                 
                }} className="hover:text-[#10B67A] max-md:hidden cursor-pointer  hover:scale-110 duration-300 transition ease-in-out">
                 <a className="max-md:hidden" href="#Techstack">TECHSTACK</a></motion.div>
            <motion.div initial={{ translateX: '-60px',opacity:'0',translateY:'30px'}} animate={{translateX:'0',translateY:'0',opacity:"1",transition:{delay:0.5,duration:'0.1'}}} variants={{
                 
                }} className="hover:text-[#10B67A] max-md:hidden cursor-pointer  hover:scale-110 duration-300 transition ease-in-out">
                    <a className="max-md:hidden" href="#Contact">CONTACT</a></motion.div>
                
                <div id="box"  className={`top-0 z-[150] flex flex-col h-[100vh] w-[70%] md:hidden   ${isOpen ? ( `bg-white`) : (`bg-transparent`) } items-end gap-10 text-black`}>
                    <Hamburger toggled={isOpen} toggle={setOpen} color="rgb(16 185 129)"/>
                
                    {
                        isOpen ? (
                            <>
                        <a href="#Home" className="place-self-center" >Home</a>
                        <a href="#About" className="place-self-center">About Me</a>
                        <a href="#Projects" className="place-self-center">Projects</a>
                        <a href="#Techstack" className="place-self-center">Techstack</a>
                        <a href="#Contact" className="place-self-center">Contact</a>
                            
                            </>
                 ):(<div className="w-0 h-0 hidden"></div>)
                            
                    }
                    
                </div>

             

            </div>
        </div>



    )
}

export default Navbar;
