import { useState } from "react";
const User = (props) => {
  const[count] = useState(0)
  const[count1] = useState(1)
  return (
    <div className="user-card">
      <h1>Count: {count}</h1>
      <h1>count1: {count1}</h1>
      <h1>Name: {props.name}</h1>
      <h2>Email: Shubahm.mogha97@gmail.com</h2>
      <h3>Location: {props.location}</h3>
    </div>
  );
};
export default User;
