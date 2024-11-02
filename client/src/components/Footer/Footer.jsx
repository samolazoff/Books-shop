import './Footer.scss';

import {Link} from 'react-router-dom';

function Footer(){
    return(
        <footer className='app-footer'>
            <Link to="https://github.com/samolazoff">by @Samolazoff</Link>
        </footer>
    )
}

export default Footer;