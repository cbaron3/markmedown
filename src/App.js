import React from "react";
import "./App.css";

import Sketch from "react-p5";

import markdown from "./markdown-mark.svg";
import file from "./output-onlinepngtools.png";

function App() {
  function sayHello() {
    alert("Hello!");
  }

  let y = 0;
  let direction = "^";

  let g = 0;

  return (
    <div className="container-fluid w-75">
      <div className=" border-bottom mt-5  pb-5 mx-auto row d-flex align-items-center justify-content-center">
        <img width={200} src={markdown}></img>
        <h1 className="pb-2 ml-2">arkMeDown</h1>
      </div>

      <div className="border-bottom pb-5 w-auto">
        <div className="row mx-auto">
          <div className="mt-5 pb-5 d-flex row align-items-center justify-content-center">
            <p className="mx-auto">
              Mark yourself down as a <b>markdown expert</b> with this
              interactive tutorial that guides you through the steps of building
              a high-quality README.md for your next project!
            </p>
            <dl class="mt-5 d-flex col align-items-center justify-content-center">
              <dt>Introduction</dt>
              <dd className="mx-auto">-</dd>
              <dt>Formatting</dt>
              <dd className="mx-auto">-</dd>
              <dt>Headers</dt>
              <dd className="mx-auto">-</dd>
              <dt>Links</dt>
              <dd className="mx-auto">-</dd>
              <dt>Images</dt>
              <dd className="mx-auto">-</dd>
              <dt>Quotes & Code</dt>
              <dd className="mx-auto">-</dd>
              <dt>Lists</dt>
            </dl>
          </div>
        </div>

        <div className="mx-auto w-auto ">
          {/* <dl class="col">
            <dt>Introduction</dt>
            <dd className="mx-auto">-</dd>
            <dt>Introduction</dt>
            <dd className="mx-auto">-</dd>
            <dt>Introduction</dt>
            <dd className="mx-auto">-</dd>
            <dt>Introduction</dt>
            <dd className="mx-auto">-</dd>
            <dt>Introduction</dt>
          </dl> */}
        </div>

        <Sketch
          mouseClicked={(p5) => {
            // TODO: FIX TO TRACK IF MOUSE PRESSED A CIRCLE
            let d = p5.dist(p5.mouseX, p5.mouseY, 200, 200);
            console.log(d);
            if (d < 200) {
              // Pick new random color values
              g = 100;
            }
          }}
          setup={(p5, parentRef) => {
            p5.createCanvas(200, 200).parent(parentRef);
          }}
          draw={(p5) => {
            p5.background(g);
            p5.fill(255, y * 1.3, 0);
            p5.ellipse(p5.width / 2, y, 50);
            if (y > p5.height) direction = "";
            if (y < 0) {
              direction = "^";
            }
            if (direction === "^") y += 8;
            else y -= 4;
          }}
        />

        {/* <div className="d-flex align-items-center justify-content-center">
          <button type="button" className="btn btn-primary w-50">
            Primary
          </button>
        </div> */}
      </div>
    </div>
  );
}

export default App;
