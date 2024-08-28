import profilePicture from '../assets/profile-picture.png'
import '../styles/Header.css'
import { FaInstagram } from "react-icons/fa";

function Header() {
  return (
    <header>
        <div className="header-jumbotron">
            <img src={profilePicture}/>
            <h3>Muhammad Akmal Mursalim</h3>
            <p>I have the skills and experience in website development for 2 years, am capable of actively communicating within the team, can lead and manage a team, and am able to adapt and identify problems in the workplace.</p>
            <div className="socialMedia">
                <a href="#"><FaInstagram/></a>
            </div>
        </div>
    </header>
  )
}

export default Header