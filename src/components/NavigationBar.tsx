import { Link } from "react-router-dom";
import './NavigationBar.css'

function NavigationBar() {
  return (
    <>
    <div className="NavBar">
        <Link className="NavLink" to='/'>Home</Link>
        <Link className="NavLink" to='/articles'>Artigos</Link>
        <Link className="NavLink" to='/posters'>Cartazes</Link>
        <Link className="NavLink" to='/about'>Sobre</Link>
    </div>
    </>
  )
}

export default NavigationBar