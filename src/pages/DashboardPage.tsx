
import React  from 'react';
import { IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/react';
import { Route, Redirect } from 'react-router';


import Login from '../pages/Login';
import Signup from './Signup';
import './Welcome.scss';
import './Login.scss';
import '@ionic/react/css/core.css';


const DashboardPage: React.FC = () => {
    return (
      <IonRouterOutlet>
        <Redirect exact path="/" to="/Welcome" />
        <Route path="/Login" render={() => <Login />} exact={true} />
        <Route path="/Signup" render={() => <Signup />} exact={true} />
      </IonRouterOutlet>
    );
  };

  export default DashboardPage;