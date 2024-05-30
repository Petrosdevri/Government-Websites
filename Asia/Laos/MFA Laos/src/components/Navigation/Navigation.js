import React from 'react';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navigation.css';

export default function Navigation() {
    return (
        <Navbar expand='lg' className='navbar d-flex justify-content-center align-items-center p-2'>
            <Container>
                <Navbar.Toggle aria-controls='navbar-nav' />
                    <Navbar.Collapse id='navbar-nav'>
                        <Nav className='me-auto'>
                            <Nav.Link as={Link} to='/'>Home</Nav.Link>
                            <NavDropdown title='The Ministry' id='the-ministry-nav-dropdown'>
                                <NavDropdown.Item as={Link} to='/the-ministry/mofa-leaders'>MOFA Leaders</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to='/the-ministry/departments'>Departments</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to='/the-ministry/overseas-mission'>Lao Mission in Abroad</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to='/the-ministry/organizational-structure'>Organizational Structure</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to='/the-ministry/mass-organization'>Mass Organization</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title='Foreign Policy' id='foreign-policy-nav-dropdown'>
                                <NavDropdown.Item as={Link} to='/foreign-policy/foreign-policy'>Foreign Policy</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to='/foreign-policy/diplomatic-relations'>Diplomatic Relations</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title='International Cooperation' id='international-cooperation-nav-dropdown'>
                                <NavDropdown.Item as={Link} to='/international-cooperation/bilateral'>Bilateral</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to='/international-cooperation/multilateral'>Multilateral</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title='Statements' id='statements-nav-dropdown'>
                                <NavDropdown.Item as={Link} to='/statements/statement-of-state'>Statement of State</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to='/statements/mofa-statements'>MOFA Statements</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to='/statements/asean-statements'>ASEAN Statements</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to='/statements/press-statements'>Press Statements</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to='/statements/messages-from-state-leaders'>Messages from State Leaders</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to='/statements/notices'>Notices</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title='Activities' id='activities-nav-dropdown'>
                                <NavDropdown.Item as={Link} to='/activities/state-leaders'>State Leaders</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to='/activities/mofa-leaders'>MOFA Leaders</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to='/activities/lao-overseas-and-departments'>Lao Overseas and Departments</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to='/activities/other-news'>Other News</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to='/activities/messages'>Messages</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}