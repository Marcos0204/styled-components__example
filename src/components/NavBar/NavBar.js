import React, { useState } from 'react';
import { FaTimes, FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Nav, NavbarContainer, NavLogo, NavIcon, MobileIcon } from './NavBar.elements'

const NavBar = () => {

    const [ click, setClick ] = useState(false)
    return (
        <IconContext.Provider 
            value={{
                color:'red'
            }}
        >
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'>
                        <NavIcon/>
                        ULTRA
                        
                    </NavLogo>
                    <MobileIcon>
                            { click ? <FaTimes/>
                                : 
                                <FaBars/>
                            }
                        </MobileIcon>
                </NavbarContainer>
            </Nav>
        </IconContext.Provider>
    )
}

export default NavBar
