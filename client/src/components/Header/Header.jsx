import './Header.scss';

import Logo from '../Logo/Logo';

function Header(props) {
    return (
        <header className='app-header'>
           <Logo/>
        </header>
    );
}

export default Header;             
