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

type EventItem = {
    src: string;
    text: string;
    nbr: string;
  };
  const items: EventItem[] = [{ src: '/assets/img/israel_pilgrimage.jpg', text: '2020 Israel Pilgrimage', nbr :'AUG 06, 2020',}
  ,{src: '/assets/img/israel_pilgrimage.jpg', text: '2020 Israel Pilgrimage', nbr :'AUG 06, 2020',},
  {src: '/assets/img/israel_pilgrimage.jpg', text: '2020 Israel Pilgrimage', nbr :'AUG 06, 2020',}

];
  

type SomeComponentProps = RouteComponentProps;
const Teaching: React.FC<SomeComponentProps> = ({ history }) => {

    return (
        <IonPage id="teaching-page">
          <IonContent fullscreen>
              <IonCard className="teaching-title" >
                  <IonCardTitle className="titre">Find teaching</IonCardTitle>
                  <IonCardSubtitle className="titre_text">Choose the topic you want to explore</IonCardSubtitle>
              </IonCard>
  
            <IonCard className="emptycard-teaching">
            <IonText className="titre_card flex">Categories </IonText>
            <div className="card">
                <IonGrid className="custom_grid ">
                    {items.map((image, i) => (
                    <IonRow className="ligne padding">
                <IonCol className="colum">
                    <IonCard className="card_one" href="/tabs/teaching/TeachingList">
                        <img src={image.src}></img>
                        <IonText className="card_titre">{image.text}</IonText>
                        <IonText className="card_text">{image.nbr}</IonText>
                    </IonCard>
                    <IonCard className="card_two" href="/tabs/teaching/TeachingList">
                        <img src={image.src}></img>
                        <IonText className="card_titre">{image.text}</IonText>
                        <IonText className="card_text">{image.nbr}</IonText>
                    </IonCard>
                </IonCol>
            </IonRow>
             
      ))}
                </IonGrid>
            </div>
            </IonCard>
          </IonContent>
                
        </IonPage>
        
  );
}
export default withRouter (Teaching);