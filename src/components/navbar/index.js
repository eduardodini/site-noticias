import React from 'react'
import {
    Nav,
    NavLink,
    Bars,
    NavMenu
} from './NavbarElements'

const Navbar = () => {
    return (
        <>
        <Nav>
            <Bars />
            <NavMenu>
                <NavLink to='/main'>Principal</NavLink>
                <NavLink to='/politics'>Política</NavLink>
                <NavLink to='/education'>Educação </NavLink>
                <NavLink to='/health'>Saúde</NavLink>
                <NavLink to='/contact'>Contato</NavLink>
            </NavMenu>
        </Nav>
        </>
    )
}

export default Navbar