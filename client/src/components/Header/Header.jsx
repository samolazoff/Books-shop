import './Header.scss';

import Logo from '../Logo/Logo';

import Navbar from '../Navbar/Navbar';

function Header(props) {
    return (
        <header className='app-header'>
           <Logo/>
           <Navbar></Navbar>
        </header>
    );
}

export default Header;             
