import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/Nav.css";
import {
  faFacebook,
  faLinkedin,
  faSquareGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faSquareEnvelope } from "@fortawesome/free-solid-svg-icons";
import { HStack } from "@chakra-ui/react";
import { useEffect, useState , useRef} from "react";

function ContainerInsideExample() {

  const navRef= useRef(null)
  const [prevScrollPos, setPrevScrollPos] = useState()
  const [isScrollDown, setIsScrollDown] = useState(false)

  const handleScroll = ()=>{

    if(window.scrollY > prevScrollPos){
      console.log("scroll down")
      setIsScrollDown(true)
    }else{
      console.log("scroll up")
      setIsScrollDown(false)
    }
    setPrevScrollPos(window.scrollY)

  }

  useEffect(()=>{

    document.addEventListener('scroll', handleScroll)

    // window.addEventListener('scroll', ()=>{
    //  const isScrollDown = window.scrollY > prevScrollPos
    //   if(isScrollDown){
    //     setIsScrollDown(isScrollDown)
    //     console.log("scrolling down")
    //   }else{
    //     setIsScrollDown(isScrollDown)
    //     console.log("scrolling up")
    //   }
    //   setPrevScrollPos(window.scrollY)
    // })
    
    return ()=>{
      document.removeEventListener('scroll', handleScroll)
    }
  },[prevScrollPos])


  const socials = [
    {
      icon: faFacebook,
      url: "https://web.facebook.com/profile.php?id=100009853422578",
    },
    {
      icon: faSquareGithub,
      url: "https://github.com/3bd-allah",
    },
    {
      icon: faLinkedin,
      url: "https://www.linkedin.com/in/abdullah-nabil-0979b9230/",
    },
    {
      icon: faSquareEnvelope,
      url: "https://mail.google.com/mail/u/2/#inbox",
    },
  ];

  return (
    
    <div  className={isScrollDown? "position-absolute animationDown" : "position-fixed animationUp"} id="navbar">
      <Navbar expand="lg" className="bg-body-tertiary Nav">
        <Container className="Nav">
          <Navbar.Brand
            className="Nav title"
            href="https://abdullah-nabil-portfoflio.netlify.app/#home"
          >
            Portfolio.
          </Navbar.Brand>

      <div className="ms-5 row">
          <HStack spacing="15px">
            {socials.map((social, index) => (                
                <a href={social.url} key={index}>
                    <FontAwesomeIcon icon={social.icon} size="xl" />
                </a>
            ))}
          </HStack>
      </div>

          {/* <div className="  icons">
            <a href="https://web.facebook.com/profile.php?id=100009853422578">
              <FontAwesomeIcon icon={faFacebook} size="xl" />
            </a>
            <a href="https://github.com/3bd-allah">
              <FontAwesomeIcon icon={faSquareGithub} size="xl" />
            </a>
            <a href="https://www.linkedin.com/in/abdullah-nabil-0979b9230/">
              <FontAwesomeIcon icon={faLinkedin} size="xl" />
            </a>
            <a href="https://mail.google.com/mail/u/2/#inbox">
              <FontAwesomeIcon icon={faSquareEnvelope} size="xl" />
            </a>
          </div> */}

          <div className="partitions">
            <a href="#projects-section">
              <button className="btn btn-secondary">Projects</button>
            </a>
            <a href="#contact-me-section">
              <button className="btn btn-success">Contact Me</button>
            </a>
          </div>
        </Container>
      </Navbar>
    </div>
  );
}

export default ContainerInsideExample;
