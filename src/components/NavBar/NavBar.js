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
                    <NavMenu click={click} >
                        <NavItem>
                            <NavLinks to='/'>
                                Home
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/services'>
                                Services
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/products'>
                                Products
                            </NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </IconContext.Provider>
    )
}

export default NavBar
