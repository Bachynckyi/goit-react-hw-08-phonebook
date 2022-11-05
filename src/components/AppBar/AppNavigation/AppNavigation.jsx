import { NavLink } from 'react-router-dom';
import css from './AppNavigation.module.scss';

export const AppNavigation = () => {
    const navItems = [
        {href: 'home', text: 'Home'},
        {href: 'contacts', text: 'Contacts'}
    ];

    return (
        <div>
        {navItems.map(({href, text}) => (
            <NavLink
            className={({ isActive }) =>
                isActive ? `${css.active}` : `${css.link}`
            }
            to={href}
            key={href}
            >{text}
            </NavLink>
    ))}
    </div>)
};