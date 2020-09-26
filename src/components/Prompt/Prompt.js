import React, { Component } from "react";
import "./Prompt.css";

import styled from "styled-components";

import unified from "unified";
import parse from "remark-parse";
import remark2react from "remark-react";

import AceEditor from "react-ace";

import { Icon, Label } from "semantic-ui-react";

import "ace-builds/src-noconflict/mode-markdown";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-textmate";
import "ace-builds/src-noconflict/theme-dracula";
import "ace-builds/src-noconflict/theme-nord_dark";

const number = "0";
const header = "Introduction";

// Swap between outline and no outline for dark mode?
const iconName = "check circle outline";
const iconSize = "large";

const Container = styled.div`
  background: white;
  grid-column: 1 / 2;

  padding-top: 11px;

  padding-left: 1.4rem;
  padding-right: 1.4rem;

  border-color: #1c6ea4;
  border-style: solid;
  border-width: 4px 2px 4px 4px;

  width: 33.33333333333vw;

  overflow-y: auto;
  overflow-x: hidden;
`;

const Heading = styled.text`
  font-size: 22px;
  font-weight: 900;
`;

const Paragraph = styled.p`
  margin-top: 0.5rem;

  font-size: 12px;
  font-weight: 500;

  margin-bottom: 0.5rem;
`;

const MDPreviewer = styled.div`
  text-align: center;
  padding-bottom: 1rem;
`;

const Instructions = styled.div`
  padding-top: 1.2rem;

  display: flex;

  align-items: center;
`;

const Requirements = styled(Instructions)`
  border-top: 2px solid black;
`;

const StyledIcon = styled(Icon)`
  font-family: "Montserrat", sans-serif;
`;

class PreviewSnippet extends Component {
  render() {
    return (
      <MDPreviewer>
        {unified().use(parse).use(remark2react).processSync("Test").result}
      </MDPreviewer>
    );
  }
}

class OtherPreviewer extends Component {
  render() {
    return (
      <MDPreviewer className="noselection">
        <AceEditor
          defaultValue={this.props.text}
          maxLines={this.props.text.split(/\r\n|\r|\n/).length}
          name="my-editor"
          style={{
            lineHeight: "12px",
            fontFamily: "",
          }}
          readOnly={true}
          setOptions={{ fontFamily: "" }}
          fontSize={12}
          showGutter={false}
          showPrintMargin={false}
          highlightActiveLine={false}
          wrapEnabled={true}
          focus={false}
          mode="markdown"
          theme="textmate"
          onLoad={this.onLoad}
          onChange={this.onChange}
          onSelectionChange={this.onSelectionChange}
          onCursorChange={this.onCursorChange}
          onValidate={this.onValidate}
          editorProps={{ $blockScrolling: false }}
          setOptions={{ highlightGutterLine: false }}
        />
      </MDPreviewer>
    );
  }
}

export default class Prompt extends Component {
  render() {
    let headerExample = "# Example Header\nText\nHello";
    let listExample = "1. This element\n2. That Element \n\n\thello";
    return (
      <Container>
        <Instructions>
          <Label basic circular inverted color="black" size="medium">
            #1
          </Label>
          <Heading>{header}</Heading>
        </Instructions>

        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget
          quam elit. Maecenas euismod lorem ut tortor bibendum interdum. Nunc
          luctus dui eleifend elit sollicitudin eleifend ac eget magna. Praesent
          venenatis urna ac nunc vulputate efficitur. Proin sed lorem sit amet
          mauris viverra sodales vel sit amet nunc. Pellentesque finibus, nulla
          quis elementum interdum, lectus urna auctor dolor, at pretium risus
          enim eu urna. Etiam nec ex ac nulla ultrices tristique. Proin accumsan
          suscipit mauris, eu fermentum turpis luctus at. Fusce vel venenatis
          mauris. Sed ac pulvinar nunc.
        </Paragraph>

        <OtherPreviewer text={headerExample} />

        <Requirements>
          <Icon name={iconName} size={iconSize} />{" "}
          <Heading>Requirements</Heading>
        </Requirements>
      </Container>
    );
  }
}
