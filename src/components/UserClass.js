import React from "react";
//or import{componenet} from "react"; class UserClass extends Component

class UserClass extends React.Component {
/* whenever a class instance is created the constructor is called then the render is called*/
//parent const->parent render->child const->child render
constructor(props){

    {/* The super(props) call in the constructor is necessary to call the constructor of the parent class (React.Component). This ensures that the necessary setup in the parent class is done before your component's constructor is executed. It passes props to the constructor of the parent class.*/}
    super(props);
    console.log(props);

    {/* bts reacct in functional components has all the state variables in a single object*/}
    this.state={
        count:0,
        count2:2,
    };
}

render(){
    return(<div className="userclass-card">
        {/* Here, this inside the constructor and render methods refers to the instance of the UserClass component. */}
        <h1>
            Count:{this.state.count}
            
        </h1><br/>
        <h1>Count:{this.state.count2}</h1>
    <h2>Name:{this.props.name}</h2>
   <button 
   onClick={()=>{this.setState({count: this.state.count+1,count2:this.state.count2+2})}
   }>jjbkjbjb</button>
    <h2></h2>
    <h3>Location:Dehradun</h3>
    <h4>
        Contact:@KartikeyUniyal13
    </h4>
</div>)
}
}
export default UserClass;