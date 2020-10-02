import React, { Component } from "react";
import styled from "styled-components";

import unified from "unified";
import parse from "remark-parse";
import remark2react from "remark-react";

import { connect } from "react-redux";
import PropTypes from "prop-types";

const Content = styled.div`
  border-color: #1c6ea4;
  border-style: solid;
  border-width: 4px 2px 4px 2px;
`;

const RightContent = styled(Content)`
  padding-left: 1.4rem;

  background: white;
  grid-column: 3 / 4;

  display: flex;
  flex-direction: column;

  overflow-y: scroll;
`;

class MarkdownViewer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("VIEWER", this.props.activeText.value);
    return (
      <RightContent>
        <div key={this.props.activeText.value}>
          {
            unified()
              .use(parse)
              .use(remark2react)
              .processSync(this.props.activeText.value).result
          }
        </div>
      </RightContent>
    );
  }
}

const mapStateToProps = (state) => ({
  activeText: state.md.activeText,
});

export default connect(mapStateToProps, null)(MarkdownViewer);
