import Nav from './Nav/Nav';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <div className='header-wrapper'>
                <div className='left-side'>
                    <Link to='/'>
                        <img src="/logo-transp.png" alt="site-logo"/>
                    </Link>
                </div>
                <Nav/>
            </div>
        </header>
    )
}

export default Header