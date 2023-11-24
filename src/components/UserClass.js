import React, { Component } from "react";
//or import{componenet} from "react"; class UserClass extends Component

class UserClass extends Component {
/* whenever a class instance is created the constructor is called then the render is called*/
//parent const->parent render->child const->child render
constructor(props){

    {/* The super(props) call in the constructor is necessary to call the constructor of the parent class (React.Component). This ensures that the necessary setup in the parent class is done before your component's constructor is executed. It passes props to the constructor of the parent class.*/}
    super(props);
    console.log(props);

    {/* bts reacct in functional components has all the state variables in a single object*/}
    this.state={
        userInfo:{


            login:"kae",
            location:"kjs",
        }
    };
}

async componentDidMount(){
    const data=await fetch("https://api.github.com/users/kartikeyuniyal13");
    const jsondata= await data.json();
    console.log(jsondata)

this.setState({
    userInfo:jsondata,

});
}

render(){
    return(<div className="userclass-card">
        {/* Here, this inside the constructor and render methods refers to the instance of the UserClass component. */}
    
    <h3>Location:{this.state.userInfo.location}</h3>
    <h4>
        Name:{this.state.userInfo.Name}
    </h4>
</div>)
}
}
export default UserClass;