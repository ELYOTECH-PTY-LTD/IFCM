
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
    prix: string;
    total: string;
  };
  const items: EventItem[] = [{ id: '1', src: '/assets/img/israel_pilgrimage.jpg', nombre: '2', prix:'5', total:'10'},
  {id: '1', src: '/assets/img/israel_pilgrimage.jpg', nombre: '1', prix:'4', total:'10'},
  {id: '2', src: '/assets/img/israel_pilgrimage.jpg', nombre: '2', prix:'3', total:'10'},
  { id: '3', src: '/assets/img/israel_pilgrimage.jpg', nombre: '3', prix:'2', total:'10'}];
  

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
            <h3 className="quantite_order"><b> {image.nombre} </b></h3>
            <h2 className="prix_order"> {image.prix}  $ </h2>
            
            
            </IonLabel>


            </IonItem>
      ))}

 </IonList>
 <hr className="trait_simple"></hr>
              <div className="totaux_order">
                <h2 className="total_orders">Total </h2>
                <h2 className="prix_orders"> 80 $ </h2>
              </div>
              <hr className="trait_simple_order_bas"></hr>
         

          </IonContent>
                
        </IonPage>
        
        
  );
}
export default withRouter (OrderDetail);