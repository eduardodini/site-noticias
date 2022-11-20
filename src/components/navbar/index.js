import React from 'react'
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavButton,
    NavButtonLink
} from './NavbarElements'

const Navbar = () => {
    return (
        <>
        <Nav>
            <Bars />
            <NavMenu>
                <NavLink to='/main'activeStyle>
                    Principal
                </NavLink>
                <NavLink to='/politics'activeStyle>
                    Política
                </NavLink>
                <NavLink to='/education'activeStyle>
                    Educação 
                </NavLink>
                <NavLink to='/health'activeStyle>
                    Saúde
                </NavLink>
                <NavLink to='/contact'activeStyle>
                    Contato
                </NavLink>
            </NavMenu>
        </Nav>
        </>
    )
}

export default Navbar