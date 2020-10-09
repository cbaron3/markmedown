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
