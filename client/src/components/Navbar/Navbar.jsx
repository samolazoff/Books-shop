import './Navbar.scss';

import NavItem from '../NavItem/NavItem';

function Navbar () {
    return (
        <nav className='navbar'>
            <ul className='navbar-items'>
               <NavItem></NavItem>
                         </ul>
        </nav>
    )
    
}

export default Navbar;