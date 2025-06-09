import { HomeNavigationBar } from "./NavigationBar"
import './HomeHeader.css'

function Header() {
  return (
    <>
    <div className='Header'>
        <div className="HeaderDiv">
            <HomeNavigationBar/>
        </div>
        <div className='HeaderFade'></div>
    </div>
    </>
  )
}

export default Header