import React, { Component } from "react";

import styled from "styled-components";

import whiteLogo from "../../markdown-icon-white.svg";
import blackLogo from "../../markdown-icon-black.svg";

const header = "arkMeDown";
const iconHeight = "32px";
const iconWidth = "50px";

const Container = styled.header`
  grid-column: 1 / 2;
  text-align: left;
  display: flex;
  align-items: center;
  padding-bottom: 5px;
`;

const Icon = styled.img`
  margin-right: 3px;
  padding-bottom: 3px;
`;

const HeaderText = styled.h1`
  font-size: 26px;
`;

export default class Logo extends Component {
  render() {
    return (
      <Container>
        <Icon height={iconHeight} width={iconWidth} src={whiteLogo} />
        <HeaderText>{header}</HeaderText>
      </Container>
    );
  }
}
