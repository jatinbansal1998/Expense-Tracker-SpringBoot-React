import React, {Component} from 'react';
import {Nav, Navbar, NavbarBrand, NavItem, NavLink} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

class AppNav extends Component {
    render() {
        return (
            <div id='navbar'>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">Expense Tracker</NavbarBrand>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="http://localhost:8080/users/">Users</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="http://localhost:8080/categories/">Categories</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="http://localhost:8080/expenses/">Expenses</NavLink>
                        </NavItem>
                    </Nav>
                </Navbar>
            </div>
        );
    }
}

export default AppNav;
