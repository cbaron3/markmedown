import React, { Component } from "react";

import styled from "styled-components";

const title = "Learn to build your own README.md!";

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  grid-column: 2 / 3;
  text-align: center;

  font-size: 18px;
  font-weight: lighter;
`;

export default class Title extends Component {
  render() {
    return <TitleContainer>{title}</TitleContainer>;
  }
}
