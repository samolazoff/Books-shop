import './NavItem.scss';

import {NavLink} from 'react-router-dom';

function NavItem () {
    return (
        <li className='navbar-item'>
            <NavLink to='/'> Home</NavLink>
        </li>
    )
};

export default NavItem;