import './Logo.scss';

import {Link} from 'react-router-dom';

function Logo() {
    return (
        <h1 className='logo-txt'>
            <Link to='/'>
                BoOkS
            </Link>
        </h1>
);
}

export default Logo;             