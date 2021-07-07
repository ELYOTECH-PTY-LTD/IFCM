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

import { Event } from '../data/models';
import { connect } from '../data/connect';
import * as selectors from '../data/selectors';


interface EventDetailsProps {
  eventdetail: Event;
}


interface OwnProps extends RouteComponentProps {
  eventdetail: Event;
};

interface StateProps {};

interface DispatchProps {};

interface EventDetailProps extends OwnProps, StateProps, DispatchProps {};

const EventDetails: React.FC<EventDetailProps> = ({ eventdetail }) => {

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
    <IonContent fullscreen>
      <IonCard className="event-details-card">
        <img src={eventdetail.imgsrc} alt={eventdetail.location} className="eventdetails-img"/>
        <IonCardHeader>
        <IonCardTitle> {eventdetail.title} </IonCardTitle>
          <IonCardSubtitle className="date_eventdetails">{eventdetail.date}</IonCardSubtitle>
          <IonCardSubtitle>{eventdetail.location}</IonCardSubtitle>
          <IonCardSubtitle>
              <IonText>{eventdetail.address}</IonText>
          </IonCardSubtitle>

        </IonCardHeader>
        <IonCardContent> {eventdetail.description} </IonCardContent>
        
      </IonCard>
    </IonContent>
        </IonPage>
        
  );

};

//export default  EventDetails;


export default connect({
  mapStateToProps: (state, ownProps) => ({
    eventdetail: selectors.getEvent(state, ownProps)
  }),
  component: EventDetails
});

