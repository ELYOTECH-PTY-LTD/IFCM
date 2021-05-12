import React, { useState, useRef } from 'react';
import { IonContent, IonHeader, IonPage, IonToolbar, IonButton, IonSlides,IonSlide,IonButtons,IonIcon,useIonViewWillEnter, IonImg, IonTitle, IonText, IonCard, IonCardContent, IonCardSubtitle ,IonList, IonItem, IonAvatar, IonFooter, IonLabel, IonTabButton,IonTabBar, IonGrid, IonRow, IonCol, IonCardTitle } from '@ionic/react';
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
            <IonText className="titre">Find teaching</IonText>
            <IonText className="titre_text">Choose the topic you want to explore</IonText><br/>
            <IonCard className="shadow"></IonCard>
            <IonText className="titre_card flex">Categories </IonText>
            <div className="card">
                <IonGrid className="custom_grid ">
                    <IonRow className="ligne padding">
                        <IonCol className="colum">
                            <IonCard className="card_one" href="/Teaching_details">
                                <img src="/assets/img/teaching/image002.png"></img>
                                <IonText className="card_titre">Love</IonText>
                                <IonText className="card_text">5 texts</IonText>
                            </IonCard>
                            <IonCard className="card_two">
                                <img src="/assets/img/teaching/image001.png"></img>
                                <IonText className="card_titre">Anxiety</IonText>
                                <IonText className="card_text">9 texts</IonText>
                            </IonCard>
                        </IonCol>
                        
                    </IonRow>
                    <IonRow className="ligne padding">
                        <IonCol className="colum">
                            <IonCard className="card_one">
                                <img src="/assets/img/teaching/image002.png"></img>
                                <IonText className="card_titre">Love</IonText>
                                <IonText className="card_text">5 texts</IonText>
                            </IonCard>
                            <IonCard className="card_two">
                                <img src="/assets/img/teaching/image001.png"></img>
                                <IonText className="card_titre">Anxiety</IonText>
                                <IonText className="card_text">9 texts</IonText>
                            </IonCard>
                        </IonCol>

                        
                    </IonRow>
                   
                  
                    
                    
                </IonGrid>
            </div>
          </IonContent>
                
        </IonPage>
        
  );
}
export default withRouter (Teaching);