
import CustomLogo2 from '../../../../assets/images/suite_2.png';
import './footer.css';

const Footer = () =>{
    return(
        <div className="footer">
            <div className="left">
                <img src={CustomLogo2}/>
            </div>
            <div className="center">
                <p>Copyright - Suite</p>
            </div>
            <div className="right">
            <i class="fa-brands fa-square-facebook"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-instagram"></i>
                
            </div>
        </div>
    );
}


export {Footer};