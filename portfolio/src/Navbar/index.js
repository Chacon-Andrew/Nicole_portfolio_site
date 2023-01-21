import React from 'react'
import pic from '../imgs/Group_17.png'
import {
    Nav,
    NavLink,
} from './NavbarElements';

const Navbar = () => {

    const scrolla = () =>{
        let element = document.getElementById("about");
        element.scrollIntoView({behavior: 'smooth'});
    }

    const scrollh = () =>{
        let element = document.getElementById("home");
        element.scrollIntoView({behavior: 'smooth'});
    }

    const scrollp = () =>{
        let element = document.getElementById("project");
        element.scrollIntoView({behavior: 'smooth'});
    }

    const scrollc = () =>{
        let element = document.getElementById("contact");
        element.scrollIntoView({behavior: 'smooth'});
    }

  return (
    <div>
        <Nav>
            <NavLink to='/'>
                <img src={pic} alt='logo' onClick={scrollh}/>
            </NavLink>
            <NavLink>
                <h1 onClick={scrolla}>About</h1>
            </NavLink>
            <NavLink>
                <h1 onClick={scrollp}>Projects</h1>
            </NavLink>
            <NavLink>
                <h1>Resume</h1>
            </NavLink>
            <NavLink>
                <h1 onClick={scrollc}>Contact</h1>
            </NavLink>
        </Nav>
    </div>
  )
}

export default Navbar