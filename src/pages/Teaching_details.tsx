import React, { useState, useRef } from 'react';
import { IonContent, IonHeader, IonPage, IonToolbar, IonButton, IonSlides,IonSlide,IonButtons,IonIcon,useIonViewWillEnter, IonImg, IonTitle, IonText, IonCard, IonCardContent, IonCardSubtitle ,IonList, IonItem, IonAvatar, IonFooter, IonLabel, IonTabButton,IonTabBar, IonGrid, IonRow, IonCol, IonCardTitle, IonCardHeader,IonBackButton } from '@ionic/react';
import { arrowBack, arrowForward, bookmarksSharp } from 'ionicons/icons';
import './Teaching_details.scss';
import { RouteComponentProps, withRouter } from 'react-router';
import { IonReactRouter } from '@ionic/react-router';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import history from '../history';
import UserService from "../services/UserService";
import { BookmarkSharp,  HomeOutline , BagOutline, HeartOutline , PersonOutline ,ArrowBackOutline } from 'react-ionicons'

type SomeComponentProps = RouteComponentProps;
const Teaching_details: React.FC<SomeComponentProps> = ({ history }) => {

    return (
        <IonPage id="teaching-page">
          <IonContent fullscreen>
            <IonCard className="box">
            <IonButtons>
                    <IonBackButton defaultHref="/Teaching" className="back"/>
                </IonButtons>
              
                <img src="/assets/img/teaching/Romance-1.jpg" alt="romance" className="img_love"></img>
                <div className="Texte_teaching">
                <IonText className="text_catégorie">
                  Teaching
                </IonText>
                <IonCardSubtitle className="text_caté">Love</IonCardSubtitle>
                <IonCardHeader className="text_nombre">5 texts</IonCardHeader>
                </div>
               <IonText className="text_title">
               All texts 
               </IonText>
               <p>
               &nbsp;
               </p>
               <IonList>
                 <IonCard href="/Teaching_list" className="card">
                   <img src="/assets/img/teaching/image002.png" className="img_card"></img>
                   <IonText className="text_card">Developing the strengths  </IonText><br/>
                   <IonText className="date_card">01 Dec. 2020  </IonText>
                 </IonCard>
                 <IonCard href="/Teaching_list" className="card">
                   <img src="/assets/img/teaching/image002.png" className="img_card"></img>
                   <IonText className="text_card">Developing the strengths  </IonText><br/>
                   <IonText className="date_card">01 Dec. 2020  </IonText>
                 </IonCard>
                 <IonCard href="/Teaching_list" className="card">
                   <img src="/assets/img/teaching/image002.png" className="img_card"></img>
                   <IonText className="text_card">Developing the strengths  </IonText><br/>
                   <IonText className="date_card">01 Dec. 2020  </IonText>
                 </IonCard>
               </IonList>
            </IonCard>
          </IonContent>
                
        </IonPage>
        
  );
}
export default withRouter (Teaching_details);