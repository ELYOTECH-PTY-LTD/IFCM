
import React, { useState, useRef } from 'react';
import { IonListHeader,IonThumbnail,IonContent, IonHeader, IonPage, IonToolbar, IonButton, IonSlides,IonSlide,IonButtons,IonIcon,useIonViewWillEnter, IonImg, IonTitle, IonText, IonCard, IonCardContent, IonCardSubtitle ,IonList, IonItem, IonAvatar, IonFooter, IonLabel, IonTabButton,IonTabBar, IonGrid, IonRow, IonCol, IonCardTitle, IonCardHeader,IonBackButton} from '@ionic/react';
import { arrowBack, arrowForward, bookmarksSharp , lockClosedOutline} from 'ionicons/icons';
import './NotificationList.scss';
import { RouteComponentProps, withRouter } from 'react-router';
import { IonReactRouter } from '@ionic/react-router';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import history from '../history';
import UserService from "../services/UserService";
import { BookmarkSharp,  HomeOutline , BagOutline, HeartOutline , PersonOutline ,ArrowBackOutline , LockClosedOutline ,ArrowForwardOutline} from 'react-ionicons'
type EventItem = {
    id: string;
    src: string;
    titre: string;
    text: string;
  };
  const items: EventItem[] = [{ id: '1', src: '/assets/img/israel_pilgrimage.jpg', titre: '2', text:'5'},
  {id: '1', src: '/assets/img/israel_pilgrimage.jpg', titre: '1', text:'4'},
  {id: '2', src: '/assets/img/israel_pilgrimage.jpg', titre: '2', text:'3'},
  { id: '3', src: '/assets/img/israel_pilgrimage.jpg', titre: '3', text:'2'}];
  

type SomeComponentProps = RouteComponentProps;
const Setting: React.FC<SomeComponentProps> = ({ history }) => {

    return (
        <IonPage id="teachingorder-page">
          <IonContent fullscreen>
            
                <IonButtons>
                    <IonBackButton defaultHref="/tabs/userprofile" className="back"/>
                </IonButtons>
                <IonText className="titre_order">  Setting Pages  </IonText>
              <br/>
              <br/>
              <br/>
              <hr className="trait_simple"></hr>
              <IonList className="event" lines="none">
            <IonListHeader className="titre_orders"> Settings </IonListHeader>
            <br/>
            <br/>
            <IonItem>
              
            </IonItem>

 </IonList>

         

          </IonContent>
                
        </IonPage>
        
        
  );
}
export default withRouter (Setting);