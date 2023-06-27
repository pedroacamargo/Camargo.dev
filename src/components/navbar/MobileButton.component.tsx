import '../../Styles/navbar/MobileButton.styles.scss';

export const MobileButton = (props: any) => {


    
    const stripState1 = {
        transform: props.isMobileMenuOpened ? 'rotate(45deg)' : '',
        left: props.isMobileMenuOpened ? '-4px' : '0',
        top: props.isMobileMenuOpened ? '16px' : '0',
        transition: '.5s ease',
    }

    const stripState2 = {
        transform: props.isMobileMenuOpened ? 'rotate(180deg) translate(-30px, 30px)' : '',
        transition: '.5s ease'
    }

    const stripState3 = {
        transform: props.isMobileMenuOpened ? 'rotate(-45deg)' : '',
        left: props.isMobileMenuOpened ? '13px' : '0',
        top: props.isMobileMenuOpened ? '21px' : '0',
        transition: '.5s ease',
    }

    return (
        <div className='menu-btn' onClick={props.handleMenu}>
            <div style={stripState1} className='menu-strip strip1'></div>
            <div style={stripState2} className='menu-strip strip2'></div>
            <div style={stripState3} className='menu-strip strip3'></div>
            <span>Menu</span>
        </div>
    );
}
