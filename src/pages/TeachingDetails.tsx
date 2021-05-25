import React, { useState, useRef } from 'react';
import { IonContent, IonHeader, IonPage, IonBackButton, IonToolbar, IonButton, IonSlides,IonSlide,IonButtons,IonIcon,useIonViewWillEnter, IonImg, IonTitle, IonText, IonCard, IonCardContent, IonCardSubtitle ,IonList, IonItem, IonAvatar, IonFooter, IonLabel, IonTabButton,IonTabBar, IonCardTitle, IonCardHeader } from '@ionic/react';
import { chevronBackOutline, arrowForward, bookmarksSharp, lockClosedOutline } from 'ionicons/icons';
import './TeachingDetails.scss';
import { RouteComponentProps, withRouter } from 'react-router';
import { IonReactRouter } from '@ionic/react-router';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import history from '../history';
import UserService from "../services/UserService";
import { BookmarkSharp,  HomeOutline , BagOutline, HeartOutline , PersonOutline, LockClosedOutline} from 'react-ionicons'

type SomeComponentProps = RouteComponentProps;
const TeachingDetails: React.FC<SomeComponentProps> = ({ history }) => {

    return (
      <IonPage id="eventdetails-page">


      {/*-- Back button with a default href --*/}
      <IonHeader translucent no-border>
        <IonToolbar>
          <IonButtons slot="start">
          <IonBackButton icon={chevronBackOutline} defaultHref="/tabs/teaching/teachinglist" />
          </IonButtons>
          <IonTitle className="eventdetailstitle"> Love teachings</IonTitle>
        </IonToolbar>
      </IonHeader>
  
  
      <IonContent fullscreen>
        <IonCard>
          <img src="/assets/img/Love.jpg" />
          <IonCardHeader>
          <IonCardTitle> Developping the strengths </IonCardTitle>
            <IonCardSubtitle className="date_eventdetails">Free text - 01 Dec. 2020 </IonCardSubtitle>
          </IonCardHeader>
  <IonCardContent> 
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel enim nec urna malesuada viverra. Nullam at massa commodo, sollicitudin risus quis, 
  iaculis mauris. Pellentesque dictum vel elit in semper. 
  Vestibulum vitae velit id enim sagittis consectetur dignissim sit amet est. Praesent vitae posuere nisi, non porttitor mi.   
  </IonCardContent>
        </IonCard>
      </IonContent>
          </IonPage>
          
    );
  };
export default withRouter (TeachingDetails);