import React, { Component } from "react";
import styled from "styled-components";

import unified from "unified";
import parse from "remark-parse";
import remark2react from "remark-react";

import {ExampleIntroduction} from "../../Lessons/Examples/Introduction"

import { connect } from "react-redux";
import PropTypes from "prop-types";

import { Icon } from "semantic-ui-react";


const Content = styled.div``;

const RightContent = styled(Content)`
  

  background: white;
  grid-column: 3 / 4;

  display: flex;
  flex-direction: column;

  overflow-y: scroll;
`;

const TitleBar = styled.div`
  height: 30px;
  background-color: #f8f8ff;

  display: grid;
  grid-template: 50px / 50px 1fr 50px;
  
`;

const TextPreview = styled.div`
display: flex;
align-items: center;
height: inherit;
margin-left: auto;
margin-right: auto;
grid-column: 2 / 3;`

const SwapIcon = styled(Icon)`grid-column: 3 / 4;
`

const MarkdownDiv = styled.div`
padding-left: 1.4rem;
word-wrap: break-word;
`;

// Use this for when swappning between expected output and actual output

// TODO: Swap between example and actual when:
  // 1. button is pushed
    // Add prompt on first click of swap button
  // 2. text is entered into text editor
class MarkdownViewer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("VIEWER", this.props.activeText.value);
    return (
      <RightContent>
        <TitleBar>
          <TextPreview><h3>README.md</h3></TextPreview>
        <SwapIcon
            name="exchange"
            color="black"
            inverted
          />
        </TitleBar>
       
        <MarkdownDiv key={this.props.activeText.value}>
          {
            unified()
              .use(parse)
              .use(remark2react)
              .processSync(this.props.activeText.value).result
          }
        </MarkdownDiv>
        {/* <MarkdownDiv key={this.props.activeText.value}>
          {
            unified()
              .use(parse)
              .use(remark2react)
              .processSync(ExampleIntroduction).result
          }
        </MarkdownDiv> */}
      </RightContent>
    );
  }
}

const mapStateToProps = (state) => ({
  activeText: state.md.activeText,
});

export default connect(mapStateToProps, null)(MarkdownViewer);
