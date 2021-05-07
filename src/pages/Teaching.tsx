import React, { useState, useRef } from 'react';
import { IonContent, IonHeader, IonPage, IonToolbar, IonButton, IonSlides,IonSlide,IonButtons,IonIcon,useIonViewWillEnter, IonImg, IonTitle, IonText, IonCard, IonCardContent, IonCardSubtitle ,IonList, IonItem, IonAvatar, IonFooter, IonLabel, IonTabButton,IonTabBar } from '@ionic/react';
import { arrowForward, bookmarksSharp } from 'ionicons/icons';
import './Teaching.scss';
import { RouteComponentProps, withRouter } from 'react-router';
import { IonReactRouter } from '@ionic/react-router';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import history from '../history';
import UserService from "../services/UserService";
import { BookmarkSharp,  HomeOutline , BagOutline, HeartOutline , PersonOutline} from 'react-ionicons'

type SomeComponentProps = RouteComponentProps;
const Teaching: React.FC<SomeComponentProps> = ({ history }) => {

    return (
        <IonPage id="teaching-page">
          <IonContent fullscreen>

                <IonHeader>
                    <IonTitle className="header_title">Find teaching</IonTitle><br/>
                    <IonText  className="header_text">Choose the topic you want to explore</IonText>
                </IonHeader>

                <div className="container">
                    <IonText className="text_container">
                        Catégories
                    </IonText>
                    <IonList>
                        <IonCard>
                            <img src="" alt="#"></img>
                            <IonCardContent>truc</IonCardContent>
                            <IonCardSubtitle>trucmuchez</IonCardSubtitle>

                        </IonCard>
                    </IonList>
                </div>
         
          </IonContent>
                
        </IonPage>
        
  );
}
export default withRouter (Teaching);