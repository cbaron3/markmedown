import React, { Component } from "react";
import styled from "styled-components";
import "./App.css";

import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-markdown";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-textmate";

import unified from "unified";
import parse from "remark-parse";
import remark2react from "remark-react";

const StyledContainer = styled.div`
  font-family: "Montserrat", sans-serif;
  display: grid;
  height: 100vh;
  grid-template: 50px 1fr 50px / 1fr 1fr 1fr;
`;

const StyledHeader = styled.header`
  background: lightpink;
  padding: 1rem;
  text-align: left;
  grid-column: 1 / 4;
`;

const StyledFooter = styled.header`
  background: wheat;
  padding: 1rem;
  text-align: center;
  grid-column: 1 / 4;
`;

const Content = styled.div``;

const LeftContent = styled(Content)`
  padding: 1rem;
  background: lightblue;
  grid-column: 1 / 2;
`;

const MiddleContent = styled(Content)`
  background: red;
  grid-column: 2 / 3;
`;

const RightContent = styled(Content)`
  background: grey;
  grid-column: 3 / 4;
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

// ### Capture CTRL+s cause programmers love that

// REMOVE HOME SCREEN, IT WILL JUST BE A POP UP ON THE WEBSITE BEFORE STARTING

export default class App extends Component {
  render() {
    return (
      <StyledContainer>
        <StyledHeader>Header.com</StyledHeader>
        <LeftContent>Left contents</LeftContent>
        <MiddleContent>
          <AceEditor
            style={{
              lineHeight: "24px",
              fontFamily: "",
            }}
            fontSize={24}
            height={"100%"}
            width={"100%"}
            showPrintMargin={false}
            mode="markdown"
            theme="textmate"
            name="my-editor"
            editorProps={{ $blockScrolling: true }}
          />
        </MiddleContent>
        <RightContent>
          {/* FILE NEEDS A HEADER WITH README.md */}
          <div id="preview">
            {
              unified()
                .use(parse)
                .use(remark2react)
                .processSync("# Hello World \n # Hello").result
            }
          </div>
        </RightContent>
        <StyledFooter>Footer Content — Header.com 2020</StyledFooter>
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
//       <div className=" border-bottom mt-5  pb-5 mx-auto row d-flex align-items-center justify-content-center">
//         <img width={200} src={markdown}></img>
//         <h1 className="pb-2 ml-2">arkMeDown</h1>
//       </div>

//       <div className="border-bottom pb-5 w-auto">
//         <div className="row mx-auto">
//           <div className="mt-5 pb-5 d-flex row align-items-center justify-content-center">
//             <p className="mx-auto">
//               Mark yourself down as a <b>markdown expert</b> with this
//               interactive tutorial that guides you through the steps of building
//               a high-quality README.md for your next project!
//             </p>
//             <dl class="mt-5 d-flex col align-items-center justify-content-center">
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

//         {/* <div className="d-flex align-items-center justify-content-center">
//           <button type="button" className="btn btn-primary w-50">
//             Primary
//           </button>
//         </div> */}
//       </div>
//     </div>
//   );
// }

// export default App;
