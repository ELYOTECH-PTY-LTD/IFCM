import React, { useState, useRef } from 'react';
import { IonMenuButton, IonBackButton, IonContent, IonHeader, IonPage, IonToolbar, IonButton, IonSlides,IonSlide,IonButtons,IonIcon,useIonViewWillEnter, IonImg, IonTitle, IonText, IonCard, IonCardContent, IonCardSubtitle ,IonList, IonItem, IonAvatar, IonFooter, IonLabel, IonTabButton,IonTabBar, IonCardTitle, IonCardHeader } from '@ionic/react';
import { arrowForward, bookmarksSharp, chevronBackOutline } from 'ionicons/icons';
import './EventDetails.scss';
import { RouteComponentProps, withRouter } from 'react-router';
import { IonReactRouter } from '@ionic/react-router';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import history from '../history';
import UserService from "../services/UserService";
import { BookmarkSharp,  HomeOutline , BagOutline, HeartOutline , PersonOutline} from 'react-ionicons'

type SomeComponentProps = RouteComponentProps;
const EventDetails: React.FC<SomeComponentProps> = ({ history }) => {

    return (
<IonPage id="eventdetails-page">


    {/*-- Back button with a default href --*/}
    <IonHeader translucent no-border>
      <IonToolbar>
        <IonButtons slot="start">
        <IonBackButton icon={chevronBackOutline} defaultHref="/tabs/home" />
        </IonButtons>
        <IonTitle className="eventdetailstitle"> Upcoming Events</IonTitle>
      </IonToolbar>
    </IonHeader>

{/* <IonHeader translucent>
      <IonToolbar>
        <IonTitle>Event Details </IonTitle>
      </IonToolbar>
</IonHeader> 






<IonContent>
    -- Default back button --
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton />
        </IonButtons>
      </IonToolbar>
    </IonHeader>


    {/*-- Back button with custom text and icon --*
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton text="buttonText" icon="buttonIcon" />
        </IonButtons>
      </IonToolbar>
    </IonHeader>

    {/*-- Back button with no text and custom icon --*
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton text="" icon="add" />
        </IonButtons>
      </IonToolbar>
    </IonHeader>

    {/*-- Danger back button next to a menu button --*
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonMenuButton />
          <IonBackButton color="danger" />
        </IonButtons>
      </IonToolbar>
    </IonHeader>
  </IonContent>

*/}


    <IonContent fullscreen>
      <IonCard>
        <img src="/assets/img/israel_pilgrimage.jpg" />
        <IonCardHeader>
        <IonCardTitle> 2020 Isreal Pimlgrinage </IonCardTitle>
          <IonCardSubtitle className="date_eventdetails">AUG 06, 2020 - AUG 13, 2020 </IonCardSubtitle>
        </IonCardHeader>
<IonCardContent> 
The relationship between the Bible and Israel is like the body soul. The body needs the soul to bring life. The body minus the soul is dust. You cannot separate the Bible and Israel. They are one unit. Join us this year and remember the world revolves around Jerusalem. It is not like any other city in the world. Jerusalem is a fruitful land. It was in Jerusalem the last supper took place, it was in Jerusalem that Judas betrayed Jesus, it was at the outskirts of Jerusalem that Jesus Christ was crucified. The ultimate sacrifice was done and humanity saved. It is indeed a good year. For more information email israeltrip@impactforchristsa.com </IonCardContent>
      </IonCard>
    </IonContent>
        </IonPage>
        
  );
}
export default withRouter (EventDetails);