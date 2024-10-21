import './Logo.scss';
import logo from '../../assets/img/logo.svg';

function Logo(props) {
    return (
        <img src={logo} alt="logo" className='logo-svg'/>
    );
}

export default Logo;             
