import '../Styles/landing/landing.styles.scss'
import WhoAmI from '../components/landing/WhoAmI.component';
import ImageDecoration from '../components/landing/ImageDecoration.component';
import Balls from '../components/landing/Balls.component';
import { Reveal } from '../components/reveal/Reveal';

interface viwportSizeI {
    viewportSize: {
        width: number,
        height: number
    }
}

const Landing = (props: viwportSizeI) => {
    return (
        <div className='landing-container' style={props.viewportSize.width < 800 ? {backgroundColor: "black"} : {}}>
                <div className='profile-container'>
                    <Balls />
                    <WhoAmI />
                    <ImageDecoration isOpened={true}/>
                </div>        
        </div>
    );
}

export default Landing;