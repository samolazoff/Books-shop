import './NavItem.scss';

import {NavLink} from 'react-router-dom';

function NavItem (props) {
    const data=props.data;
    return (
        <li className='navbar-item'>
            <NavLink to={data.href} > {data.name}</NavLink>
        </li>
    )
};

export default NavItem;