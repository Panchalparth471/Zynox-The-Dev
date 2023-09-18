import toast, { Toaster } from "react-hot-toast";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useState } from "react";



function Contact() {
    const REACT_APP_BASE_URL = process.env.REACT_APP_BASE_URL;
    const [formData, setFormData] = useState({ name: "", email: "",subject:"", message: ""});

    function changeHandler(event) {
        const { name, value } = event.target;
        setFormData(
            (prev) => ({ ...prev, [name]: value })
        )
        
    }
        

       
  


    function submitHandler(event) {
    event.preventDefault();
    // console.log("Finally printing the value of Form Data:");
    //     console.log(formData)
         toast.success("Message sent");

        const send = async (formData)=>{
            try {

                const savedUserResponse = await fetch(
                    `${REACT_APP_BASE_URL}/sendMessage`,
                    {

                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
        
                        body: JSON.stringify({...formData }),
                    }
                );
                  toast.success("Message sent");
                //  console.log("FORM RESPONSE......", savedUserResponse);
        }
            catch (err) {
                console.log("error in sending message");
                console.log(err.message);
                toast.error("Failed to send message");
            }
        }

        // send(formData);
    }



  
    return (
        <div className=" flex w-[100vw] h-full mb-28 flex-col" id="Contact"><h1 className="text-white text-[50px] w-full pl-10 max-md:text-2xl">
             <div data-aos="fade-left"
                         data-aos-easing="ease">
                Contact Me
                </div>
        </h1>
            
            

            <h2 className="text-gray-500 text-[30px] w-[80%] mb-7 pl-10  max-md:text-2xl max-sm:text-lg">
                  <div data-aos="fade-left"
                         data-aos-easing="ease">
                     Questions, Thoughts, Or Just Want To Say Hello?
                </div>

            </h2>
              
            <form onSubmit={submitHandler} className="w-full flex flex-col items-center h-full">
          <div className="w-full flex flex-col items-center" data-aos="fade-left"
                         data-aos-easing="ease-in-sine">
                <input onChange={changeHandler} id="name" name="name" value={formData.name} className="flex w-[60%] max-sm:w-[90%] h-[40px] pl-6 rounded-md outline-none" required type="text" placeholder="Enter your name">
                    
                    </input>
                <br />
                <input onChange={changeHandler} id="email" name="email" value={formData.email} className="flex w-[60%] max-sm:w-[90%] h-[40px] pl-6 rounded-md outline-none" required type="email" placeholder="Enter your email address"></input>
                <br />
                 <input name="subject" onChange={changeHandler} value={formData.subject} id="subject" className="flex w-[60%] max-sm:w-[90%] h-[40px] pl-6 rounded-md outline-none" required type="text" placeholder="Subject"></input><br/>
                <textarea onChange={changeHandler} name="message" id="message" value={formData.message} className="flex w-[60%] max-sm:w-[90%] h-[150px] pl-6 pt-2 resize-none rounded-md outline-none text-base" placeholder="Enter your message"></textarea><br />
                 </div>   <div className="flex mx-auto">
                    <div ref={ref} data-aos="fade-up"
                    data-aos-easing="ease-in-sine" className="place-content-center place-items-center max-sm:pb-7">
                    <button className="flex max-sm:w-[250px] justify-center  gap-x-4 items-center w-[300px] h-[45px] rounded-[30px] max-sm:text-xl max-sm:h-[30px] text-black bg-[#10B67A] text-2xl font-normal hover:bg-white shadow-lg shadow-emerald-400 hover:scale-110 duration-300 transition ease-in-out " >

                     Send Message<svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-10 max-sm:h-6" fill="black" viewBox="0 0 512 512"><path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z"/></svg>
                        
                    
                        </button>
                        </div>
                    <Toaster></Toaster>
                </div>
               
           </form>
           
        </div>
    )
}
export default Contact;



//Reference for scroll animations
// https://blog.logrocket.com/react-scroll-animations-framer-motion/#:~:text=Framer%20Motion%20animates%20elements%20when%20they%20mount%20on,until%20its%20scroll%20position%20is%20in%20the%20viewport.
