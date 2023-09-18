import image from "../Assets/icon.png";
import  Tilt from "react-parallax-tilt";

function Projects() {
    return (
        <div className="flex w-full min-h-[80vh] justify-center items-center" id="About">
            <div className="flex flex-col justify-evenly items-center gap-20 pt-32">
            <div>
                       <h1 className="text-white text-6xl" id="text">About Me</h1>
                </div>
            
                <div className="flex justify-evenly w-full items-center h-auto">
                    <div data-aos="fade-right"
                    data-aos-easing="ease-in-sine" className="self-start pb-10">

           
            <Tilt>
                   <svg viewBox="0 0 200 187" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="white" className="home_blob max-md:w-[250px] max-sm:w-[100px]" data-tilt=""
            >
    <mask id="mask0" mask-type="alpha">
        <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
        130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
        97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
        0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"/>
    </mask>
    <g mask="url(#mask0)">
        <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
        165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
        129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
        -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"/>
        <image width="170px" x="12" y="8" xlinkHref={image}>
            
        </image>
    </g>
</svg>
                </Tilt>
                </div>
                
                   <div data-aos="fade-left"
                    data-aos-easing="ease-in-sine"className="w-[50%] h-[500px] self-end text-white text-3xl ml-10 flex justify-center items-center max-md:text-xl max-sm:text-sm max-sm:place-items-start max-sm:h-[200px]">
                        <p id="text" className="mb-32 max-md:mb-40">Hey there,👋 I'm Parth a 18-year-old CSE undergrad who is passionate about Software Development, UI/UX Design, AI & ML and Product Management. Currently, I'm pursuing my career as a Full Stack Web Developer.My further
                     goal is to excel in my Development Skills.  </p>
                </div>
                </div>
            
            </div>
        </div>
    )
}
export default Projects;