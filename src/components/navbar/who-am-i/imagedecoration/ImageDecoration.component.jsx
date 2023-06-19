import './ImageDecoration.styles.scss'

const ImageDecoration = (props) => {
    return (
        <div className='profile-section'>
            <div style={{visibility: props.isOpened ? 'visible' : 'hidden'}} className='decoration'>
                <div className='circle'></div>
            </div>
        </div>
    );
}

export default ImageDecoration;