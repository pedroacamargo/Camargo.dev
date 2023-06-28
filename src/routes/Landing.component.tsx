import '../Styles/landing/landing.styles.scss'
import WhoAmI from '../components/landing/WhoAmI.component';
import ImageDecoration from '../components/landing/ImageDecoration.component';
import Balls from '../components/landing/Balls.component';


const Landing = () => {
    return (
        <div className='landing-container'>
            <div className='profile-container'>
                <Balls />
                <WhoAmI />
                <ImageDecoration isOpened={true}/>
            </div>        
        </div>
    );
}

export default Landing;