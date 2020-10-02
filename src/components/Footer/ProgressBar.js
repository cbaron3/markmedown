import React, { Component } from "react";

import styled from "styled-components";

import UseAnimations from "react-useanimations";
import skipForward from "react-useanimations/lib/skipForward";
import skipBack from "react-useanimations/lib/skipBack";

import { Progress } from "semantic-ui-react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { goToPreviousLesson, goToNextLesson } from "../../State/Actions";
import { LESSONS } from "../../Lessons/";

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

class ProgressBar extends Component {
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
            onClick={() => {
              this.props.goToPreviousLesson();
            }}
          />
        </LeftIcon>

        <TitleContainer>
          <Progress
            value={this.props.lessonIndex + 1}
            total={LESSONS.length}
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
            onClick={() => {
              this.props.goToNextLesson();
            }}
          />
        </RightIcon>
      </Container>
    );
  }
}

// ProgressBar.propTypes = {
//   getRoutes: PropTypes.func.isRequired,
//   setBoundsError: PropTypes.func.isRequired,
//   loadRoutes: PropTypes.func.isRequired,
//   resetContactForm: PropTypes.func.isRequired,
//   setRouteError: PropTypes.func.isRequired,
// };

ProgressBar.propTypes = {
  goToPreviousLesson: PropTypes.func.isRequired,
  goToNextLesson: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  lessonIndex: state.md.lessonIndex,
});

export default connect(mapStateToProps, { goToPreviousLesson, goToNextLesson })(
  ProgressBar
);
