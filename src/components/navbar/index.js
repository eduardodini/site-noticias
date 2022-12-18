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
                <Form className="d-flex">
                    <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                    />
                    <Button variant="outline-success">Pesquisar</Button>
                </Form>
            </NavMenu>
        </Nav>
        </>
    )
}

export default Navbar