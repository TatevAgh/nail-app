import './Header.css'
import logo from '../../assets/img/logo.jpg';

export function Header() {

    return (
        <header className="header-container">
            <div className="header-logo">
                <img alt="" src={logo} />
                <button>Nails by Gaya</button>
            </div>
            <div className='header-buttons-container'>
                <button>Home</button>
                <button>Find a Nail Artist</button>
                <button>About us</button>
                <button>Sign in as a Nail Artist</button>
            </div>

        </header>
    );
}
