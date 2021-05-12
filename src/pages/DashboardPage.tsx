
import React  from 'react';
import { IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/react';
import { Route, Redirect } from 'react-router';



import './Welcome.scss';
import './Login.scss';
import '@ionic/react/css/core.css';

import Login from '../pages/Login';
import Signup from './Signup';
import Homepage from './Homepage'
import Navbar from './Navbar'
import Teaching from './Teaching'
import Teaching_details from './Teaching_details'
import Teaching_list from './Teaching_list'
const DashboardPage: React.FC = () => {
    return (
      <IonRouterOutlet>
        <Redirect exact path="/" to="/Welcome" />
        <Route path="/Login" render={() => <Login />} exact={true} />
        <Route path="/Signup" render={() => <Signup />} exact={true} />
        <Route path="/Home" render={() => <Homepage />} exact={true} />
        <Route path="/Navbar" render={() => <Navbar />} exact={true} />
        <Route path="/Teaching" render={() => <Teaching />} exact={true} />
        <Route path="/Teaching_details" render={() => <Teaching_details />} exact={true} />
        <Route path="/Teaching_list" render={() => <Teaching_list />} exact={true} />
      </IonRouterOutlet>
    );
  };

  export default DashboardPage;