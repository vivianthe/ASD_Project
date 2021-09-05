import React, { Component } from 'react';
import { Container, Row, Column } from 'react-bootstrap';
import Dashboard from '../dashboard/Dashboard';
import CardAnalytics from '../cards/CardAnalytics';
import RestaurantPerformance from '../graph/RestaurantPerformance';
import RestaurantRevenue from '../graph/RestaurantRevenue';

class BusinessPro extends Component {
  render() {
    return (
      <div>
        <div>
          <Dashboard />
          {/* main body */}
          <div style={{ marginBottom: '200px;' }}>
            <Container>
              <h3>All Time Restaurant Analytics</h3>
              {/* 4 column 1 rows */}
              <Row>
                <Column>
                  <CardAnalytics />
                </Column>
                <Column>
                  <CardAnalytics />
                </Column>
                <Column>
                  <CardAnalytics />
                </Column>
                <Column>
                  <CardAnalytics />
                </Column>
              </Row>
            </Container>
            <Container>
              <h3>Profit / Loss Margin</h3>
              <RestaurantRevenue />
            </Container>
            <Container>
              <h3>Restaurant Performance Analytics</h3>
              <subtitle>date</subtitle>
              <RestaurantPerformance />
            </Container>
          </div>
        </div>
      </div>
    );
  }
}

export default BusinessPro;
