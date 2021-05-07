import React, { useState, useRef } from 'react';
import { IonContent, IonHeader, IonPage, IonToolbar, IonButton, IonSlides,IonSlide,IonButtons,IonIcon,useIonViewWillEnter, IonImg, IonTitle, IonText, IonCard, IonCardContent, IonList, IonItem, IonAvatar, IonFooter, IonLabel, IonTabButton,IonTabBar } from '@ionic/react';
import { arrowForward, bookmarksSharp } from 'ionicons/icons';
import './Navbar.scss';
import { RouteComponentProps, withRouter } from 'react-router';
import { IonReactRouter } from '@ionic/react-router';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import history from '../history';
import UserService from "../services/UserService";
import { BookmarkSharp,  HomeOutline , BagOutline, HeartOutline , PersonOutline} from 'react-ionicons'

type SomeComponentProps = RouteComponentProps;
const Navbar: React.FC<SomeComponentProps> = ({ history }) => {

    return (
        <IonPage id="navbar-page">
          <IonContent fullscreen>
            <div className="navbar">
            <IonTabBar slot="bottom">
          <IonTabButton tab="tab1" href="/Home">
            <HomeOutline/>
            <IonLabel><b>.</b></IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab2" href="/tab2">
            <BagOutline/>
            <IonLabel><b>.</b></IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab3" href="/tab3">
            <HeartOutline/>
            <IonLabel><b>.</b></IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab4" href="/tab4">
            <PersonOutline/>
            <IonLabel><b>.</b></IonLabel>
          </IonTabButton>
        </IonTabBar>
            </div>
           
            
            
          </IonContent>
                
        </IonPage>
        
  );
}
export default withRouter (Navbar);