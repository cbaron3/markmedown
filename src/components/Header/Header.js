// TODO:
//      1. Comments
//      2. Unit tests
//      2. Make title text responsive cause it dominates the header on small width screens
//      2. Have settings icon color, text color,
//          and markdown logo color (icon-black, icon-white) be configured for dark and light mode
//      3. Settings menu on settings icon
//      4. CSS clean up
//      5. Create a global styles config for colors, fonts
//      6. Remove magic numbers
//      7. What about extracting each feature settings into its own file per folder. Like a Header/Settings.js for strings and css items
//      8. Maybe try and find some exciting text animations for the header?

import React, { Component } from "react";

import styled from "styled-components";

import Logo from "./Logo";
import Title from "./Title";
import Settings from "./Settings";

const Container = styled.header`
  background: #494d5f;
  color: white;
  font-size: 30px;
  font-weight: 600;

  padding-top: 5px;
  padding-left: 1.4rem;
  padding-right: 1.4rem;

  grid-column: 1 / 4;

  display: grid;
  grid-template: 50px / 1fr auto 1fr;
`;

export default class Header extends Component {
  render() {
    return (
      <Container>
        <Logo />
        <Title />
        <Settings />
      </Container>
    );
  }
}
