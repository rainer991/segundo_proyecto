import CustomLogo from '../../../../assets/images/suite.png'
import { Button } from '../../../commons/button';
import './navbar.css';



const Navbar = () =>{
    return(
        <div className="navbar">
            <div className="left">
                <img src={CustomLogo}/>
            </div>
            <div className="right">
                <Button/>
            </div>
        </div>
    );
}


export {Navbar};