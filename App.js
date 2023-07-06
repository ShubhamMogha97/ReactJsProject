//<div id ="parent">
//  <div id ="child">
//       <h1>Hello Heading 1</h1>
//        <h2>Hello Heading 1</h2>
//  </div>
//</div>

// OR

//</div id="parent">

//  <div id ="child1">
//    <h1>Hello Heading 1</h1>
//      <h2>Hello Heading 1</h2>
//  </div>
// <div id="child2">
// <h1>Hello World1</h1>
// <h2>Hello World2</h2>
// </div>
//</div>

// How to create this structure in React JS

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I am H1 tag"),
    React.createElement("h2", {}, "I am H2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am H1 tag"),
    React.createElement("h2", {}, "I am H2 tag"),
  ]),
]);

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World using React JS"
);

//This is called JSX

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
