
import { Body } from "./components/body/body";
import { Footer } from "./components/footer/footer";
import './main-layout.css';


const Main = () => {
    return (
    
    <div className="main" style={{display:'flex', flexDirection:'column'}}>
      <Body/>
      <Footer/>
    </div>
  
  )};
  
  export {Main};