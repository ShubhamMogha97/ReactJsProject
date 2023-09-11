// import User from "./User";
// import UserClass from "./UserClass";

// const About = () => {
//     return (
//         <div>
//             <h1>About US Page</h1>
//             <h2>This is Namaste Namaste React web series</h2>
//             {/* <User name="Shubham Mogha Functional()" location="New Delhi Fun"/> */}
//             <UserClass name=" Shubham Mogha class()" location="New Delhi class" />
//         </div>
//     )
// }
// export default About;

import React from "react";
import UserClass from "./UserClass";
class About extends React.Component{
  constructor(props) {
    super(props);
    console.log(" Parent Constructor is called");
  }

  componentDidMount(){
    console.log(" Parent component Did Mount")
  }
  render() {
    console.log("Parent Render is called");
    return (
      <div>
        <h1> This is About Page</h1>
        <UserClass name="Shubham Mogha class()" location="New Delhi class" />
        {/* <UserClass name="Elon Musk class()" location="Dehradun class" /> */}
      </div>
    );
  }
}
/* 
- Parent constructor
- Parent render

  - First Child Constructor
  - First Child Render

  - second Constructor
  - second Render

<---Dom Updated--- IN SINGLE BATCH>

  - First componentDidMount
  - second ComponentDidMount

  -aprent ComponentDidMount
*/
export default About;
