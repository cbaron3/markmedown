// TODO:
//      1. Make title text responsive cause it dominates the header on small width screens
//      2. Have settings icon color, text color,
//          and markdown logo color (icon-black, icon-white) be configured for dark and light mode
//      3. Settings menu on settings icon
//      4. CSS clean up
//      5. Create a global styles config for colors, fonts
//      6. Remove magic numbers

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

const SettingsText = styled.span`
  font-size: 18px;
  font-weight: lighter;
  padding-left: 5px;
`;

const LogoImg = styled.img`
  margin-right: 3px;
  padding-bottom: 3px;
`;

const LogoText = styled.text`
  font-size: 26px;
`;

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
          <SettingsText>Settings</SettingsText>
        </SettingsContainer>
      </StyledHeader>
    );
  }
}
