import "./NavBar.css"
import SpaIcon from '@mui/icons-material/Spa'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className="Nav-Bar">
            <div className="nav-container">
                <div className="navbar-brand">
                    <Link to="/">
                        <SpaIcon className="nav-icon" />
                        <span>Masajes Equilibrio</span>
                    </Link>
                </div>
                <div className="navbar-nav">
                    <Link className="nav-link" to="/">Inicio</Link>
                    <Link className="nav-link" to="/turnos">Turnos</Link>
                    <Link className="nav-link" to="/contacto">Contacto</Link>
                </div>
            </div>
        </nav>
    )
}

export default NavBar