// TODO:
//      1. Create issue on react-useanimations to see if i can stop animation from playing
//      2. Push this only to feature/footer
import React, { Component } from "react";

import styled from "styled-components";

import ProgressBar from "./ProgressBar";
import GithubLink from "./GithubLink";

const Container = styled.header`
  background: #494d5f;

  display: grid;
  grid-template: 50px / 1fr 1fr 1fr;

  color: white;
  font-size: 13px;
  font-weight: 300;
  font-style: italic;
  text-align: center;
  grid-column: 1 / 4;
`;

export default class Header extends Component {
  render() {
    return (
      <Container>
        <ProgressBar />
        <GithubLink />
      </Container>
    );
  }
}
