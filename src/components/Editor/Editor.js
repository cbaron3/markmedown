import React, { Component } from "react";

import styled from "styled-components";

import AceEditor from "react-ace";

import { connect } from "react-redux";
import PropTypes from "prop-types";

import { Icon } from "semantic-ui-react";

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

// Convert this into a grid of 4 elements
// 1. directory icon
// 2. spot for readme file
// 3. spot for logo preview
// 4. spot for project preview
const TopMiddleContent = styled.div`
  border-color: #1c6ea4;
  border-style: solid;
  border-width: 0px 0px 4px 0px;

  display: grid;
  grid-template: 30px / 30px 1fr;
`;

const BottomMiddleContent = styled.div`
  flex: 1;
  padding: -10px;
  display: flex;
`;

const DirIcon = styled(Icon)`
  grid-row: 1 / 2;
`;

const FileBar = styled.div`
  background-color: yellow;

  display: flex;

  display: grid;
  grid-template: 30px / 1fr 1fr 1fr;
`;

const File = styled.div``;

class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "", open: false };

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

  render() {
    return (
      <MiddleContent>
        <TopMiddleContent>
          <DirIcon
            name="folder"
            onClick={(e) => {
              this.setState((prevState) => ({ open: !prevState.open }));
            }}
          />
          <FileBar>
            <File style={{ backgroundColor: "red" }}>
              <Icon name="close" />
              <span>README</span>
            </File>
            <File style={{ backgroundColor: "blue" }}>
              <Icon name="close" />
              <span>README</span>
            </File>
            <File style={{ backgroundColor: "green" }}>
              <Icon name="close" />
              <span>README</span>
            </File>
          </FileBar>
        </TopMiddleContent>
        <BottomMiddleContent>
          {this.state.open ? <div>DIRECTORY STRUCTURE</div> : null}
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
