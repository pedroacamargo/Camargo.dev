import './Balls.styles.scss'

const Balls = () => {

    const ballsStyle = {
        backgroundColor: 'rgba(161, 31, 31, 0.664)'
    }

    return (
        <div>
            <div style={ballsStyle} className='navbar-decoration dec1'></div>
            <div style={ballsStyle} className='navbar-decoration dec2'></div>
            <div style={ballsStyle} className='navbar-decoration dec3'></div>
            <div style={ballsStyle} className='navbar-decoration dec4'></div>
            <div style={ballsStyle} className='navbar-decoration dec5'></div>
            <div style={ballsStyle} className='navbar-decoration dec6'></div>
            <div style={ballsStyle} className='navbar-decoration dec7'></div>
            <div style={ballsStyle} className='navbar-decoration dec8'></div>
        </div>
    );
}


export default Balls;