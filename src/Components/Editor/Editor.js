import React, { Component } from "react";

import styled from "styled-components";

import AceEditor from "react-ace";

import { connect } from "react-redux";
import PropTypes from "prop-types";

import { Icon, List } from "semantic-ui-react";

import "ace-builds/src-noconflict/mode-markdown";

import "ace-builds/src-noconflict/theme-chaos";
import "ace-builds/src-noconflict/theme-ambiance";
import "ace-builds/src-noconflict/theme-chrome";
import "ace-builds/src-noconflict/theme-clouds";
import "ace-builds/src-noconflict/theme-clouds_midnight";
import "ace-builds/src-noconflict/theme-cobalt";
import "ace-builds/src-noconflict/theme-crimson_editor";
import "ace-builds/src-noconflict/theme-dawn";
import "ace-builds/src-noconflict/theme-dracula";
import "ace-builds/src-noconflict/theme-dreamweaver";
import "ace-builds/src-noconflict/theme-eclipse";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-gob";
import "ace-builds/src-noconflict/theme-gruvbox";
import "ace-builds/src-noconflict/theme-idle_fingers";
import "ace-builds/src-noconflict/theme-iplastic";
import "ace-builds/src-noconflict/theme-katzenmilch";
import "ace-builds/src-noconflict/theme-kr_theme";
import "ace-builds/src-noconflict/theme-kuroir";
import "ace-builds/src-noconflict/theme-merbivore";
import "ace-builds/src-noconflict/theme-merbivore_soft";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-mono_industrial";
import "ace-builds/src-noconflict/theme-nord_dark";
import "ace-builds/src-noconflict/theme-pastel_on_dark";
import "ace-builds/src-noconflict/theme-solarized_dark";
import "ace-builds/src-noconflict/theme-solarized_light";
import "ace-builds/src-noconflict/theme-sqlserver";
import "ace-builds/src-noconflict/theme-terminal";
import "ace-builds/src-noconflict/theme-textmate";
import "ace-builds/src-noconflict/theme-tomorrow";
import "ace-builds/src-noconflict/theme-tomorrow_night";
import "ace-builds/src-noconflict/theme-tomorrow_night_blue";
import "ace-builds/src-noconflict/theme-tomorrow_night_bright";
import "ace-builds/src-noconflict/theme-tomorrow_night_eighties";
import "ace-builds/src-noconflict/theme-twilight";
import "ace-builds/src-noconflict/theme-vibrant_ink";
import "ace-builds/src-noconflict/theme-xcode";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-textmate";
import "ace-builds/src-noconflict/theme-dracula";
import "ace-builds/src-noconflict/theme-nord_dark";

import { mdTextModified } from "../../State/Actions";

const Content = styled.div``;

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
  background-color: #494d5f;

  display: grid;
  grid-template: 30px / 45px 1fr;
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
  background-color: #494d5f;
  display: flex;

  display: grid;
  grid-template: 30px / 1fr 1fr 1fr;
`;

const File = styled.div`
  /* background-color: #969aab; */
  background-color: white;
`;

const Directory = styled.div`
  background-color: #494d5f;

  width: 200px;
`;

class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      open: false,
      folder: "folder outline",
      fileFolder: "folder open outline",
      files: [null, null, null],
    };

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
            name={this.state.folder}
            color="white"
            inverted
            onClick={(e) => {
              this.setState((prevState) => ({ open: !prevState.open }));

              if (this.state.folder === "folder outline") {
                this.setState((prevState) => ({
                  folder: "folder open outline",
                }));
              } else {
                this.setState((prevState) => ({
                  folder: "folder outline",
                }));
              }
            }}
          />
          <FileBar>
            {this.state.files}
            {/* <File>
              <Icon name="close" />
              <span>README</span>
            </File> */}
            {/* <File>
              <Icon name="close" />
              <span>README</span>
            </File> */}
            {/* <File>
              <Icon name="close" />
              <span>README</span>
            </File> */}
          </FileBar>
        </TopMiddleContent>
        <BottomMiddleContent>
          {this.state.open ? (
            <Directory>
              <List>
                <List.Item>
                  <List.Icon name="folder" />
                  <List.Content>
                    <List.Header>files</List.Header>
                    <List.List>
                      <List.Item
                        style={{ color: "white" }}
                        onClick={(e) => {
                          let newFiles = this.state.files;

                          if (newFiles[0] === null) {
                            newFiles[0] = (
                              <File>
                                <Icon name="close" />
                                <span>README.md</span>
                              </File>
                            );
                          }
                          // TODO: Check if already exists
                          this.setState((prevState) => ({
                            files: newFiles,
                          }));
                        }}
                      >
                        <List.Icon name="file" />
                        <List.Content>
                          <List.Header style={{ color: "white" }}>
                            README.md
                          </List.Header>
                          <List.Description></List.Description>
                        </List.Content>
                      </List.Item>
                      <List.Item
                        style={{ color: "white" }}
                        onClick={(e) => {
                          let newFiles = this.state.files;

                          if (newFiles[1] === null) {
                            newFiles[1] = (
                              <File>
                                <Icon name="close" />
                                <span>logo.png</span>
                              </File>
                            );
                          }
                          // TODO: Check if already exists
                          this.setState((prevState) => ({
                            files: newFiles,
                          }));
                        }}
                      >
                        <List.Icon name="file" />
                        <List.Content>
                          <List.Header style={{ color: "white" }}>
                            logo.png
                          </List.Header>
                          <List.Description></List.Description>
                        </List.Content>
                      </List.Item>
                      <List.Item
                        style={{ color: "white" }}
                        onClick={(e) => {
                          let newFiles = this.state.files;

                          if (newFiles[2] === null) {
                            newFiles[2] = (
                              <File>
                                <Icon name="close" />
                                <span>example.png</span>
                              </File>
                            );
                          }
                          // TODO: Check if already exists
                          this.setState((prevState) => ({
                            files: newFiles,
                          }));
                        }}
                      >
                        <List.Icon name="file" />
                        <List.Content>
                          <List.Header style={{ color: "white" }}>
                            example.png
                          </List.Header>
                          <List.Description></List.Description>
                        </List.Content>
                      </List.Item>
                    </List.List>
                  </List.Content>
                </List.Item>
              </List>
            </Directory>
          ) : null}
          <AceEditor
            key={this.props.lessonIndex}
            placeholder={""}
            defaultValue={this.props.activeText.value}
            height={"100%"}
            width={"100%"}
            name="my-editor"
            cursorStart={-1}
            // style={{
            //   lineHeight: "24px",
            //   fontFamily: "",
            // }}
            setOptions={{
              fontFamily: "",
              highlightGutterLine: false,
              cursorStyle: "slim",
            }}
            fontSize={24}
            showGutter={true}
            showPrintMargin={false}
            highlightActiveLine={false}
            wrapEnabled={true}
            mode="markdown"
            theme={this.props.theme}
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
  theme: state.md.theme,
});

export default connect(mapStateToProps, { mdTextModified })(Editor);
