import React, { Component } from "react";

import styled from "styled-components";

import UseAnimations from "react-useanimations";
import skipForward from "react-useanimations/lib/skipForward";
import skipBack from "react-useanimations/lib/skipBack";

const title = "Progress Bar";
const iconSize = 32;
const iconSizeOther = 26;
const iconColor = "white";

const TitleContainer = styled.div`
  text-align: center;

  font-size: 18px;
  font-weight: lighter;
`;

const Container = styled.div`
  grid-column: 2 / 3;
  display: flex;
  flex-direction: row;
  display: flex;
  align-items: center;
`;

export default class ProgressBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: false,
    };
  }

  render() {
    return (
      <Container>
        <UseAnimations
          animation={skipBack}
          size={iconSizeOther}
          strokeColor={iconColor}
          wrapperStyle={{ paddingRight: "2.5rem" }}
        />

        <TitleContainer>{title}</TitleContainer>

        <UseAnimations
          animation={skipForward}
          size={iconSize}
          strokeColor={iconColor}
          wrapperStyle={{ paddingLeft: "2.5rem", opacity: "50%" }}
          reverse={true}
        />
      </Container>
    );
  }
}
