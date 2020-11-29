import React from "react";
import { Bars, Nav, NavIcon, NavLink } from "./NavbarElements";
export default class Navbar extends React.Component {
  componentDidMount() {}
  render() {
    return (
      <>
        <Nav>
          <NavIcon onClick={this.props.toggle}>
            <p>Cart</p>
            <Bars />
          </NavIcon>
        </Nav>
      </>
    );
  }
}
