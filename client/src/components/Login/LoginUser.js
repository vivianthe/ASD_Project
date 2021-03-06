import React from 'react';
import '../../scss/style.scss';
import { Card, Form, Button } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

const LoginUser = () => {
  return (
    <div style={{ backgroundColor: 'theme-colors: primary' }}>
      <Card>
        <Card.Title>Tangle</Card.Title>
        <Card.Body>
          <Card.Title>Log in</Card.Title>
          <Card.Subtitle>Enter your email and password below</Card.Subtitle>
          <Form>
            <Form.Group>
              <Form.Label>EMAIL</Form.Label>
              <Form.Control
                required
                type="email"
                placeholder="Enter email:"
                feedback="You forgot to enter your email"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>PASSWORD</Form.Label>
              <Form.Control
                required
                type="password"
                placeholder="Enter password:"
                feedback="You forgot to enter your password"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Check label="Remember Me" />
            </Form.Group>
            <Button
              style={{ backgroundColor: 'theme-colors: success' }}
              type="submit"
            >
              Log in
            </Button>
            <p>
               Don't have an account? <a href="www.blank.com">Sign up </a>
              with us! 
            </p>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default LoginUser;
