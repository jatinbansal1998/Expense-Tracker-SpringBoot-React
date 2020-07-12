import React, {Component} from 'react';
import {Collapse, Nav, Navbar, NavbarBrand, NavbarText, NavbarToggler, NavItem, NavLink} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

class AppNav extends Component {
    state = {
        isOpen: false
    }

    toggle = () => {
        this.setState({isOpen: !this.state.isOpen})
    }

    render() {
        return (
            <div id='navbar'>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">Expense Tracker</NavbarBrand>
                    <NavbarText className="ml-auto">{this.props.navBarText}</NavbarText>
                    <NavbarToggler onClick={this.toggle}/>
                    <Collapse isOpen={this.state.isOpen} navbar>
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
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

export default AppNav;
