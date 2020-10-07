import React, { Component } from "react";
import styled from "styled-components";
import "./App.css";

import AceEditor from "react-ace";

import { Provider } from "react-redux";

// Redux global data store
import Store from "./State/Store";

import "ace-builds/src-noconflict/mode-markdown";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-textmate";
import "ace-builds/src-noconflict/theme-dracula";
import "ace-builds/src-noconflict/theme-nord_dark";

import unified from "unified";
import parse from "remark-parse";
import remark2react from "remark-react";

import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Prompt from "./Components/Prompt/Prompt";
import Editor from "./Components/Editor/Editor";
import MarkdownViewer from "./Components/Viewers/MarkdownViewer";

const StyledContainer = styled.div`
  font-family: "Montserrat", sans-serif;
  display: grid;
  height: 100vh;
  grid-template: 50px 1fr 50px / 1fr 1fr 1fr;
`;

const Content = styled.div`
  border-color: #1c6ea4;
  border-style: solid;
  border-width: 4px 2px 4px 2px;
`;

// # My Example
// this is my example MARKDOWN page

// ## Hello this is my example text :)
// we need to be able to select appropriate fonts for
// this please!!

// Also maybe not allow side scrolling?
// IDK! make it an option on the bottom!

// options on the bottom:
//     font size
//     font type
//     theme
//     allow horizontal scroll

//     other settings like show line numbers

// ### Hello

// 1. This is a list
// 2. Second list element

//
// # Hello this is a header
//
// Need file explorer on the left side for when images get added
//
//
// ### Capture CTRL+s cause programmers love that

// REMOVE HOME SCREEN, IT WILL JUST BE A POP UP ON THE WEBSITE BEFORE STARTING

export default class App extends Component {
  onLoad() {
    console.log("i've loaded");
  }

  onChange(newValue) {
    console.log("change", newValue);
    this.setState({ value: newValue });
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

  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.onChange = this.onChange.bind(this);
    this.onLoad = this.onLoad.bind(this);
    this.onSelectionChange = this.onSelectionChange.bind(this);
    this.onCursorChange = this.onCursorChange.bind(this);
    this.onValidate = this.onValidate.bind(this);
  }

  render() {
    return (
      <Provider store={Store}>
        <StyledContainer>
          <Header></Header>

          <Prompt></Prompt>

          <Editor />

          <MarkdownViewer />
          <Footer />
        </StyledContainer>
      </Provider>
    );
  }
}
