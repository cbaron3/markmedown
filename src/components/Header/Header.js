import React, { Component } from "react";

import styled from "styled-components";

import whiteLogo from "../../markdown-icon-white.svg";
import blackLogo from "../../markdown-icon-black.svg";

import UseAnimations from "react-useanimations";
import settings from "react-useanimations/lib/settings";

const StyledHeader = styled.header`
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

// Move flex stuff into a div within the container
const LogoContainer = styled.div`
  grid-column: 1 / 2;
  text-align: left;
  display: flex;
  align-items: center;
  padding-bottom: 5px;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  grid-column: 2 / 3;
  text-align: center;

  font-size: 18px;
  font-weight: lighter;
`;

const SettingsContainer = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  padding-right: 1.4rem;
  padding-top: 9px;
  grid-column: 3 / 4;
`;

const LogoImg = styled.img`
  margin-right: 3px;
  padding-bottom: 3px;
`;

const LogoText = styled.text`
  font-size: 26px;
`;

// HAVE LEARN TO BUILD README TEXT DISSAPPEAR AFTER CERTAIN WIDTH
// OR REDUCE FONT SIZE?
export default class Header extends Component {
  render() {
    return (
      <StyledHeader>
        <LogoContainer>
          <LogoImg height={"32"} width={"50"} src={whiteLogo} />
          <LogoText>arkMeDown</LogoText>
        </LogoContainer>
        <TitleContainer>Learn to build your own README.md!</TitleContainer>
        <SettingsContainer>
          <UseAnimations animation={settings} size={32} strokeColor={"white"} />
        </SettingsContainer>
      </StyledHeader>
    );
  }
}
