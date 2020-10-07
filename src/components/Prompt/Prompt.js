import React, { Component } from "react";
import "./Prompt.css";

import styled from "styled-components";

import unified from "unified";
import parse from "remark-parse";
import remark2react from "remark-react";

import AceEditor from "react-ace";

import { Icon, Label } from "semantic-ui-react";

import UseAnimations from "react-useanimations";
import checkBox from "react-useanimations/lib/checkBox";

import { lessonReqsMet, lessonReqsNotMet } from "../../State/Actions";

import "ace-builds/src-noconflict/mode-markdown";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-textmate";
import "ace-builds/src-noconflict/theme-dracula";
import "ace-builds/src-noconflict/theme-nord_dark";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { LESSONS } from "../../Lessons/";

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

const RequirementsList = styled.div`
  margin-top: 10px;
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
      <MDPreviewer className="noselection" key={this.props.text}>
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

// Props required:
// 1. Title
// 2. Text
// 3. List of requirements
class Prompt extends Component {
  // Needs to render LESSONS[index][TITLE], LESSONS[index][TEXT], LESSONS[index][REQUIREMENTS]
  render() {
    let headerExample = "# Example Header\nText\nHello";
    let listExample = "1. This element\n2. That Element \n\n\thello";

    let myContents = [];
    LESSONS[this.props.lessonIndex].text.forEach((t) => {
      if (t.type === "REGULAR") {
        myContents.push(<Paragraph>{t.contents}</Paragraph>);
      } else if (t.type === "MD") {
        console.log(t.contents);
        myContents.push(<OtherPreviewer text={t.contents} />);
      }
    });

    // TODO: Track if each element is met. If yes, set requirements met to true with action
    let myRequirements = [];
    let reqsMet = true;
    LESSONS[this.props.lessonIndex].requirements.forEach((t) => {
      // If verifier returns true with text in the editor, then add CHECK to the name
      let name = "circle outline";
      let color = "red";

      if (t.verifier(this.props.activeText.value)) {
        name = "circle outline check";
        color = "green";
      } else {
        reqsMet = false;
      }

      let content = (
        <div>
          <Icon color={color} inverted name={name} size={iconSize} />
          <span>{t.instruction}</span>
        </div>
      );
      myRequirements.push(content);
    });

    if (reqsMet === true) {
      this.props.lessonReqsMet();
    } else {
      this.props.lessonReqsNotMet();
    }

    return (
      <Container>
        <Instructions>
          <Label basic circular inverted color="black" size="medium">
            #{this.props.lessonIndex + 1}
          </Label>
          <Heading>{LESSONS[this.props.lessonIndex].title}</Heading>
        </Instructions>

        {/* for element in text, if type is REGULAR, use paragraph. if type is MD, use markdown previewer*/}

        {myContents}

        <Requirements>
          <Icon name={iconName} size={iconSize} />{" "}
          <Heading>Requirements</Heading>
        </Requirements>

        <RequirementsList>{myRequirements}</RequirementsList>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  lessonIndex: state.md.lessonIndex,
  activeText: state.md.activeText,
});

export default connect(mapStateToProps, { lessonReqsMet, lessonReqsNotMet })(
  Prompt
);
