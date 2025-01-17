import React from 'react';
import {
  Switch, Route, Redirect,
} from 'react-router-dom';

import { StockProvider } from '../../contexts/Stock';
import NavBar from './NavBar/NavBar';
import UserInfoBar from './UserInfoBar/UserInfoBar';
import Dashboard from './Dashboard/Dashboard';
import Market from './Market/Market';
import Stock from './Stock/Stock';
import AddBuyingPowerDialog from '../../components/Dialogs/AddBuyingPowerDialog/AddBuyingPowerDialog';

import './KimchiStonksApp.scss';

function KimchiStonksApp() {
  return (
    <StockProvider>
      <div className="app-container">
        <div className="main">
          <NavBar />
          <UserInfoBar />
          <Switch>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/market">
              <Market />
            </Route>
            <Route path="/stock/:symbol">
              <Stock />
            </Route>
            <Route path="/">
              <Redirect to="/dashboard" />
            </Route>
          </Switch>
          <Switch>
            <Route path="/*/addBuyingPower">
              <AddBuyingPowerDialog />
            </Route>
          </Switch>
        </div>
      </div>
    </StockProvider>
  );
}

export default KimchiStonksApp;
