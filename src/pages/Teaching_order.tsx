import React, { useState, useRef } from 'react';
import { IonContent, IonHeader, IonPage, IonToolbar, IonButton, IonSlides,IonSlide,IonButtons,IonIcon,useIonViewWillEnter, IonImg, IonTitle, IonText, IonCard, IonCardContent, IonCardSubtitle ,IonList, IonItem, IonAvatar, IonFooter, IonLabel, IonTabButton,IonTabBar, IonGrid, IonRow, IonCol, IonCardTitle, IonCardHeader,IonBackButton } from '@ionic/react';
import { arrowBack, arrowForward, bookmarksSharp , lockClosedOutline} from 'ionicons/icons';
import './Teaching_order.scss';
import { RouteComponentProps, withRouter } from 'react-router';
import { IonReactRouter } from '@ionic/react-router';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import history from '../history';
import UserService from "../services/UserService";
import { BookmarkSharp,  HomeOutline , BagOutline, HeartOutline , PersonOutline ,ArrowBackOutline , LockClosedOutline} from 'react-ionicons'

type SomeComponentProps = RouteComponentProps;
const Teaching_order: React.FC<SomeComponentProps> = ({ history }) => {

    return (
        <IonPage id="teaching-page">
          <IonContent fullscreen>
            
                <IonButtons>
                    <IonBackButton defaultHref="/Teaching_details" className="back"/>
                    
                </IonButtons>
                <IonText className="titre_teaching">Love teaching </IonText>
              <br/>
              <br/>
              <br/>
               <IonCard className="box">
               <IonImg src="/assets/img/teaching/Romance-1.jpg" alt="romance" className="img_teaching"></IonImg>
               <IonCardTitle className="titre_card_teaching">Understanding emotions</IonCardTitle>
               <IonCardSubtitle className="date_card_teaching">21 Feb. 2021<IonIcon className="icon_locker" icon={lockClosedOutline}></IonIcon> </IonCardSubtitle>
                <IonCardContent className="titre_card_list">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel enim nec urna …</IonCardContent>
               </IonCard>
               <IonText className="center">Shop now for <IonText className="price"> R 5.00</IonText> </IonText>
              <IonButton className="payd" color="favorite" href="/Payment">Purchase</IonButton>
          </IonContent>
                
        </IonPage>
        
        
  );
}
export default withRouter (Teaching_order);