import { Bottom } from "./components/bottom/bottom";
import { Hero } from "./components/hero/hero";
import { Navbar } from "./components/navbar/navbar";
import './body.css';




const Body = () => {

    return(
        <div className="body">
          <Navbar/>  
          <Hero/>
          <Bottom/>
        </div>
    )

}

export { Body } 