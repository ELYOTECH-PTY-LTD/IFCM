import React, { useState, useRef } from 'react';
import { IonContent, IonHeader, IonPage, IonToolbar, IonButton, IonSlides,IonSlide,IonButtons,IonIcon,useIonViewWillEnter, IonImg, IonTitle, IonText, IonCard, IonCardContent, IonCardSubtitle ,IonList, IonItem, IonAvatar, IonFooter, IonLabel, IonTabButton,IonTabBar, IonGrid, IonRow, IonCol, IonCardTitle, IonCardHeader,IonBackButton } from '@ionic/react';
import { arrowBack, arrowForward, bookmarksSharp , lockClosedOutline} from 'ionicons/icons';
import './TeachingOrder.scss';
import { RouteComponentProps, withRouter } from 'react-router';
import { IonReactRouter } from '@ionic/react-router';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import history from '../history';
import UserService from "../services/UserService";
import { BookmarkSharp,  HomeOutline , BagOutline, HeartOutline , PersonOutline ,ArrowBackOutline , LockClosedOutline} from 'react-ionicons'

type SomeComponentProps = RouteComponentProps;
const TeachingOrder: React.FC<SomeComponentProps> = ({ history }) => {

    return (
        <IonPage id="teachingorder-page">
          <IonContent fullscreen>
            
                <IonButtons>
                    <IonBackButton defaultHref="/TeachingDetails" className="back"/>
                </IonButtons>
                <IonText className="titre_teaching">Love teaching </IonText>
              <br/>
              <br/>
              <br/>
               <IonCard className="box_card">
               <IonImg src="/assets/img/Love.jpg" alt="romance" className="img_teaching"></IonImg>
               <IonCardTitle className="titre_card_teaching">Understanding emotions</IonCardTitle>
               <IonCardSubtitle className="date_card_teaching">21 Feb. 2021<IonIcon className="icon_locker" icon={lockClosedOutline}></IonIcon> </IonCardSubtitle>
                <IonCardContent className="titre_card_list">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel enim nec urna …</IonCardContent>
               </IonCard>
               <IonText className="center shop_text">Shop now for <IonText className="price"> R 5.00</IonText> </IonText>
              <IonButton className="payd" color="favorite" href="/paymentcarddetails" >Purchase</IonButton>
          </IonContent>
                
        </IonPage>
        
        
  );
}
export default withRouter (TeachingOrder);