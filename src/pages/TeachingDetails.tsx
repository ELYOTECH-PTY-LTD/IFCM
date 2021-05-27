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

type Item = {
  src: string;
  title: string;
  date: string;
  text:string;
};
const items: Item[] = [{ 
src: '/assets/img/Love.jpg', title: 'Developping the strengths', date:'Free text - 01 Dec. 2020',text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel enim nec urna malesuada viverra. Nullam at massa commodo, sollicitudin risus quis, iaculis mauris. Pellentesque dictum vel elit in semper. Vestibulum vitae velit id enim sagittis consectetur dignissim sit amet est. Praesent vitae posuere nisi, non porttitor mi.'},];


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
          {items.map((image, i) => (
              <IonCard className="box_shadox">
              <img src={image.src}/>
              <IonCardHeader>
              <IonCardTitle>{image.title}</IonCardTitle>
                <IonCardSubtitle className="date_eventdetails">{image.date}</IonCardSubtitle>
              </IonCardHeader>
              <IonCardContent> 
              {image.text}
              </IonCardContent>
              </IonCard>
          ))}
                
              </IonContent>
                  </IonPage>
          
    );
  };
export default withRouter (TeachingDetails);