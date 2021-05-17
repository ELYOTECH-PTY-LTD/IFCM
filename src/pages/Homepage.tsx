import React, { useState, useRef } from 'react';
import { IonThumbnail, IonContent, IonHeader, IonPage, IonToolbar, IonButton, IonSlides,IonSlide,IonButtons,IonIcon,useIonViewWillEnter, IonImg, IonTitle, IonText, IonCard, IonCardContent, IonList, IonItem, IonAvatar, IonFooter, IonLabel, IonTabButton,IonTabBar } from '@ionic/react';
import { arrowForward, bookmarkSharp } from 'ionicons/icons';
import { RouteComponentProps, withRouter } from 'react-router';
import { IonReactRouter } from '@ionic/react-router';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import UserService from "../services/UserService";
import { BookmarkSharp,  HomeOutline , BagOutline, HeartOutline , PersonOutline} from 'react-ionicons'

import './Homepage.scss';

import history from '../history';
import Navbar from './Navbar';

type EventItem = {
  src: string;
  text: string;
  date: string;
  shortdesc: string;
};
const items: EventItem[] = [{ src: '/assets/img/israel_pilgrimage.jpg', text: '2020 Israel Pilgrimage', date:'AUG 06, 2020', 
shortdesc: 'The relationship between the Bible and Israel is like the body…'},{ src: '/assets/img/2021-viadelarosa.jpg', 
text: 'VIA DOLOROSA - The way of the cross', date:'03/04/2021 - 05/04/2021', 
shortdesc: 'The path Jesus walked from the place of his judgment to the site of his crucifixion…'},
{ src: '/assets/img/5km-bootcamp-now-r150.jpg', text: 'HOLY LAND 5KM BOOTCAMP', date:'16/12/2020 - 16/12/2020', 
shortdesc: 'The nature of the event will be a 5km Bootcamp with obstacles at each kilometre. '},
{ src: 'http://placekitten.com/g/200/300', text: 'a picture of a cat', date:'01 Dec. 2020', 
shortdesc: 'The relationship between the Bible and Israel is like the body…'}, ];


type SomeComponentProps = RouteComponentProps;
const Homepage: React.FC<SomeComponentProps> = ({ history }) => {

    return (
        <IonPage id="home-page">
          <IonContent fullscreen>
            <div>
              <IonImg src="/assets/img/ifcm_logo.png" className="logo"></IonImg>
              <h1 className="title">Good Morning Raoul,</h1>
            </div>
          
            <IonCard className="emptycard">
             <IonCardContent></IonCardContent>
            </IonCard>
            <img src="./assets/img/quotes.png" className="quotes"/>

            <IonCard className="prophetic-card">
   
          <IonCardContent>
            <IonText color="light">
              <p>&nbsp; </p>
              <h5>Worries destroy the heart. Please guard your heart. Worries destroy the heart. 
              SHALOM !!
It is the blessing we all really want, and when we think about our life and our World, we realize that SHALOM---PEACE; is all we really need. 
No matter what we have or don't have , no matter what we are going through, if we're at peace with ourselves and those around us, we can thrive..
</h5> 
</IonText>
                
              <IonText className="prophet">
              Prophet Philip Banda     
              </IonText>
            </IonCardContent>
            
           </IonCard>

           <IonList className="verse">
              <h2 className="verse_titre">Verse of the day </h2>
              <IonText className="verse_rectangle">
              <IonIcon icon={bookmarkSharp} className="blue-icon" slot="start" />
                <IonText className="verse_auteur"> John 14:12 </IonText>
              </IonText><br/>
              <IonText className="verse_texte">« Doing the work of Jesus Christ. »</IonText>
            </IonList>

 

            <IonList className="event">
              <h3 className="event_titre">Upcoming Events</h3>


              {items.map((image, i) => (
        <IonItem className="event_card" key={i} href="/tabs/home/EventDetails">
            <IonThumbnail slot="start" className="img">
            <img src={image.src} className="event-img"/>
            </IonThumbnail>
            <IonLabel>
            <h3 className="date_event"><b> {image.date} </b></h3>
            <h2 className="lieu_event"> {image.text} </h2>
            <p className="text_event"> {image.shortdesc} </p>

        
            </IonLabel>


            </IonItem>
      ))}

 </IonList>
  </IonContent>

  </IonPage>
  );
};

export default withRouter (Homepage);