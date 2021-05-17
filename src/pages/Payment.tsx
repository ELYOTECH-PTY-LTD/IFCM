import React, { useState, useRef } from 'react';
import { IonContent, IonHeader, IonPage, IonToolbar, IonButton, IonSlides,IonSlide,IonButtons,IonIcon,useIonViewWillEnter, IonImg, IonTitle, IonText, IonCard, IonCardContent, IonCardSubtitle ,IonList, IonItem, IonAvatar, IonFooter, IonLabel, IonTabButton,IonTabBar, IonGrid, IonRow, IonCol, IonCardTitle, IonCardHeader,IonBackButton } from '@ionic/react';
import { arrowBack, arrowForward, bookmarksSharp } from 'ionicons/icons';
import './Payment.scss';
import { RouteComponentProps, withRouter } from 'react-router';
import { IonReactRouter } from '@ionic/react-router';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import history from '../history';
import UserService from "../services/UserService";
import { BookmarkSharp,  HomeOutline , BagOutline, HeartOutline , PersonOutline ,ArrowBackOutline } from 'react-ionicons'

type SomeComponentProps = RouteComponentProps;
const Payment: React.FC<SomeComponentProps> = ({ history }) => {

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
               <IonCardTitle className="titre_card_teaching">Developping the strengths</IonCardTitle>
               <IonCardSubtitle className="date_card_teaching">Free text - 01 Dec. 2020 </IonCardSubtitle>
                <IonCardContent className="text_card_teaching">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel enim nec urna malesuada viverra. Nullam at massa commodo, sollicitudin risus quis, iaculis mauris. Pellentesque dictum vel elit in semper. Vestibulum vitae velit id enim sagittis consectetur dignissim sit amet est. Praesent vitae posuere nisi, non porttitor mi. </IonCardContent>
               </IonCard>
          </IonContent>
                
        </IonPage>
        
        
  );
}
export default withRouter (Payment);