import React, { Component } from "react";

import styled from "styled-components";

import UseAnimations from "react-useanimations";
import skipForward from "react-useanimations/lib/skipForward";
import skipBack from "react-useanimations/lib/skipBack";

import { Progress } from "semantic-ui-react";

const iconSize = 26;
const iconColor = "white";
const progress = 3;
const total = 12;
const barColor = "red";
const barSize = "large";
const nextOpacity = { opacity: "75%" };

const TitleContainer = styled.div`
  font-size: 18px;
  font-weight: lighter;
  grid-column: 2 / 3;
  width: 75%;
  position: relative;
  padding-top: 5px;
  left: 12.25%;
`;

const Container = styled.div`
  grid-column: 2 / 3;
  grid-template: 50px / 25px 1fr 25px;
  text-align: center;
  display: grid;
  overflow: hidden;
  /* display: flex;
  flex-direction: row;
  display: flex;
  align-items: center; */
`;

const IconContainer = styled.div``;

const LeftIcon = styled(IconContainer)`
  padding-top: 12.25px;
  grid-column: 1 / 2;
`;

const RightIcon = styled(IconContainer)`
  padding-top: 12.25px;
  grid-column: 3 / 4;
  transform: rotate(180deg);
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
        <LeftIcon>
          <UseAnimations
            animation={skipBack}
            size={iconSize}
            strokeColor={iconColor}
          />
        </LeftIcon>

        <TitleContainer>
          <Progress
            value={progress.toString()}
            total={total.toString()}
            progress="ratio"
            inverted
            color={barColor}
            size={barSize}
          />
        </TitleContainer>

        <RightIcon>
          <UseAnimations
            animation={skipBack}
            size={iconSize}
            strokeColor={iconColor}
            wrapperStyle={nextOpacity}
          />
        </RightIcon>
      </Container>
    );
  }
}
