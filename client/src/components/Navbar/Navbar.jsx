import './Navbar.scss';

import NavItem from '../NavItem/NavItem';
import NavLogin from '../NavLogin/NavLogin';
import { useSelector} from 'react-redux';

function Navbar () {
    const navMainList = useSelector(state => state.nav.mainItems);
    const navAcauntList = useSelector(state => state.nav.acauntItems);
    return (
        <nav className='navbar'>
            <ul className='navbar-items'>
                {
                    navMainList.map((item)=>{
                        return (
                            <NavItem data={item} key={item.href}></NavItem>
                        )
                    })
                }
             </ul>
             <ul className='navbar-items'>
                {
                    navAcauntList.map((item)=>{
                        return (
                            <NavLogin dataset={item} key={item.href}></NavLogin>
                        )
                    })
                }
             </ul>
        </nav>
    )
    
}

export default Navbar;