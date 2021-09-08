import './Footer.css';

import React from 'react';

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { LinkContainer } from 'react-router-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { SiFacebook, SiInstagram, SiLinkedin, SiYoutube } from 'react-icons/si';

const Footer = () => {
  return (
    <Container className="mx-0 px-0" fluid>
      <Card className="bg-dark text-white">
        <Card.Title className="text-center">2021 Tangle </Card.Title>
        <Row>
          <Col>
            <Container className="col-md-7 mb-3">
              <Card.Title>Explore</Card.Title>
              <Card.Text href="./Home/Homepage.jsx">Home</Card.Text>
              <Card.Text href="./Restaurants/Restaurant.js">
                Restaurants
              </Card.Text>
              <Card.Text href="./Reviews/ReviewsPage.css">Reviews</Card.Text>
              <Card.Text href="./CommunityPage/CommunityPage.js">
                Community Page
              </Card.Text>
            </Container>
          </Col>
          <Col>
            <Container className="col-md-7 mb-3">
              <Card.Title>Services</Card.Title>
              <Card.Text href="#register-your-restaurant">Join Us</Card.Text>
              <Card.Text href="#dashboard">Business Pro</Card.Text>
              <Card.Text href="#feedback">Feedback</Card.Text>
            </Container>
          </Col>
          <Col>
            <Container className="col-md-7 mb-3">
              <Card.Title>Social Media(s)</Card.Title>
              <Card.Text href="#">
                <i className="fab fa-facebook-f">
                  <SiFacebook />
                  <span style={{ marginLeft: '10px' }}>Facebook </span>
                </i>
              </Card.Text>
              <Card.Text href="#">
                <i className="fab fa-instagram">
                  <SiInstagram />
                  <span style={{ marginLeft: '10px' }}>Instagram</span>
                </i>
              </Card.Text>
              <Card.Text href="#">
                <i className="fab fa-linkedIn">
                  <SiLinkedin />
                  <span style={{ marginLeft: '10px' }}>LinkedIn</span>
                </i>
              </Card.Text>
              <Card.Text href="#">
                <i className="fab fa-youtube">
                  <SiYoutube />
                  <span style={{ marginLeft: '10px' }}>Youtube</span>
                </i>
              </Card.Text>
            </Container>
          </Col>
          <Col>
            <Container className="col-md-7 mb-3">
              <Card.Title>Legal</Card.Title>
              <Card.Text href="#terms-co">Terms & Conditions</Card.Text>
              <Card.Text href="#privacy">Privacy Policy</Card.Text>
              <Card.Text href="#tos">Terms of Use</Card.Text>
            </Container>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default Footer;
