import React from "react";
import { Bars, Nav, NavIcon, NavLink } from "./NavbarElements";
export default class Navbar extends React.Component {
  componentDidMount() {}
  render() {
    return (
      <>
        <Nav>
          <NavLink to="/">Subway Foods</NavLink>
          <NavIcon onClick={this.props.toggle}>
            <p>Menu</p>
            <Bars />
          </NavIcon>
          {/* <NavIcon>
            <p>Cart</p>
            <Bars />
          </NavIcon> */}
        </Nav>
      </>
    );
  }
}
