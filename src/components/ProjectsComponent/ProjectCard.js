import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../../styles/ProjectSection.css'

const ProjectCard = ({img , title , description, url, ...props}) => {
  
  
  
    return (  
    <Card className="card rounded-3 d-flex h-100 " >
      <Card.Img className="p-2 w-100" variant="top" src={img} />
      <Card.Body >
        <Card.Title >{title}</Card.Title>
        <Card.Text className="text-start">       
            {description}
        </Card.Text>

        <div className="d-flex bg-black row w-100 ">
          <button className="btn btn-outline-primary col-lg-6 ">
          <a href={url}>
              See more...
          </a>
          </button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;
