
import CustomLogo2 from '../../../../assets/images/suite_2.png';
import { Box } from '../box/box';
import './footer.css';

const Footer = () =>{
    return(
        <div className="footer">
            <div className="left1">
                <img src={CustomLogo2}/>
            </div>
            <div className="right">
            </div>
            <div>
                <Box/>
            </div>
        </div>
    );
}


export {Footer};