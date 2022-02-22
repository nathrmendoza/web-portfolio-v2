import {Link, useResolvedPath, useMatch} from 'react-router-dom';

const NavItem = ({name, url}) => {
    let resolved = useResolvedPath(url);
    let match = useMatch({path: resolved.pathname, end: true});

    return (
        <li className={(match) ? 'active' : ''}>
            <Link to={url}>{name}</Link>
        </li>
    )
}

export default NavItem