import React from 'react';

import { Card, Button, Form } from 'react-bootstrap';
import { IconContext } from 'react-icons';
import { FaCheckCircle, FaTimesCircle, FaMotorcycle } from 'react-icons/fa';
import { GiTabletopPlayers } from 'react-icons/gi';
import { Container, Row, Col } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import { uniqueNamesGenerator, NumberDictionary, names, adjectives, animals } from 'unique-names-generator';

/* 
  create 2 Ticket Designs, using if statement to determine whether
    it's for takeaway and reservations
      if takeaway, use logo { FaMotorcycle }
      if reservations, use logo { GiTabletopPlayers }
      both tickets have accept and cancel button
    page allows cancel all, will show warning
*/

/* typescript
  const config: Config = {
    dictionaries: [names]
    const characterName: string = uniqueNamesGenerator(config);
};
*/

function TicketMain(data) {
  console.log(data)

  const {
    UserID,
    ReservationID,
    OrderID,
    PaymentID,
    TicketStatus,
    TicketOwner
    TicketUpdateDescription
  } = data.data[0]

  return (
    <div>
      <Container>
        <Card
          style={{
            width: '17rem',
            marginBottom: '25px',
            marginLeft: '220px' // start after sidebar
            // marginRight: 'auto'
          }}
        >
          {/* Row 1 -> Time 
          <Row>
            {/* how many minutes 
            {/* automatically starts from 30 minutes 
            <p>in 30 minutes</p>
          </Row>
            */}

          {/* Row 2 -> Order Header */}
          <Card.Header>
            <Row>
              <Col>
                <IconContext.Provider value={{ color: 'purple', size: '50px' }}>
                  <FaMotorcycle />
                </IconContext.Provider>
              </Col>
              <Col>
                {/* username */}
                <span style={{ fontSize: '18px' }}> ${randomName} </span> <br />
                {/* order ID */}
                <span style={{ color: 'grey' }}>#Order ID</span>
              </Col>
            </Row>
          </Card.Header>

          {/* Row 3 -> Order Description */}
          <Card.Body>
            <Row>
              <Col sm={3}>
                {/* order quantity */}
                <span>
                  ${randomQuantity} x
                </span>
              </Col>

              <Col sm={9}>
                {/* items description */}
                <span>
                  ${RandomFood}
                </span>
              </Col>
            </Row>
          </Card.Body>

          {/* Row 4 -> Button */}
          <div>
            <Row>
              <Col>
                <Button
                  style={{
                    background: 'red',
                    width: '80%',
                    margin: '10px 15px',
                    padding: '5px',
                    display: 'block'
                  }}
                >
                  {/* cancel */}
                  <FaTimesCircle />
                </Button>
              </Col>
              <Col>
                <Button
                  style={{
                    background: 'green',
                    width: '80%',
                    margin: '10px 15px',
                    padding: '5px',
                    display: 'block'
                  }}
                >
                  {/* accept */}
                  <FaCheckCircle />
                </Button>
              </Col>
            </Row>
          </div>
        </Card>
      </Container>
    </div>
  );
}

// using uniqueNamesGenerator to Generate random names within the npm package database

const randomName = uniqueNamesGenerator({ 
  // database contains 4900 unique names

  dictionaries: [names], 
  length: 2, 
  style: 'capital',
  separator: ' '
  // output random names with format: First Last
}); 

const randomQuantity = uniqueNamesGenerator({ 
  // database generate random number from 1 - 999 by default
  
  dictionaries: [NumberDictionary], 
  length: 2
   // output random number from: 1 - 99 
  }); 

const randomFood = uniqueNamesGenerator({
  // database generate random adjectives and animals

  dictionaries: [adjectives, animals],
  length: 2,
  style: 'capital',
  separator: ' '
  // output Adjectives Animals
});


export default TicketMain;

// old
/*

<Container>
  <IconContext.Provider value={{ size: '20px' }}>
    <div>
      <Card
        style={{
          width: '17rem',
          marginBottom: '25px',
          marginLeft: '220px'
          // marginRight: 'auto'
        }}
      >
       {/* Takeaway 

        <Card.Header>
          <Row>
            <Col sm={7}>
              <div>
                <span style={{ color: 'green' }}>
                  <FaMotorcycle /> Takeaway <br />
                </span>
                in 3 minutes
              </div>
            </Col>
            <Col sm={5}>
              <Button variant="success" size="sm">
                {/* to accept or cancel order
                <FaCheckCircle />
              </Button>
              <Button
                variant="danger"
                size="sm"
                style={{ marginLeft: '7px' }}
              >
                <FaTimesCircle />
              </Button>
            </Col>
          </Row>
        </Card.Header>
        <Card.Body>
          <Card.Title>John Doe</Card.Title>
          <Card.Subtitle>
            #1001 {/* Generate Number using UUID 
          </Card.Subtitle>
          {/* <Card.Text style={{ background: 'yellow' }}>Description</Card.Text> 
        </Card.Body>
        <Button style={{ background: 'lightgrey' }}>
          <Card.Text>
            1x Fish and Chips
            <br />- no mayo
          </Card.Text>
        </Button>
      </Card>
    </div>

    {/* Reservation 

    <div>
      <Card
        style={{
          width: '17rem',
          marginBottom: '15px',
          marginLeft: '220px'
          // marginRight: 'auto'
        }}
      >
        <Card.Header>
          <Row>
            <Col sm={7}>
              <span style={{ color: 'darkblue' }}>
                <GiTabletopPlayers /> Reservation <br />
              </span>
              in 7 minutes
            </Col>
            <Col sm={5}>
              <Button variant="success" size="sm">
                {/* to accept or cancel order 
                <FaCheckCircle />
              </Button>
              <Button
                variant="danger"
                size="sm"
                style={{ marginLeft: '7px' }}
              >
                <FaTimesCircle />
              </Button>
            </Col>
          </Row>
        </Card.Header>
        <Card.Body>
          <Card.Title>Amy</Card.Title>
          <Card.Subtitle>#203 </Card.Subtitle>
          {/* <Card.Text>Description</Card.Text> 
        </Card.Body>
        {/* For more ticket information 
        <Button style={{ background: 'lightgrey' }}>
          <div>
            <Card.Text>Booking for 3 people</Card.Text>
          </div>
        </Button>
      </Card>
    </div>
  </IconContext.Provider>
</Container>
  );
}

*/
