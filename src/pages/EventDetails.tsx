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


type EventItem = {
  id: string;
  src: string;
  text: string;
  date: string;
  shortdesc: string;
};
const items: EventItem[] = [{ id: '1', src: '/assets/img/israel_pilgrimage.jpg', text: '2020 Israel Pilgrimage', date:'AUG 06, 2020', shortdesc: 'The relationship between the Bible and Israel is like the body…'},
{ id: '2', src: '/assets/img/2021-viadelarosa.jpg', 
text: 'VIA DOLOROSA - The way of the cross', date:'03/04/2021 - 05/04/2021', 
shortdesc: 'The path Jesus walked from the place of his judgment to the site of his crucifixion…'},
{ id: '3', src: '/assets/img/5km-bootcamp-now-r150.jpg', text: 'HOLY LAND 5KM BOOTCAMP', date:'16/12/2020 - 16/12/2020', 
shortdesc: 'The nature of the event will be a 5km Bootcamp with obstacles at each kilometre. '},
{ id: '4', src: 'http://placekitten.com/g/200/300', text: 'a picture of a cat', date:'01 Dec. 2020', 
shortdesc: 'The relationship between the Bible and Israel is like the body…'}, ];


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
    {items.map((image, i) => (

    <IonContent fullscreen>
      <IonCard>
        <img src={image.src}/>
        <IonCardHeader>
        <IonCardTitle> {image.text} </IonCardTitle>
          <IonCardSubtitle className="date_eventdetails">{image.date}</IonCardSubtitle>
        </IonCardHeader>
        <IonCardContent> {image.shortdesc} </IonCardContent>
      </IonCard>
    </IonContent>
    ))}
        </IonPage>
        
  );

};
export default withRouter (EventDetails);