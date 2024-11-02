import './NavLogin.scss';

import {NavLink} from 'react-router-dom';

function NavLogin (props) {
    const data=props.dataset;
    return (
        <li className='navbar-item'>
            <NavLink to={data.href} key={data.href}> {data.name}</NavLink>
        </li>
    )
}

export default NavLogin;