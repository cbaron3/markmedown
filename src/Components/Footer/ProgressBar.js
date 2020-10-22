import React, { Component } from "react";

import styled from "styled-components";

import UseAnimations from "react-useanimations";
import skipForward from "react-useanimations/lib/skipForward";
import skipBack from "react-useanimations/lib/skipBack";

import { Button, Icon } from "semantic-ui-react";

import { Progress } from "semantic-ui-react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { goToPreviousLesson, goToNextLesson } from "../../State/Actions";
import { LESSONS } from "../../Lessons/Content";

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
  grid-template: 50px / 50px 1fr 50px;
  text-align: center;
  display: grid;
  overflow: hidden;
  /* display: flex;
  flex-direction: row;
  display: flex;
  align-items: center; */
`;

const IconContainer = styled.div`
  display: flex;
  align-items: row;
  justify-content: center;
  height: 40px;
  margin-top: 5px;
`;

const LeftIcon = styled(IconContainer)`
  grid-column: 1 / 2;
`;

const RightIcon = styled(IconContainer)`
  grid-column: 3 / 4;
  opacity: 50%;
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
          <Button
            inverted
            icon
            onClick={() => {
              this.props.goToPreviousLesson();
            }}
          >
            <Icon name="left arrow" />
          </Button>
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

        <RightIcon
          style={
            this.props.reqsMet === true
              ? { opacity: "100%" }
              : { opacity: "50%" }
          }
        >
          <Button
            icon
            inverted
            onClick={(e) => {
              if (this.props.reqsMet === true) {
                this.props.goToNextLesson();
              }
            }}
          >
            <Icon name="right arrow" />
          </Button>
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
  reqsMet: state.md.reqsMet,
});

export default connect(mapStateToProps, { goToPreviousLesson, goToNextLesson })(
  ProgressBar
);
