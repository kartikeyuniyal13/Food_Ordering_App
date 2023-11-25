import React, { useEffect } from "react";
import UserClass from "./UserClass";
import User from "./User";

const About = () => {
  useEffect(() => {
    console.log("about page loaded useEffect called");
   const timer= setInterval(()=>{console.log("Namaste React")},1000)

    return()=>{

      console.log("returned from about us page");
      clearInterval(timer);

    }

}, []);

return (
  <div>
    <h1>
      About Us:
      <br />
    </h1>
    <User name={"Kartikey_Uniyal"} />
    <UserClass />
  </div>
);
};

export default About;
