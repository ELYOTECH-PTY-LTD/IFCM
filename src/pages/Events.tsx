import React, { useState, useRef } from 'react';
import { IonContent, IonHeader, IonPage, IonToolbar, IonButton, IonSlides,IonSlide,IonButtons,IonIcon,useIonViewWillEnter, IonImg, IonTitle, IonText, IonCard, IonCardContent, IonList, IonItem, IonAvatar, IonFooter, IonLabel, IonTabButton,IonTabBar,IonBackButton,IonCardHeader,IonCardTitle,IonCardSubtitle } from '@ionic/react';
import { arrowForward, bookmarksSharp, pricetagOutline } from 'ionicons/icons';
import './Events.scss';
import { RouteComponentProps, withRouter } from 'react-router';
import { IonReactRouter } from '@ionic/react-router';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import history from '../history';
import UserService from "../services/UserService";
import { BookmarkSharp,  HomeOutline , BagOutline, HeartOutline , PersonOutline, LocationOutline, PricetagOutline} from 'react-ionicons'
import Navbar from '../pages/Navbar'
type SomeComponentProps = RouteComponentProps;
const Events: React.FC<SomeComponentProps> = ({ history }) => {

    return (
        <IonPage id="events-page">
          <IonContent fullscreen>
          <IonToolbar>
                <IonButtons slot="start" className="back">
                    <IonBackButton defaultHref="/Home" className="black"/>
                </IonButtons>
                <IonText className="titre ion-text-center"> Upcoming Events</IonText>
            </IonToolbar>
            <IonList>
                <IonCard className="border">
                <img src="/assets/img/holyland.png" className="img_events"></img>
                
                
                <IonCardTitle className="lieux_events">2020 Israel Pilgrimage</IonCardTitle>
                <IonCardSubtitle className="lieux_dates">AUG 06, 2020 - AUG 13, 2020</IonCardSubtitle>

            <IonCardContent className="text_events">
                 The relationship between the Bible and Israel is like the body soul. The body needs the soul to bring life. The body minus the soul is dust. You cannot separate the Bible and Israel. They are one unit. Join us this year and remember the world revolves around Jerusalem. It is not like any other city in the world. Jerusalem is a fruitful land. It was in Jerusalem the last supper took place, it was in Jerusalem that Judas betrayed Jesus, it was at the outskirts of Jerusalem that Jesus Christ was crucified. The ultimate sacrifice was done and humanity saved. It is indeed a good year. For more information email israeltrip@impactforchristsa.com
            </IonCardContent>
            </IonCard>
            </IonList>
            <IonList className="info_div">
            <IonIcon name="heart"></IonIcon>
               <LocationOutline cssClasses="icon_location"/>
               <IonText className="text_info"><b>Venue : </b> Holy Land</IonText><br/>
               <IonText className="text_infos">Church of the Holy Sepulchre</IonText><br/>
               <IonIcon name="heart"></IonIcon>
              <PricetagOutline cssClasses="icon_etiquette"/>
              <IonText className="price">R 230</IonText>
            </IonList>
              <IonList>
              <IonButton expand="block" className="button_orange" color="favorite">Contact Us</IonButton>
              </IonList>
          </IonContent>
        </IonPage>
        
  );
}
export default withRouter (Events);