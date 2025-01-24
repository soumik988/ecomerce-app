import react from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Nav = () => {
    const auth = localStorage.getItem('user');
    const navigate = useNavigate();

    const logout = () => {
        localStorage.clear();
        navigate('/signup');
    };

    return (
        <div>
            <img
            alt='logo'
            className='logo'
            src='https://static.vecteezy.com/system/resources/previews/005/562/708/non_2x/ecommerce-app-icon-free-vector.jpg'/>
            {auth ? (
                <ul className='nav-ul'>
                    <li>
                        <Link to="/">Products</Link>
                    </li>
                    <li>
                        <Link to="/add">Add Products</Link>
                    </li>
                    <li>
                        <Link to="/update">Update Products</Link>
                    </li>
                    <li>
                        <Link to="/profile">Profile</Link>
                    </li>
                    <li>
                        <Link onClick={logout} to="/signup">Logout ({JSON.parse(auth).name})</Link>
                    </li>
                </ul>
            ) : (
                <ul className='nav-ul nav-right'>
                    <li>
                        <Link to="/signUp">Sign up</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                </ul>
            )}
        </div>
    );
};

export default Nav;
