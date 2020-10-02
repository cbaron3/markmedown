// TODO: AFTER YOU HAVE COMPLETED A SECTION, TEXT AREA BECOMES READ-ONLY
//  PROMPT APPEARS FIRST TIME YOU GO BACK THAT SAYS: WATCH OUT, PREVIOUS ELEMENTS CAN'T BE MODIFIED. JUST FOR REVIEW
//  ADD LIKE A LOCK SYMBOL ON THE DIRECTORY HEADER
//  ALSO A PROGRESSION NOTICE AT THE END OF THE REQUIREMENTS
// * after completing this section, the editor will be put into read-only mode for lesson #1

// THIS IS TO PREVENT VERSION CLASHES. AKA IF YOU GO BACK TO LESSON #1 AND THEN PROCEED TO LESSON #2, EDITS IN #1 WONT BE in #2
import React, { Component } from "react";

import styled from "styled-components";

import AceEditor from "react-ace";

import { connect } from "react-redux";
import PropTypes from "prop-types";

import "ace-builds/src-noconflict/mode-markdown";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-textmate";
import "ace-builds/src-noconflict/theme-dracula";
import "ace-builds/src-noconflict/theme-nord_dark";

import { mdTextModified } from "../../State/Actions";

const Content = styled.div`
  border-color: #1c6ea4;
  border-style: solid;
  border-width: 4px 2px 4px 2px;
`;

const MiddleContent = styled(Content)`
  background: white;

  grid-column: 2 / 3;

  display: flex;
  flex-direction: column;
`;

const TopMiddleContent = styled.div`
  border-color: #1c6ea4;
  border-style: solid;
  border-width: 0px 0px 4px 0px;

  height: 30px;
`;

const EditorHeader = styled.p`
  padding-left: 1.4rem;
`;

const BottomMiddleContent = styled.div`
  flex: 1;
  padding: -10px;
`;

class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.onChange = this.onChange.bind(this);
    this.onLoad = this.onLoad.bind(this);
    this.onSelectionChange = this.onSelectionChange.bind(this);
    this.onCursorChange = this.onCursorChange.bind(this);
    this.onValidate = this.onValidate.bind(this);
  }

  onLoad() {
    console.log("i've loaded");
  }

  onChange(newValue) {
    console.log("change", newValue);
    this.setState({ value: newValue });

    this.props.mdTextModified(this.state);
  }

  onSelectionChange(newValue, event) {
    console.log("select-change", newValue);
    console.log("select-change-event", event);
  }

  onCursorChange(newValue, event) {
    console.log("cursor-change", newValue);
    console.log("cursor-change-event", event);
  }

  onValidate(annotations) {
    console.log("onValidate", annotations);
  }

  // TODO: On back button, need to rerender the contents inside of the editor
  render() {
    return (
      <MiddleContent>
        <TopMiddleContent>
          <EditorHeader>README.md</EditorHeader>
        </TopMiddleContent>
        <BottomMiddleContent>
          <AceEditor
            key={this.props.lessonIndex}
            placeholder={"Markdown text editor..."}
            defaultValue={this.props.activeText.value}
            height={"100%"}
            width={"100%"}
            name="my-editor"
            style={{
              lineHeight: "24px",
              fontFamily: "",
            }}
            setOptions={{ fontFamily: "" }}
            fontSize={24}
            showGutter={true}
            showPrintMargin={false}
            highlightActiveLine={true}
            wrapEnabled={true}
            mode="markdown"
            theme="textmate"
            onLoad={this.onLoad}
            onChange={this.onChange}
            onSelectionChange={this.onSelectionChange}
            onCursorChange={this.onCursorChange}
            onValidate={this.onValidate}
            editorProps={{ $blockScrolling: false }}
          />
        </BottomMiddleContent>
      </MiddleContent>
    );
  }
}

const mapStateToProps = (state) => ({
  activeText: state.md.activeText,
  lessonIndex: state.md.lessonIndex,
  editorText: state.md.editorText,
  previousText: state.md.previousText,
});

export default connect(mapStateToProps, { mdTextModified })(Editor);
