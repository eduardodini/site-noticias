import React from 'react'
import {
    Nav,
    NavLink,
    Bars,
    NavMenu
} from './NavbarElements'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const Navbar = () => {
    const handleClick = () => {
        <NavLink to='/search'></NavLink>
    }

    return (
        <>
        <Nav>
            <Bars />
            <NavMenu>
                <NavLink to='/'>Principal</NavLink>
                <NavLink to='/politics'>Política</NavLink>
                <NavLink to='/education'>Educação </NavLink>
                <NavLink to='/health'>Saúde</NavLink>
                <NavLink to='/contact'>Contato</NavLink>
                <Form className="d-flex">
                        <Form.Control
                        type="search"
                        placeholder="Pesquisar"
                        className="me-2"
                        aria-label="Search"
                        /></Form>
                <NavLink to='/search'>
                    <Button variant="outline-success" onClick={handleClick}>Pesquisar</Button>
                </NavLink>
            </NavMenu>
        </Nav>
        </>
    )
}

export default Navbar