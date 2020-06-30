import React from 'react';
import { NavLink as RRNavLink } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import PropTypes from 'prop-types';
import firebase from 'firebase/app';
import 'firebase/auth';

import './MyNavbar.scss';

class MyNavbar extends React.Component {
  static propTypes = {
    authed: PropTypes.bool.isRequired,
  }

  state = {
    isOpen: false,
  }

  logMeOut = (e) => {
    e.preventDefault();
    firebase.auth().signOut();
  }

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    const { isOpen } = this.state;
    const buildNavbar = () => {
      const { authed } = this.props;
      if (authed) {
        return (
          <Nav className="ml-auto navbar-links bg-dark" navbar>
            <NavItem>
              <NavLink className="navbar-links" tag={RRNavLink} to='/home'>Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="navbar-links" tag={RRNavLink} to='/facts'>Fun Facts</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="navbar-links" tag={RRNavLink} to='/facts/new'>New Fun Fact</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="navbar-links" tag={RRNavLink} to='/family'>Family Members</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="navbar-links" tag={RRNavLink} to='/family/new'>New Family Members</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="navbar-links" onClick={this.logMeOut}>Log Out</NavLink>
          </NavItem>
          </Nav>
        );
      }
      return <Nav className="ml-auto" navbar></Nav>;
    };

    return (
      <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-4 intro" expand="md">Welcome to the Hurst Family</h1>
        <p className="arabian-proverb">Every day of your life is a page of your history. -- Arabian Proverb</p>
        <div className="myNavbar">
        <Navbar className="myNavbar" color=""  expand="md">
          <NavbarBrand href="/"><span><img src="https://live.staticflickr.com/65535/50028151452_aee1fc33c6_n.jpg" width="150" height="150" alt="Hurst-England"></img></span></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={isOpen} navbar>
            {buildNavbar()}
          </Collapse>
        </Navbar>
      </div>
      </div>
</div>
    );
  }
}

export default MyNavbar;
