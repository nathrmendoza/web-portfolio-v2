
import NavItem from './NavItem';

const Nav = () => {
    const navItems = [
        {
            name: 'Who',
            url: '/',
        },
        {
            name: 'Works',
            url: '/works',
        },
        // {
        //     name: 'Contact',
        //     url: '/contact',
        // },
    ]

    return (
        <nav>
            <ul>
                {navItems.map((e,index)=><NavItem key={index} name={e.name} url={e.url}/>)}
            </ul>
        </nav>
    )
}

export default Nav