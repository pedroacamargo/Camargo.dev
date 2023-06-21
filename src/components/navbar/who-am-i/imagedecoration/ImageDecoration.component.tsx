import './ImageDecoration.styles.scss'

interface Props {
    isOpened: boolean,
}

const ImageDecoration = (props: Props) => {
    return (
        <div className='profile-section'>
            <div style={{visibility: props.isOpened ? 'visible' : 'hidden'}} className='decoration'>
                <div className='circle'></div>
            </div>
        </div>
    );
}

export default ImageDecoration;