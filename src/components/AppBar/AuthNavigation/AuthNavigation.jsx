import { NavLink } from 'react-router-dom';
import css from './AuthNavigation.module.scss';

export const AuthNav = () => {
    const navItems = [
        {href: 'register', text: 'Registration'},
        {href: 'login', text: 'Login'},
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
            </div>
    );
};