import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo:{
        name:"dummyName",
        location:"defaultLocation", //just like defined state in Functional Component
        avatar_url:"https:dummy-photo.com"


      }
      // count: 0,
      // count1: 1,
    };
    console.log(" Child Constructor is called");
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/shubhamMogha97");
    const json = await data.json();
    this.setState({
      userInfo:json
    })
    console.log(json);
    // console.log(" Child component Did Mount")

    // API calling Here (Inside componentDidMount)
  }
  componentDidUpdate(){
    console.log("component did upadte-----");
  }
  componentWillUnmount(){
    console.log("component Will Unmount-----");
  }
  render() {
    // console.log(" Child render is called");
    const { name, location,avatar_url,bio} = this.state.userInfo;
    // debugger;

    // const { count, count1 } = this.state;
    return (
      <div className="user-card">

        {/* <h2>Count: {count}</h2> */}
        {/* <button
          onClick={() => {
            // Never update state varibale directly
            // this.state.count = this.state.count + 1;
            this.setState({
              count: this.state.count + 1, //pass object here which needs to be updated
              count1: this.state.count1 + 1,
            })
          }}
        >
          count Increase
        </button> */}
        {/* <h2>count1: {count1}</h2> */}

        <h1>Name: {name}</h1>
        <img src ={avatar_url}/>
        <h3>Location: {location}</h3>
        <h3>Bio: {bio}</h3>
        <h2>Contact: Shubahm.mogha97@gmail.com</h2>
      </div>
    );
  }
}

export default UserClass;
