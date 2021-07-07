import React, { useState, useRef } from 'react';
import { ActionSheetButton } from '@ionic/core';
import { IonThumbnail, IonContent, IonHeader, IonPage, IonToolbar, IonFab, IonFabList, IonFabButton, IonButton, IonSlides,IonSlide,IonButtons,IonIcon,useIonViewWillEnter, IonImg, IonTitle, IonText, IonCard, IonCardContent, IonList, IonItem, IonAvatar, IonFooter, IonLabel, IonTabButton,IonTabBar, IonListHeader } from '@ionic/react';
import { arrowForward, bookmarkSharp, shareSharp , shareOutline, shareSocialOutline, chevronBackCircleOutline, copyOutline} from 'ionicons/icons';
import { RouteComponentProps, withRouter } from 'react-router';
import { IonReactRouter } from '@ionic/react-router';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import UserService from "../services/UserService";
import { BookmarkSharp,  HomeOutline , BagOutline, HeartOutline , PersonOutline, ShareSocialOutline} from 'react-ionicons'

import { Event, PropheticMessage, VerseOfToday } from '../data/models';
import { connect } from '../data/connect';


import './Homepage.scss';

import history from '../history';
import Navbar from './Navbar';



interface OwnProps { };

interface StateProps {
  events: Event[];
  propheticmessage : PropheticMessage;
  verseoftoday : VerseOfToday;
}

interface DispatchProps { };

interface HomePageProps extends OwnProps, StateProps, DispatchProps { };

const Homepage: React.FC<HomePageProps> = ({ events, propheticmessage, verseoftoday }) => {
  const [showActionSheet, setShowActionSheet] = useState(false);
  const [actionSheetButtons, setActionSheetButtons] = useState<ActionSheetButton[]>([]);
  const [actionSheetHeader, setActionSheetHeader] = useState('');

  console.log("Liste des variables");
  console.log( events);
  console.log( propheticmessage);
  console.log( verseoftoday);
  function openPropheteicMsgShare(propheticmessage: PropheticMessage) {
    setActionSheetButtons([
      {
        text: 'Copy Link',
        handler: () => {
          console.log('Copy Link clicked');
        }
      },
      {
        text: 'Share via ...',
        handler: () => {
          console.log('Share via clicked');
        }
      },
      {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }
    ]);
    setActionSheetHeader(`Share ${propheticmessage.text}`);
    setShowActionSheet(true);
  }


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
           <IonList className="verse" lines="none">
             <IonListHeader className="verse_titre">Verse of the day </IonListHeader>
              <IonItem className="home-item">
                <IonButton className="verse-button">
                  <IonIcon icon={bookmarkSharp} className="blue-icon" slot="start" />
                  <IonLabel className="verse_auteur"> {verseoftoday.verse} </IonLabel>
                  </IonButton>
              </IonItem>
              <IonItem>
                <IonLabel className="verse_texte"> «`{verseoftoday.text}`»</IonLabel>
              </IonItem>            

</IonList>
</IonCard>


<div className="today-verse-box"></div>
 

            <IonList className="event" lines="none">
            <IonListHeader className="event_titre">Upcoming Events </IonListHeader>
            <br/>
            <br/>
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


 <img src="./assets/img/quotes.png" className="quotes"/>

 <IonCard className="prophetic-card">
   
   <IonCardContent>
     <IonText color="light" className="prophetic-message">
       <h4>{propheticmessage.title} </h4><br/>
       <h5>{propheticmessage.text} </h5> 
</IonText>
<br/>
<br/>

       <IonText className="prophet">  <br/>
{propheticmessage.author}  </IonText>
<br/>
<br/>

       <IonFab vertical="bottom" horizontal="end" slot="fixed">
        <IonFabButton>
          <IonIcon icon={chevronBackCircleOutline}></IonIcon>
        </IonFabButton>
        <IonFabList side="top">
          <IonFabButton> 
            <IonIcon className="prophet-icon" icon={shareSocialOutline}  onClick={() => openPropheteicMsgShare(propheticmessage)}></IonIcon>
          </IonFabButton>
          <IonFabButton>
            <IonIcon className="prophet-icon" icon={copyOutline} onClick={() => openPropheteicMsgShare(propheticmessage)}></IonIcon>
          </IonFabButton>
        </IonFabList>
      </IonFab>
   
      
 </IonCardContent>
     
    </IonCard>


  </IonContent>


  </IonPage>
  );

};

//export default withRouter (Homepage);


export default connect<OwnProps, StateProps, DispatchProps>({
  mapStateToProps: (state) => ({
    events: state.data.events,
    propheticmessage : state.data.propheticmessage,
    verseoftoday : state.data.verseoftoday
  }),
  mapDispatchToProps: {
  },
  component: React.memo(Homepage)
});