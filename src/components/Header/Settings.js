import React, { Component } from "react";

import styled from "styled-components";

import UseAnimations from "react-useanimations";
import settings from "react-useanimations/lib/settings";

const text = "Settings";
const iconSize = 32;
const iconColor = "white";

const Container = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  padding-right: 1.4rem;
  padding-top: 9px;
  grid-column: 3 / 4;
`;

const Text = styled.span`
  font-size: 18px;
  font-weight: lighter;
  padding-left: 5px;
`;

export default class Settings extends Component {
  render() {
    return (
      <Container>
        <UseAnimations
          animation={settings}
          size={iconSize}
          strokeColor={iconColor}
        />
        <Text>{text}</Text>
      </Container>
    );
  }
}
