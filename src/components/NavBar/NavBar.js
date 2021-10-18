import React, { useState } from 'react';
import { FaTimes, FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Nav,
        NavbarContainer,
        NavLogo,
        NavIcon,
        MobileIcon,
        NavMenu,
        NavItem,
        NavLinks
    } from './NavBar.elements'

const NavBar = () => {

    const [ click, setClick ] = useState(false)

    const haledClick = ()=> setClick(!click)
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
                    <MobileIcon 
                        onClick={haledClick}
                    >
                            { click ? <FaTimes/>
                                : 
                                <FaBars/>
                            }
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='/'>
                                Homa
                            </NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </IconContext.Provider>
    )
}

export default NavBar
