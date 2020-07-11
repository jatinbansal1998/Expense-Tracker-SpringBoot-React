import React, {Component} from 'react';
import {Nav, Navbar, NavbarBrand, NavItem, NavLink} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

class AppNav extends Component {
    render() {
        return (
            <div id='navbar'>
                <Navbar color="dark" dark expand="md">
                    <NavbarBrand href="/">Expense Tracker</NavbarBrand>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="/">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/categories">Categories</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/expenses">Expenses</NavLink>
                        </NavItem>
                    </Nav>
                </Navbar>
            </div>
        );
    }
}

export default AppNav;
