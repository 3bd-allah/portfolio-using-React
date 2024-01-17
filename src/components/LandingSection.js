import React from "react";
import "../styles/LandingSection.css";
import { Avatar, AvatarBadge, AvatarGroup } from "@chakra-ui/react";

const LandingSection = () => {
  return (
    <div className="LandingSection d-flex align-items-center">
      <div className="row">
        <div className="row text-center ">
          <AvatarGroup className="image img-fluid col align-self-center d-block">
            <Avatar
            className=""
              size="2xl"
              name="Abdullah Nabil"
              src={require("../images/meForPortfolio.jpg")}
            />
          </AvatarGroup>
          <div className="greeting row mt-3"> 
            <h5 className="text-white">Hello, I am Abdullah N.</h5>
          </div>
        </div>
        <div className="text-white row mt-4 p-4">
          <h2>A Software Engineer <br /> Specialized in .NET & React</h2>
        </div>
      </div>
    </div>
  );
};

export default LandingSection;
