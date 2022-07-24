import './box.css';
import CustomLogo3 from '../../../../assets/images/facebook.png';
import CustomLogo4 from '../../../../assets/images/twitter.png';
import CustomLogo5 from '../../../../assets/images/instagram.png';



const Box = () =>{
    return(
        <>
        <div class="container">
	        

	<div class="social">
		<img src={CustomLogo3}/>
		<img src={CustomLogo4}/>
		<img src={CustomLogo5}/>
		</div>
	</div>
    </>
    );
}


export {Box};