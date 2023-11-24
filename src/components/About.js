import React from "react";
import UserClass from "./UserClass";
import User from "./User";

const About = () => {
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
