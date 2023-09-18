import "./App.css";
import Body from "./Body";
import NavBar from "./NavBar.js";
import About from "./Pages/About";
import Footer from "./Footer";
import Contact from "./Pages/Contact";
import Projects from "./Pages/Projects";
import Techstack from "./Pages/Techstack";
import "./css-1.css";
function App() {

  



  return (

  
    <div className="flex flex-col w-full h-full bg-black justify-center overflow-hidden"> 
     

      <NavBar></NavBar>
      <Body></Body>
      <Projects></Projects>
      <About></About>
      <Techstack></Techstack>
      <Contact></Contact>
        <Footer></Footer>
      
    </div>


  );
}

export default App;
