import React, { useState, useRef } from 'react';
import {  IonBackButton, IonDatetime, IonSelectOption, IonRange, IonCheckbox, IonSelect, IonToggle, IonInput, IonGrid, IonRow, IonCol, IonThumbnail, IonContent, IonHeader, IonPage, IonToolbar, IonButton, IonSlides,IonSlide,IonButtons,IonIcon,useIonViewWillEnter, IonImg, IonTitle, IonText, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonCardSubtitle ,IonList, IonItem, IonAvatar, IonFooter, IonLabel, IonTabButton,IonTabBar } from '@ionic/react';
import { lockClosedOutline, arrowForward, bookmarksSharp } from 'ionicons/icons';
import './TeachingList.scss';
import { RouteComponentProps, withRouter } from 'react-router';
import { IonReactRouter } from '@ionic/react-router';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import history from '../history';
import UserService from "../services/UserService";
import { pin, wifi, wine, warning, walk, informationCircle, navigate, star, checkmarkCircle, shuffle, home, closeCircle } from 'ionicons/icons';
import { BookmarkSharp,  HomeOutline , BagOutline, HeartOutline , PersonOutline, LockClosedOutline} from 'react-ionicons'

type SomeComponentProps = RouteComponentProps;
const TeachingList: React.FC<SomeComponentProps> = ({ history }) => {

type Item = {
        src: string;
        text: string;
        date: string;
      };
const items: Item[] = [{ src: '/assets/img/black-family1.jpg', text: 'Developing the strengths', date:'01 Dec. 2020'},{ src: '/assets/img/black-family.jpg', text: 'a picture of a cat', date:'01 Dec. 2020'},{ src: 'http://placekitten.com/g/200/300', text: 'a picture of a cat', date:'01 Dec. 2020'},{ src: 'http://placekitten.com/g/200/300', text: 'a picture of a cat', date:'01 Dec. 2020'}, ];

    return (
      <IonPage id="teachinglist-page">
      <IonContent fullscreen>
        <IonCard className="box">
        <IonButtons>
                <IonBackButton defaultHref="/tabs/teaching" className="back"/>
            </IonButtons>
          
            <img src="/assets/img/Love.jpg" alt="romance" className="img_love"></img>
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
             <IonCard href="/tabs/teaching/TeachingDetails" className="card_teach">
               <img src="/assets/img/Black-family.jpg" className="img_card"></img>
               <IonText className="text_card">Developing the strengths  </IonText><br/>
               <IonText className="date_card">01 Dec. 2020  </IonText>
             </IonCard>
             <IonCard href="/tabs/teaching/TeachingDetails"className="card_teach">
               <img src="/assets/img/black-family1.jpg" className="img_card"></img>
               <IonText className="text_card">Developing the strengths  </IonText><br/>
               <IonText className="date_card">01 Dec. 2020  </IonText>
             </IonCard>
             <IonCard href="/tabs/teaching/TeachingOrder" className="card_teach">
               <img src="/assets/img/Black-Success.jpg" className="img_card"></img>
               <IonText className="text_card">Developing the strengths  </IonText><br/>
               <IonText className="date_card">01 Dec. 2020  </IonText>
               <IonIcon slot="end" icon={lockClosedOutline}></IonIcon>
               <IonIcon name="lock-closed-outline"></IonIcon>
               <div id="cercle"></div>
               <LockClosedOutline 
                  color={'#00000'}
                  cssClasses="icon_lock" 
                />

              
             

             </IonCard>
           </IonList>
        </IonCard>
      </IonContent>
            
    </IonPage>
    
    
);
};
export default withRouter (TeachingList);