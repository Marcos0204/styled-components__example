import React, { useState } from 'react';
import { FaTimes, FaBars } from 'react-icons/fa';
import { Nav, NavbarContainer, NavLogo, NavIcon, MobileIcon } from './NavBar.elements'

const NavBar = () => {

    const [ click, setClick ] = useState(false)
    return (
        <Nav>
            <NavbarContainer>
                <NavLogo to='/'>
                    <NavIcon/>
                    ULTRA
                    
                </NavLogo>
                <MobileIcon>
                        { click ? <FaTimes color='red'/>
                            : 
                            <FaBars color='red'/>
                        }
                    </MobileIcon>
            </NavbarContainer>
        </Nav>
    )
}

export default NavBar
