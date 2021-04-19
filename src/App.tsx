import React, { useEffect } from 'react';

import { IonApp, IonRouterOutlet, IonSplitPane } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import history from './history';
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

import Login from './pages/Login';

import Welcome from './pages/Welcome';
import DashBoard from './pages/DashboardPage';
import Signup from './pages/Signup';

const App: React.FC = () => (
  <IonApp>
<IonReactRouter history={history}>
    <IonRouterOutlet id="main"> 
    <Route path="/Welcome" component={Welcome} />
      <Redirect exact from="/" to="/Welcome" />
      <Route path="/Login" render={() => <Login />} exact={true} />
      <Route path="/Signup" render={() => <Signup />} exact={true} />
     </IonRouterOutlet>
  </IonReactRouter>
</IonApp>
);

export default App;



/**
 * 
 *  <IonRouterOutlet id="main"> 
    <Route path="/Login" component={Login} exact/>
    <Route path="/Welcome" component={Welcome} exact/>
    
    <Redirect exact from="/" to="/Welcome" />
     </IonRouterOutlet>
 */