import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement("h1", {}, "Hello Heading");

// React Element
// JSX-- is not HTML in JS (we can say that HTML syntax and it is more closer to XML)

// const jSxHeading = (<h1>Hello JSX Heading</h1>);
// Multiple line we have to use Brackets
const jSxHeading = (
<h1>Hello JSX Heading</h1>
);

console.log(jSxHeading)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jSxHeading);
