import { NavLink } from 'react-router-dom';
import './Header.css';

export default function Header() {
    return (
        <div className='Header'>
            <div>logo</div>
            <nav>
                <NavLink to='/teams'>Meetings</NavLink> | <NavLink to='/add-meeting'>Add Meeting</NavLink>
            </nav>
        </div>
    );
}