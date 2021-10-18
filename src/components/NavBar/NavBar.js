import React from 'react';
import { Nav, NavbarContainer, NavLogo, NavIcon } from './NavBar.elements'

const NavBar = () => {
    return (
        <Nav>
            <NavbarContainer>
                <NavLogo to='/'>
                    <NavIcon/>
                    ULTRA
                </NavLogo>
            </NavbarContainer>
        </Nav>
    )
}

export default NavBar
