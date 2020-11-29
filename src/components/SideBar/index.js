import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute
} from "./SideBarElements";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default class Sidebar extends React.Component {
  componentDidMount() {}
  render() {
    return (
      <SidebarContainer isOpen={this.props.isOpen}>
        <Icon onClick={this.props.toggle}>
          <CloseIcon />
        </Icon>
        {/* <SidebarMenu>
          <SidebarLink to="/">Cart</SidebarLink>
          <SidebarLink to="/">Non Veg</SidebarLink>
          <SidebarLink to="/">Full Menu</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/">Order Now</SidebarRoute>
        </SideBtnWrap> */}
      </SidebarContainer>
    );
  }
}
