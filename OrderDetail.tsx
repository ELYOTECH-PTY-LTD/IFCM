
import React, { useState, useRef } from 'react';
import { IonListHeader,IonThumbnail,IonContent, IonHeader, IonPage, IonToolbar, IonButton, IonSlides,IonSlide,IonButtons,IonIcon,useIonViewWillEnter, IonImg, IonTitle, IonText, IonCard, IonCardContent, IonCardSubtitle ,IonList, IonItem, IonAvatar, IonFooter, IonLabel, IonTabButton,IonTabBar, IonGrid, IonRow, IonCol, IonCardTitle, IonCardHeader,IonBackButton} from '@ionic/react';
import { arrowBack, arrowForward, bookmarksSharp , lockClosedOutline} from 'ionicons/icons';
import './OrderDetail.scss';
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
    nombre: string;
    categorie: string;

  };
  const items: EventItem[] = [{ id: '1', src: '/assets/img/israel_pilgrimage.jpg', nombre: '2', categorie:'Music'},
  {id: '1', src: '/assets/img/israel_pilgrimage.jpg', nombre: '2', categorie:'Music'},
  {id: '1', src: '/assets/img/israel_pilgrimage.jpg', nombre: '2', categorie:'Music'},
  { id: '1', src: '/assets/img/israel_pilgrimage.jpg', nombre: '2', categorie:'Music'}];
  

type SomeComponentProps = RouteComponentProps;
const OrderDetail: React.FC<SomeComponentProps> = ({ history }) => {

    return (
        <IonPage id="teachingorder-page">
          <IonContent fullscreen>
            
                <IonButtons>
                    <IonBackButton defaultHref="/tabs/userprofile" className="back"/>
                </IonButtons>
                <IonText className="titre_order">  Your Order  </IonText>
              <br/>
              <br/>
              <br/>
              <hr className="trait_simple"></hr>
              <IonList className="event" lines="none">
            <IonListHeader className="titre_orders">Order N° </IonListHeader>
            <br/>
            <br/>


              {items.map((image, i) => (
        <IonItem className="event_card" key={i} routerLink={`/tabs/userprofile/orderslist/${image.id}`}>
            <IonThumbnail slot="start" className="order_img">
            <img src={image.src} className="event-img"/>
            </IonThumbnail>
            <IonLabel>
              <br/>
            <h3 className="date_event"><b> {image.categorie} </b></h3>
            <h2 className="lieu_event"> {image.nombre} </h2>
            <IonButton className="button_order"> </IonButton>
            <hr className="trait_simple"></hr>
            
            </IonLabel>


            </IonItem>
      ))}

 </IonList>

              

         

          </IonContent>
                
        </IonPage>
        
        
  );
}
export default withRouter (OrderDetail);