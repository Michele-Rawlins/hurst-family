import React from 'react';
import { NavLink as RRNavLink } from 'react-router-dom';
import {
  // Collapse,
  Row,
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
          <div>
          <Nav className="navbar-links bg-dark fluid ml-auto nav-links" expand="lg" navbar>
              <NavItem>
              <NavLink className="navbar-links" tag={RRNavLink} to='/home'>Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="navbar-links" tag={RRNavLink} to='/facts'>Fun Facts</NavLink>
            </NavItem>
            {/* <NavItem>
              <NavLink className="navbar-links" tag={RRNavLink} to='/facts/new'>New Fun Fact</NavLink>
            </NavItem> */}
            <NavItem>
              <NavLink className="navbar-links" tag={RRNavLink} to='/family'>Family Members</NavLink>
            </NavItem>
            {/* <NavItem>
            <NavLink className="navbar-links" tag={RRNavLink} to='/family/new'> New Family Members</NavLink>
            </NavItem> */}
            <NavItem>
              <NavLink className="navbar-links" tag={RRNavLink} to='/memories'>Memories</NavLink>
            </NavItem>
            {/* <NavItem>
              <NavLink className="navbar-links" tag={RRNavLink} to='/memories/new'>New Memories</NavLink>
            </NavItem> */}
            
            <NavItem>
              <NavLink className="navbar-links" onClick={this.logMeOut}>Log Out</NavLink>
          </NavItem>
          </Nav>
          </div>
        );
      }
      return <Nav className="ml-auto" navbar></Nav>;
    };

    return (
      <div className="myNavbar-container">
       <div className="container-fluid">
        <h1 className="display-4 intro" >Welcome to the Hurst Family</h1>
        <p className="arabian-proverb">Every day of your life is a page of your history. -- Arabian Proverb</p>
        <div>
        <Navbar className="myNavbar d-flex"  expand="sm">
          {/* <Row> */}
          <NavbarBrand href="/"><span><img className="crest-image"src="https://live.staticflickr.com/65535/50028151452_aee1fc33c6_n.jpg"  alt="Hurst-England"></img></span></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          {/* <Collapse isOpen={isOpen} navbar> */}
            {buildNavbar()}
          {/* </Collapse> */}
          {/* </Row> */}
        </Navbar>
      </div>
      </div>
</div>
    );
  }
}

export default MyNavbar;
