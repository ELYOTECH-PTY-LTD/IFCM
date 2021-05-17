import React, { useState, useRef } from 'react';
import { IonContent, IonHeader, IonPage, IonToolbar, IonButton, IonSlides,IonSlide,IonButtons,IonIcon,useIonViewWillEnter, IonImg, IonTitle, IonText, IonCard, IonCardContent, IonCardSubtitle ,IonList, IonItem, IonAvatar, IonFooter, IonLabel, IonTabButton,IonTabBar, IonCardTitle, IonCardHeader } from '@ionic/react';
import { arrowForward, bookmarksSharp } from 'ionicons/icons';
import './TeachingDetails.scss';
import { RouteComponentProps, withRouter } from 'react-router';
import { IonReactRouter } from '@ionic/react-router';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import history from '../history';
import UserService from "../services/UserService";
import { BookmarkSharp,  HomeOutline , BagOutline, HeartOutline , PersonOutline} from 'react-ionicons'

type SomeComponentProps = RouteComponentProps;
const TeachingDetails: React.FC<SomeComponentProps> = ({ history }) => {

    return (
<IonPage id="teachingdetails-page">
    <IonHeader translucent>
      <IonToolbar>
        <IonTitle>Card </IonTitle>
      </IonToolbar>
</IonHeader>
    <IonContent fullscreen>
      <IonCard>
        <img src="/assets/img/Love.jpg" />
        <IonCardHeader>
          <IonCardSubtitle>Destination</IonCardSubtitle>
          <IonCardTitle>Madison, WI</IonCardTitle>
        </IonCardHeader>
<IonCardContent> 
 Founded in 1829 on an isthmus between Lake Monona and Lake Mendota, Madison was named the capital of the Wisconsin Territory in 1836.
 </IonCardContent>
      </IonCard>
    </IonContent>
        </IonPage>
        
  );
}
export default withRouter (TeachingDetails);