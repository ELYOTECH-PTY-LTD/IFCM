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
import Homepage from './pages/Homepage'
import Navbar from './pages/Navbar'
import EventDetails from './pages/EventDetails';
import Teaching from './pages/Teaching'
import TeachingDetails from './pages/TeachingDetails'
import TeachingList from './pages/TeachingList';
import TeachingOrder from './pages/TeachingOrder';

import Shopping from './pages/Shopping';
import UserProfile from './pages/UserProfile';
import About from './pages/AboutUs';
import PaymentCardDetail from './pages/PaymentCardDetail';
import PaymentShippingDetail from './pages/PaymentShippingDetail';




const App: React.FC = () => {
  
  
  return (

  <IonApp>
  <IonReactRouter>
  <IonSplitPane contentId="main">
      <Navbar/>
      <IonRouterOutlet id="main">
        {/*
        We use IonRoute here to keep the tabs state intact,
        which makes transitions between tabs and non tab pages smooth
        */}
        <Route path="/tabs" render={() => <Navbar />} />
        <Route path="/welcome" component={Welcome} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/paymentcarddetails" component={PaymentCardDetail} />
        <Route path="/paymentshippingdetails" component={PaymentShippingDetail} />

   
        <Route path="/" component={Welcome} exact />
      </IonRouterOutlet>
     </IonSplitPane>
  </IonReactRouter>
</IonApp>


/* 
  <IonApp>
<IonReactRouter history={history}>
    <IonRouterOutlet id="main"> 
    <Route path="/Welcome" component={Welcome} />
      <Redirect exact from="/" to="/Welcome" />
      <Route path="/Login" render={() => <Login />} exact={true} />
      <Route path="/Signup" render={() => <Signup />} exact={true} />
      <Route path="/Home" render={() => <Homepage />} exact={true} />
      <Route path="/EventDetails" render={() => <EventDetails />} exact={true} />
      <Route path="/Navbar" render={() => <Navbar />} exact={true} />
      <Route path="/Teaching" render={() => <Teaching />} exact={true} />
      <Route path="/TeachingList" render={() => <TeachingList />} exact={true} />
      <Route path="/TeachingDetails" render={() => <TeachingDetails />} exact={true} />


     </IonRouterOutlet>
  </IonReactRouter>
</IonApp>
);

*/

);

}

export default App;



/**
 * 
 *  <IonRouterOutlet id="main"> 
    <Route path="/Login" component={Login} exact/>
    <Route path="/Welcome" component={Welcome} exact/>
    
    <Redirect exact from="/" to="/Welcome" />
     </IonRouterOutlet>
 */