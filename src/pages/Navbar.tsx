import React, { useState, useRef } from 'react';
import { IonRouterOutlet, IonTabs, IonContent, IonHeader, IonPage, IonToolbar, IonButton, IonSlides,IonSlide,IonButtons,IonIcon,useIonViewWillEnter, IonImg, IonTitle, IonText, IonCard, IonCardContent, IonList, IonItem, IonAvatar, IonFooter, IonLabel, IonTabButton,IonTabBar } from '@ionic/react';
import { arrowForward, bookmarksSharp, homeOutline, bagOutline, bookOutline, heart, person, personOutline, heartOutline } from 'ionicons/icons';
import './Navbar.scss';
import { RouteComponentProps, withRouter } from 'react-router';
import { Route, Redirect } from 'react-router';
import { IonReactRouter } from '@ionic/react-router';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import history from '../history';
import UserService from "../services/UserService";
import { BookmarkSharp,  HomeOutline , BagOutline, HeartOutline , PersonOutline} from 'react-ionicons';


import Homepage from './Homepage';
import EventDetails from './EventDetails';
import Teaching from './Teaching';
import TeachingList from './TeachingList';
import TeachingDetails from './TeachingDetails';
import TeachingOrder from './TeachingOrder';
import Signup from './Signup';
import Login from './Login';
import Welcome from './Welcome';
import Shopping from './Shopping';
import UserProfile from './UserProfile';
import Donation from './Donation';
import AboutUs from './AboutUs';
import PaymentCardDetail from './PaymentCardDetail';
import PaymentShippingDetail from './PaymentShippingDetail';
import PaymentDeliveryDetail from './PaymentDeliveryDetail';

interface MainTabsProps { }

const Navbar: React.FC<MainTabsProps> = () => {


  return (
    <IonTabs>
      <IonRouterOutlet>
        <Redirect exact path="tabs" to="tabs/home" />

        {/*
          Using the render method prop cuts down the number of renders your components will have due to route changes.
          Use the component prop when your component depends on the RouterComponentProps passed in automatically.
        */}
        <Route path="/tabs/home" render={() => <Homepage />} exact={true} />
        <Route path="/tabs/home/eventdetails/:id" component={EventDetails} />
        <Route path="/tabs/shopping" render={() => <Shopping />} exact={true} />
        <Route path="/tabs/teaching" render={() => <Teaching />} exact={true} />
        <Route path="/tabs/teaching/teachinglist" component={TeachingList} exact={true} />
        <Route path="/tabs/teaching/teachingdetails" component={TeachingDetails} />
        <Route path="/tabs/teaching/teachingorder" component={TeachingOrder} />
        <Route path="/tabs/shopping" render={() => <Shopping />} exact={true} />
        <Route path="/tabs/donation" render={() => <Donation />} exact={true} />
        <Route path="/tabs/userprofile" render={() => <UserProfile />} exact={true} />
        <Route path="/tabs/userprofile/aboutus" component={AboutUs} />


      </IonRouterOutlet>

      <IonTabBar slot="bottom">
        <IonTabButton tab="home" href="/tabs/home">
          <IonIcon icon={homeOutline} />
          <IonLabel>Home</IonLabel>
        </IonTabButton>
        <IonTabButton tab="shopping" href="/tabs/shopping">
          <IonIcon icon={bagOutline} />
          <IonLabel>Shop</IonLabel>
        </IonTabButton>
        <IonTabButton tab="teaching" href="/tabs/teaching">
          <IonIcon icon={bookOutline} />
          <IonLabel>Teachings</IonLabel>
        </IonTabButton>
        <IonTabButton tab="donation" href="/tabs/donation">
          <IonIcon icon={heartOutline} />
          <IonLabel>Donation</IonLabel>
        </IonTabButton>
        <IonTabButton tab="userprofile" href="/tabs/userprofile">
          <IonIcon icon={personOutline} />
          <IonLabel>Profile</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>


        
  );

};

export default withRouter (Navbar);