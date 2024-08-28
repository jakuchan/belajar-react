import { useState } from 'react';
import '../styles/Navbar.css'
import { CiMenuBurger } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';


function Navbar() {
    const [statusTampil, setStatusTampil] = useState('')
    
    function tampilMenu(){
        if(statusTampil == ''){
            setStatusTampil('tampil')
        }else{
            setStatusTampil('')
        }
    }
        return (
            <nav>
        <div className="wrapper">
            <div className="logo">
                <Link to="/">Akmal Salim</Link>
            </div>
            <button onClick={tampilMenu}>
                {
                    statusTampil == '' ?(<CiMenuBurger />) : (<IoClose />
                    )
                }

                </button>
            <div className={`menu ${statusTampil}`} onClick={tampilMenu}>
                <ul>
                    <li><HashLink to="/#portfolio">Portofolio</HashLink></li>
                    <li><HashLink to="/#about">About</HashLink></li>
                    <li><Link to="/experiences">Experiences</Link></li>
                    
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar