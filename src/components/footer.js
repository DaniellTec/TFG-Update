
import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";

import '../css/styles.css';
  
const Footer = () => {
  return (
    <Box>
      <h1 style={{ color: "white", 
                   textAlign: "center", 
                   marginTop: "-50px",
                    }}>
        {/*World Of Art*/}
      </h1>
      <br/>
      <Container>
        <Row>
          <Column>
            <Heading>About Us</Heading>
            <FooterLink href="">Team</FooterLink>
            <FooterLink href="/users">Users</FooterLink>
            <FooterLink href="">Help</FooterLink>
          </Column>
        
          <Column>
            <Heading>Social Media</Heading>
           
            <FooterLink href="">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>
                  Twitter
                </span>
              </i>
            </FooterLink>
            <FooterLink href="">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>
                  Instagram
                </span>
              </i>
            </FooterLink>
            <FooterLink href="">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>
                  Telegram
                </span>
              </i>
            </FooterLink>
          </Column>
          <Column>
            <Heading>Contact Us</Heading>
            <FooterLink href="">Madrid</FooterLink>
          </Column>
          <Column>
            <Heading>Root Access</Heading>
            <FooterLink href="paintRoot">Pinturas</FooterLink>
            <FooterLink href="/photoRoot">Fotografías</FooterLink>
            <FooterLink href="museumRoot">Museos</FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;