// import reactPng from "../Tech Stack/React.png";
// import Bootstrap from "../Tech Stack/Bootstrap.svg";
// import Next from "../Tech Stack/Next.svg";
// import Node from "../Tech Stack/NodeJs.svg";
// import Js from "../Tech Stack/Javascript.svg";
// import css from "../Tech Stack/CSS.png";
// import Express from "../Tech Stack/Express.png";
// import Mongo from "../Tech Stack/MongoDB.svg";
// import Git from "../Tech Stack/Git.svg";
// import Github from "../Tech Stack/Github.svg";
// import python from "../Tech Stack/icons8-python.svg";
// import c from "../Tech Stack/icons8-c-programming.svg";
// import cpp from "../Tech Stack/icons8-c++.svg";
import economzy from "../Projects/economzy.png";
import StudyNotion from "../Projects/notion2.png";
import testimonials from "../Projects/Testimonials.png";
import chair from "../Projects/graychair.png";
import employee from "../Projects/Employee List.png";
// import Redux from "../Tech Stack/Redux.svg";
// import Tailwind from "../Tech Stack/Tailwind.png";
// import Typescript from "../Tech Stack/Typescript.svg";
// import Vercel from "../Tech Stack/Vercel.svg";
// import Postman from "../Tech Stack/postman-icon-svgrepo-com.svg";
// import Aos from "aos";
    
    



function Projects() {
    
    return (

        <div className="mt-16 flex w-[100vw] h-[3000px] justify-center items-center max-sm:h-auto max-sm:mt-0" id="Projects"> 
            <div className="flex bg-transparent flex-col w-[70%] items-center h-full justify-evenly text-white text-6xl gap-10 max-md:w-[90%] max-sm:h-[30%] " id="text">
                <div className="flex justify-center items-center">
            <h1 className="text-center mt-10">Projects</h1>
            
                </div>

                <div data-aos="fade-right"
                    data-aos-easing="ease-in-sine"
            className="project-card max-md:left-0">
            <img src= {StudyNotion} className="rounded-[30px]"></img>
            <div className="project-number">01</div>
            <div className="flex flex-col z-5 w-full justify-between gap-10 bottom-[40%] max-[430px]:bottom-5 pl-24 absolute max-sm:gap-5">
               <h2 className="project-heading">Study Notion</h2>

              <p className="project-subHeading">Its a full stack ed-Tech platform
                created with MERN Stack.
                        </p>
            </div>
          </div>
          

                  <div data-aos="fade-up"
            data-aos-easing="ease-in-sine" className="project-card">
             <img src= {testimonials} className="rounded-[30px]"></img>
            <div className="project-number" id="pn-r">02</div>
            <div className="flex flex-col z-5 w-full justify-between gap-10 bottom-[40%] max-[430px]:bottom-5 max-sm:gap-5 pl-24 absolute">
               <h2 className="project-heading max-sm:top-5">Testimonial</h2>

              <p className="project-subHeading">
                A React based testimonials page created with tailwind CSS
                        </p>
            </div>
          </div>
          

                  <div data-aos="fade-left"
                    data-aos-easing="ease-in-sine"
            className="project-card max-md:left-0">
             <img src= {chair} className="rounded-[30px]"></img>
            <div className="project-number ">03</div>
            <div className="flex flex-col z-5 w-full justify-between gap-10 bottom-[40%] max-[430px]:bottom-5  max-sm:gap-5 pl-24 absolute">
               <h2 className="project-heading">Modern Chair</h2>

              <p className="project-subHeading">An Responsive web page 
                created with MERN Stack.
                        </p>
            </div>
          </div>
          


                  <div data-aos="fade-right"
            data-aos-easing="ease-in-sine" className="project-card ">
             <img src= {employee} className="rounded-[30px]"></img>
            <div className="project-number">04</div>
            <div className="flex flex-col z-5 w-full justify-between gap-10 bottom-[40%] max-[430px]:bottom-5  max-sm:gap-5 pl-24 absolute">
               <h2 className="project-heading">Create Employee</h2>

              <p className="project-subHeading">Full stack Project to store data
                   of employees
                        </p>
            </div>
          </div>
          

                  <div data-aos="fade-up"
                    data-aos-easing="ease-in-sine"
            className="project-card max-md:left-0">
             <img src= {economzy} className="rounded-[30px]"></img>
            <div className="project-number">05</div>
            <div className="flex flex-col z-5 w-full justify-between gap-10 bottom-[40%] pl-24 absolute max-sm:gap-5 max-[430px]:bottom-5">
               <h2 className="project-heading">Ecomzy</h2>

              <p className="project-subHeading">An redux based MERN Stack stack ecommerce project.
                        </p>
            </div>
                </div>


            </div>
  

        </div>
    );
}
export default Projects;


//AOS animation reference
//https://dev.to/ruppysuppy/create-the-ultimate-user-experience-with-aos-animate-on-scroll-39jp