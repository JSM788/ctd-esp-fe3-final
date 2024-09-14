//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
import { Link } from "react-router-dom"
import x from "./styles/Navbar.module.css"
import { FiSun, FiMoon } from "react-icons/fi"
import { useDentistStates } from "./utils/global.context"

const Navbar = () => {
  const { state, dispatch } = useDentistStates();
  const toggleTheme = () => dispatch({ type: 'TOGGLE_THEME' });
  
  return (
    <nav className={`${x.nav} ${state.theme === 'dark' ? 'dark-nav' : ''}`}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <span style={{ color: "red" }}>D</span>H Odonto
      </div>
      <div>
      <ul className={x.list}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/favs">Favs</Link>
          </li>
          <li className={x.iconMode} onClick={toggleTheme}>
            {state.theme === 'dark' ? <FiSun /> : <FiMoon />}
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
