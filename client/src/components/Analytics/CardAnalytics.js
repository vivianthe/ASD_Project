import React from 'react';
import { Card } from 'react-bootstrap';

const CardAnalytics = () => {
  // create four cards and show: Page Views, Share, Ratings Given, Popularity
  return (
    <div>
      <Card
        style={{
          width: '13rem',
          height: '5rem',
          marginBottom: '30px',
          zIndex: '0'
          // justifyContent: 'space-between',
          // display: 'flex'
        }}
      >
        <Card.Body>
          <Card.Title>Name</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Number</Card.Subtitle>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardAnalytics;
