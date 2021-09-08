import './App.css';
import React, { Component, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

import NavigationBar from './Component/NavigationBar';
import Footer from './Component/Footer';

import Homepage from './Component/Home/Homepage';
import CommunityPage from './Component/CommunityPage/CommunityPage';
import CommunityPageForm from './Component/CommunityPage/CommunityPageForm';
import CommunityPageEdit from './Component/CommunityPage/CommunityPageEdit';
import CommunityPageEdits from './Component/CommunityPage/CommunityPageEdits';

import Promotions from './Component/Promotions/Promotions';
import PromotionsPast from './Component/Promotions/PromotionsPast';
import PromotionsEdit from './Component/Promotions/PromotionsEdit';
import PromotionsHome from './Component/Promotions/PromotionsHome';

import Restaurant from './Component/Restaurants/Restaurant';
import RestaurantDetails from './Component/Restaurants/RestaurantDetails';
import RestaurantAdd from './Component/Restaurants/RestaurantAdd';
import RestaurantEdit from './Component/Restaurants/RestaurantEdit';
import Menu from './Component/Menu/Menu';
import MenuEdit from './Component/Menu/MenuEdit';
import MenuAdd from './Component/Menu/MenuAdd';

// staff
import Dashboard from './components/dashboard/Dashboard';
import BusinessPro from './components/business-pro/BusinessPro';
import StaffTicket from './components/staff-ticket/StaffTicket';
import Settings from './components/Settings';
import Profile from './components/Profile';
import Help from './components/Help';

require('dotenv').config();

class App extends Component {
  constructor() {
    super();
  }
  componentWillMount() {
    this.sendHook('Webhook Called within app haha.. uh.. app has been ran.');
  }
  sendHook(msg) {
    if (!process.env.HOOK_URL) {
      return;
    }
    let x = new XMLHttpRequest();
    x.open('POST', process.env.HOOK_URL);
    x.setRequestHeader('Content-type', 'application/json');
    let params = {
      username: 'Heroku',
      embeds: [
        {
          title: '[Internal app message]',
          description: msg,
          footer: {
            text: 'This was made with procrastination <3',
            icon_url: 'https://i.imgur.com/VAFzZeX.jpeg'
          }
        }
      ]
    };
    x.send(JSON.stringify(params));
  }
  render() {
    return (
      <Router>
        <Container className="mx-0 px-0" fluid>
          <Switch>
            <Route path="/communitypage">
              <NavigationBar />
              <Footer />
              <CommunityPage />
            </Route>
            <Route path="/communitypageform">
              <NavigationBar />
              <Footer />
              <CommunityPageForm />
            </Route>
            <Route path="/communitypageedits">
              <NavigationBar />
              <Footer />
              <CommunityPageEdits />
            </Route>
            <Route path="/communitypageedit">
              <NavigationBar />
              <Footer />
              <CommunityPageEdit />
            </Route>
            <Route path="/promotionspast">
              <NavigationBar />
              <Footer />
              <PromotionsPast />
            </Route>
            <Route path="/promotionsedit">
              <NavigationBar />
              <Footer />
              <PromotionsEdit />
            </Route>
            <Route path="/promotions">
              <NavigationBar />
              <Footer />
              <Promotions />
            </Route>
            <Route path="/menu">
              <NavigationBar />
              <Footer />
              <Menu />
            </Route>
            <Route path="/menuadd">
              <NavigationBar />
              <Footer />
              <MenuAdd />
            </Route>
            <Route path="/menuedit">
              <NavigationBar />
              <Footer />
              <MenuEdit />
            </Route>
            <Route path="/restaurant">
              <NavigationBar />
              <Footer />
              <Restaurant />
            </Route>
            <Route path="/restaurantdetails">
              <NavigationBar />
              <Footer />
              <RestaurantDetails />
            </Route>
            <Route path="/restaurantadd">
              <NavigationBar />
              <Footer />
              <RestaurantAdd />
            </Route>
            <Route path="/restaurantedit">
              <NavigationBar />
              <Footer />
              <RestaurantEdit />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/dashboard/ticket">
              <Dashboard />
              <StaffTicket />
            </Route>
            <Route path="/dashboard/analytics">
              <Dashboard />
              <BusinessPro />
            </Route>
            <Route path="/dashboard/profile">
              <Dashboard />
              <Profile />
            </Route>
            <Route path="/dashboard/settings">
              <Dashboard />
              <Settings />
            </Route>
            <Route path="/dashboard/help">
              <Dashboard />
              <Help />
            </Route>
            <Route path="/">
              <Homepage />
              <PromotionsHome />
              <Footer />
            </Route>
          </Switch>
        </Container>
      </Router>
    );
  }
}

export default App;
