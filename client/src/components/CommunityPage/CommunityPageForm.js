import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/esm/FloatingLabel';
import { LinkContainer } from 'react-router-bootstrap';
import Nav from 'react-bootstrap/Nav';
import './css/CommunityPageForm.css';

function CommunityPageForm() {
  return (
    <Container>
      <table>
        <tr>
          <h1 className="title">Create Post On Community Page</h1>
          <th className="right">
            <LinkContainer to="/communitypage">
              <Nav.Link>Back</Nav.Link>
            </LinkContainer>
          </th>
        </tr>
      </table>
      <Container className="center">
        <Container className="mx-0 px-0" fluid>
          <Form>
            <Form.Group className="mb-3" controlId="formTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control type="title" placeholder="Enter Title" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Categories</Form.Label>
              <FloatingLabel
                controlId="floatingSelectGrid"
                label="Choose Category"
              >
                <Form.Select aria-label="Floating label select example">
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </FloatingLabel>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={4} />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Container>
      </Container>
    </Container>
  );
}

export default CommunityPageForm;