import './header.css';
import { Link, useNavigate } from 'react-router-dom';
import { useSession } from '../../context/session';
import { useState, useEffect } from 'react';
import HandleApiCall from '../../handleApiCall';
function Header() {
    const { session } = useSession();
    const navigate = useNavigate();
    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const handleLogout = async () => {
        await HandleApiCall({route: 'auth/logout', method: 'POST', body: {}})
        navigate('/login')
    }
    const handleToggleDropdown = () => {
        setDropdownVisible(prevState => !prevState);
    };

    const handleOutsideClick = (e: MouseEvent) => {
        const target = e.target as Node;
        if (!document.querySelector('.corner')?.contains(target)) {
          setDropdownVisible(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleOutsideClick);
        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, []);

    return (
        <div className="header">
            <div className="header-items">
                <div className="nav-links">
                    <Link to='home'>
                        <span className='headerSpan'>New Request</span>
                    </Link>
                    <Link to='home'>
                        <span className='headerSpan'>My Requests</span>
                    </Link>
                    <Link to="areq">
                        <span className='headerSpan'>All Requests</span>
                    </Link>
                </div>
                <div className="corner" onClick={handleToggleDropdown}>
                    <span className='headerSpan'>
                        {session?.username}
                    </span>
                    {isDropdownVisible && (
                        <div className="dropdown-menu">
                            <div className="dropdown-item" onClick={handleLogout}>Sign Out</div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Header;
