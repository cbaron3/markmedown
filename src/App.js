// TODO:
// 1. To highlight specific parts of text, use dimmers perhaps? for like tutorial style popups?

import React, { Component } from "react";
import styled from "styled-components";
import "./App.css";

import AceEditor from "react-ace";

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

const LeftContent = styled(Content)`
  background: white;
  grid-column: 1 / 2;

  font-size: 32px;
  font-weight: 900;
  padding-top: 1.4rem;
  padding-left: 1.4rem;
`;

const MiddleContent = styled(Content)`
  background: white;

  grid-column: 2 / 3;

  display: flex;
  flex-direction: column;
`;

const RightContent = styled(Content)`
  padding-left: 1.4rem;

  background: white;
  grid-column: 3 / 4;

  display: flex;
  flex-direction: column;

  overflow-y: scroll;
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
      <StyledContainer>
        <Header></Header>

        <Prompt></Prompt>

        <MiddleContent>
          <TopMiddleContent>
            <EditorHeader>README.md</EditorHeader>
          </TopMiddleContent>
          <BottomMiddleContent>
            <AceEditor
              placeholder={"Markdown text editor..."}
              defaultValue={""}
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
        <RightContent>
          <div>
            {
              unified()
                .use(parse)
                .use(remark2react)
                .processSync(this.state.value).result
            }
          </div>
        </RightContent>
        <Footer />
      </StyledContainer>
    );
  }
}

// function App() {
//   function sayHello() {
//     alert("Hello!");
//   }

//   let y = 0;
//   let direction = "^";

//   let g = 0;

//   return (
//     <div className="container-fluid w-75">
//       <div className=" border-bottom mt-5  pb-5 mx-auto row d-flex
//       align-items-center justify-content-center">
//         <img width={200} src={markdown}></img>
//         <h1 className="pb-2 ml-2">arkMeDown</h1>
//       </div>

//       <div className="border-bottom pb-5 w-auto">
//         <div className="row mx-auto">
//           <div className="mt-5 pb-5 d-flex row align-items-center
//           justify-content-center">
//             <p className="mx-auto">
//               Mark yourself down as a <b>markdown expert</b> with this
//               interactive tutorial that guides you through the steps of
//               building
//               a high-quality README.md for your next project!
//             </p>
//             <dl class="mt-5 d-flex col align-items-center
//             justify-content-center">
//               <dt>Introduction</dt>
//               <dd className="mx-auto">-</dd>
//               <dt>Formatting</dt>
//               <dd className="mx-auto">-</dd>
//               <dt>Headers</dt>
//               <dd className="mx-auto">-</dd>
//               <dt>Links</dt>
//               <dd className="mx-auto">-</dd>
//               <dt>Images</dt>
//               <dd className="mx-auto">-</dd>
//               <dt>Quotes & Code</dt>
//               <dd className="mx-auto">-</dd>
//               <dt>Lists</dt>
//             </dl>
//           </div>
//         </div>

//         <div className="mx-auto w-auto ">
//           {/* <dl class="col">
//             <dt>Introduction</dt>
//             <dd className="mx-auto">-</dd>
//             <dt>Introduction</dt>
//             <dd className="mx-auto">-</dd>
//             <dt>Introduction</dt>
//             <dd className="mx-auto">-</dd>
//             <dt>Introduction</dt>
//             <dd className="mx-auto">-</dd>
//             <dt>Introduction</dt>
//           </dl> */}
//         </div>

//         <Sketch
//           mouseClicked={(p5) => {
//             // TODO: FIX TO TRACK IF MOUSE PRESSED A CIRCLE
//             let d = p5.dist(p5.mouseX, p5.mouseY, 200, 200);
//             console.log(d);
//             if (d < 200) {
//               // Pick new random color values
//               g = 100;
//             }
//           }}
//           setup={(p5, parentRef) => {
//             p5.createCanvas(200, 200).parent(parentRef);
//           }}
//           draw={(p5) => {
//             p5.background(g);
//             p5.fill(255, y * 1.3, 0);
//             p5.ellipse(p5.width / 2, y, 50);
//             if (y > p5.height) direction = "";
//             if (y < 0) {
//               direction = "^";
//             }
//             if (direction === "^") y += 8;
//             else y -= 4;
//           }}
//         />

//         {/* <div className="d-flex align-items-center
//         justify-content-center">
//           <button type="button" className="btn btn-primary w-50">
//             Primary
//           </button>
//         </div> */}
//       </div>
//     </div>
//   );
// }

// export default App;
