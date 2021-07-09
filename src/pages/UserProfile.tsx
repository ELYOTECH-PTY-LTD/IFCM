import React, { useState, useRef } from 'react';
import { IonRange, IonInput, IonToggle, IonSelectOption, IonSelect, IonDatetime, IonThumbnail, IonCheckbox, IonRow, IonCol, IonGrid, IonCardTitle, IonSegment, IonSegmentButton, IonContent, IonHeader, IonPage, IonToolbar, IonButton, IonSlides,IonSlide,IonButtons,IonIcon,useIonViewWillEnter, IonImg, IonTitle, IonText, IonCard, IonCardContent, IonCardSubtitle ,IonList, IonItem, IonAvatar, IonFooter, IonLabel, IonTabButton,IonTabBar, IonRouterLink } from '@ionic/react';
import {  navigate, informationCircle, checkmarkCircle, shuffle, closeCircle, bagOutline, arrowForward, bookmarksSharp, call, home, heart, pin, star, globe, basket, camera, bookmark, basketOutline, notificationsOutline, settingsOutline, helpOutline, helpCircleOutline, information, informationCircleOutline  } from 'ionicons/icons';
import './UserProfile.scss';
import { RouteComponentProps, withRouter } from 'react-router';
import { IonReactRouter } from '@ionic/react-router';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import history from '../history';
import UserService from "../services/UserService";
import { BookmarkSharp,  HomeOutline , BagOutline, HeartOutline , PersonOutline} from 'react-ionicons'

type SomeComponentProps = RouteComponentProps;
const UserProfile: React.FC<SomeComponentProps> = ({ history }) => {


    type UserData = {
        id : string
        src: string;
        fullname: string;
        email: string;
      };
      const items: UserData[] = [{ id :'1', src: '/assets/img/raoul-tchudjo.png', fullname: 'Raoul Tchudjo', email:'rtchudjo@gmail.com'}];

    return (
        <IonPage id="userprofile-page">
          <IonContent fullscreen>
              <IonCard className="teaching-title" >
                  <IonCardTitle className="userprofile-title">Your account</IonCardTitle>
                  <IonCardSubtitle className="userprofile-subtitle">Profile informations and settings </IonCardSubtitle>
              </IonCard>
  
            <IonCard className="emptycard">
                <p>&nbsp;</p>
                <br/>
                
                {/*-- Default Item --*/}
   


        {items.map((image) => (
        <IonItem className="user_card" lines="none">
            <IonAvatar slot="start" className="usercard-img">
            <img src={image.src} />
            </IonAvatar>
            <IonLabel>
            <h1 className="username"><b> {image.fullname} </b></h1>
            <h3 className="email"> {image.email} </h3>
            <IonRouterLink className="text-edit" routerLink={`/tabs/userprofile/userdetails/${image.id}`}> Edit info</IonRouterLink>
            </IonLabel>
            </IonItem>
))}
<br/>
            <IonItem lines="full"/>  
        <IonItem lines="full" routerLink="/tabs/userprofile/orderlist">
            <IonIcon icon={bagOutline} slot="start" className="user-icon"  />
          <IonLabel slot="end"> Orders</IonLabel>
        
        </IonItem>


    <IonList lines="none">

          <IonItem routerLink="/tabs/userprofile/notificationslist">
            <IonIcon icon={notificationsOutline} slot="start" className="user-icon"  />
          <IonLabel slot="end"> Notifications</IonLabel>
         </IonItem>
         <br/>

         <IonItem routerLink="/tabs/userprofile/settings">
            <IonIcon icon={settingsOutline} slot="start" className="user-icon"  />
          <IonLabel slot="end"> Settings</IonLabel>
         </IonItem>
            <br/>
            <IonItem routerLink="/tabs/userprofile/help" lines="full">
            <IonIcon icon={helpCircleOutline} slot="start" className="user-icon"  />
          <IonLabel slot="end"> Help</IonLabel>
          </IonItem>

    </IonList>

    <br/>
            <IonItem routerLink="/tabs/userprofile/aboutus" lines="none">
            <IonIcon icon={informationCircleOutline} slot="start" className="user-icon"  />
          <IonLabel slot="end"> About us</IonLabel>
          </IonItem>

<br/>
            <IonButton className="user-logout" shape="round" expand="block" href="#">
                Logout
            </IonButton>

    
</IonCard>
          </IonContent>
                
        </IonPage>
        
  );
}
export default withRouter (UserProfile);