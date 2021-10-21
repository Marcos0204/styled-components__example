import React, { useState, useEffect } from 'react';
import { FaTimes, FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Button } from '../../globalStyles'
import { Nav,
        NavbarContainer,
        NavLogo,
        NavIcon,
        MobileIcon,
        NavMenu,
        NavItem,
        NavLinks,
        NavItemBtn,
        NavBtnLink
    } from './NavBar.elements'

const NavBar = () => {

    const [ click, setClick ] = useState(false);
    const [ button, setButton ] = useState(true);

    const showButton = () =>{
        if(window.innerWidth <= 960){
            setButton(false)
        } else{
            setButton(true)
        }
    }

    useEffect( ()=>{
        showButton()
    }, [])

    window.addEventListener('risize', showButton);

    const haledClick = ()=> setClick(!click)
    return (
        <IconContext.Provider 
            value={{
                color:'red'
            }}
        >
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/' onClick={haledClick}>
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
                    <NavMenu click={click}  onClick={haledClick}>
                        <NavItem>
                            <NavLinks to='/'>
                                Home
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/services' >
                                Services
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/products'>
                                Products
                            </NavLinks>
                        </NavItem>
                        <NavItemBtn>
                            { button ? (
                                <NavBtnLink to='/sign-up'>
                                    <Button primary>
                                        SIGN UP
                                    </Button>
                                </NavBtnLink>
                            ) : (
                                <NavBtnLink to='/sign-up'>
                                    <Button
                                        fontBig
                                        primary 
                                    >
                                        SIGN UP
                                    </Button>
                                </NavBtnLink>
                            )}
                        </NavItemBtn>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </IconContext.Provider>
    )
}

export default NavBar
