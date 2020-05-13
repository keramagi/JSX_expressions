import React from "react";
import ReactDOM from "react-dom";

const UserName = "Ambika";
const CurrentYear = "2020";
const rootElement = document.getElementById("root");
ReactDOM.render(
  <div>
    <p>Created by {UserName}</p>
    <p>Copyright {CurrentYear}.</p>
  </div>,
  rootElement
);

//Create a react app from scratch.
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.
