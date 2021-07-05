import React, { useState, useRef } from 'react';
import { IonThumbnail, IonContent, IonHeader, IonPage, IonToolbar, IonButton, IonSlides,IonSlide,IonButtons,IonIcon,useIonViewWillEnter, IonImg, IonTitle, IonText, IonCard, IonCardContent, IonList, IonItem, IonAvatar, IonFooter, IonLabel, IonTabButton,IonTabBar, IonListHeader } from '@ionic/react';
import { arrowForward, bookmarkSharp } from 'ionicons/icons';
import { RouteComponentProps, withRouter } from 'react-router';
import { IonReactRouter } from '@ionic/react-router';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import UserService from "../services/UserService";
import { BookmarkSharp,  HomeOutline , BagOutline, HeartOutline , PersonOutline} from 'react-ionicons'

import { Event } from '../data/models';
import { connect } from '../data/connect';


import './Homepage.scss';

import history from '../history';
import Navbar from './Navbar';



interface OwnProps { };

interface StateProps {
  events: Event[];
}

interface DispatchProps { };

interface HomePageProps extends OwnProps, StateProps, DispatchProps { };

const Homepage: React.FC<HomePageProps> = ({ events }) => {
  console.log("Liste des evenements");
  console.log( events);
    return (
        <IonPage id="home-page">
          <IonContent fullscreen>
            <div>
              <IonImg src="/assets/img/ifcm_logo.png" className="logo"></IonImg>
              <h1 className="title">Good Morning Raoul,</h1>
            </div>
          <br/>
            <IonCard className="home-emptycard">
            <br/>
            <br/>
            <br/>
            <br/>


           <IonList className="verse" lines="none">
             <IonListHeader className="verse_titre">Verse of the day </IonListHeader>
              <IonItem className="home-item">
                <IonButton className="verse-button">
                  <IonIcon icon={bookmarkSharp} className="blue-icon" slot="start" />
                  <IonLabel className="verse_auteur"> John 14:12 </IonLabel>
                  </IonButton>
              </IonItem>
              <IonItem>
                <IonLabel className="verse_texte"> « Doing the work of Jesus Christ. »</IonLabel>
              </IonItem>            

</IonList>

<div className="today-verse-box"></div>
 

            <IonList className="event" lines="none">
            <IonListHeader className="event_titre">Upcoming Events </IonListHeader>
            <br/>
            <br/>

              {events.map((eventdetails, i) => (
        <IonItem className="event_card" key={i} routerLink={`/tabs/home/eventdetails/${eventdetails.id}`}>
            <IonThumbnail slot="start" className="img">
            <img src={eventdetails.imgsrc} className="event-img"/>
            </IonThumbnail>
            <IonLabel>
            <h3 className="date_event"><b> {eventdetails.date} </b></h3>
            <h2 className="lieu_event"> {eventdetails.title} </h2>
            <p className="text_event"> {eventdetails.shortdesc} </p>
            </IonLabel>
            </IonItem>

      ))}

 </IonList>



 </IonCard>

 <img src="./assets/img/quotes.png" className="quotes"/>

 <IonCard className="prophetic-card">
   
   <IonCardContent>
     <IonText color="light">
       <p>&nbsp; </p>
       <h5>Worries destroy the heart. Please guard your heart. Worries destroy the heart. 
No matter what we have or don't have , no matter what we are going through, if we're at peace with ourselves and those around us, we can thrive..
</h5> 
</IonText>
         
       <IonText className="prophet">
       Prophet Philip Banda     
       </IonText>
     </IonCardContent>
     
    </IonCard>

  </IonContent>


  </IonPage>
  );

};

//export default withRouter (Homepage);


export default connect<OwnProps, StateProps, DispatchProps>({
  mapStateToProps: (state) => ({
    events: state.data.events
  }),
  mapDispatchToProps: {
  },
  component: React.memo(Homepage)
});