import React, { useState, useRef } from 'react';
import {  IonDatetime, IonSelectOption, IonRange, IonCheckbox, IonSelect, IonToggle, IonInput, IonGrid, IonRow, IonCol, IonThumbnail, IonContent, IonHeader, IonPage, IonToolbar, IonButton, IonSlides,IonSlide,IonButtons,IonIcon,useIonViewWillEnter, IonImg, IonTitle, IonText, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonCardSubtitle ,IonList, IonItem, IonAvatar, IonFooter, IonLabel, IonTabButton,IonTabBar } from '@ionic/react';
import { arrowForward, bookmarksSharp } from 'ionicons/icons';
import './TeachingList.scss';
import { RouteComponentProps, withRouter } from 'react-router';
import { IonReactRouter } from '@ionic/react-router';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import history from '../history';
import UserService from "../services/UserService";
import { pin, wifi, wine, warning, walk, informationCircle, navigate, star, checkmarkCircle, shuffle, home, closeCircle } from 'ionicons/icons';
import { BookmarkSharp,  HomeOutline , BagOutline, HeartOutline , PersonOutline} from 'react-ionicons'

type SomeComponentProps = RouteComponentProps;
const TeachingList: React.FC<SomeComponentProps> = ({ history }) => {

type Item = {
        src: string;
        text: string;
        date: string;
      };
const items: Item[] = [{ src: '/assets/img/black-family1.jpg', text: 'Developing the strengths', date:'01 Dec. 2020'},{ src: '/assets/img/black-family.jpg', text: 'a picture of a cat', date:'01 Dec. 2020'},{ src: 'http://placekitten.com/g/200/300', text: 'a picture of a cat', date:'01 Dec. 2020'},{ src: 'http://placekitten.com/g/200/300', text: 'a picture of a cat', date:'01 Dec. 2020'}, ];

    return (
<IonPage id="teachingslist-page">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Teachings List</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonCard>
        <img className="card-img" src="/assets/img/Love.jpg" />
        <IonCardHeader>
          <IonCardSubtitle className="card-subtitle">Teachings</IonCardSubtitle>
          <IonCardTitle className="card-title">Love</IonCardTitle>
        </IonCardHeader>
            <IonCardContent className="card-content">  4 texts to read 
            </IonCardContent>
      </IonCard>
      <p></p>
      <p>
      <div className="text"> All texts </div>
      </p>

      <IonContent>
    <IonList>
      {items.map((image, i) => (
        <div className="teaching-list" >
        <IonItem key={i} href="/TeachingDetails">
          <IonThumbnail slot="start" className="">
            <IonImg src={image.src} className="item-img"/>
          </IonThumbnail>
          <IonLabel className="label"> 
              <h3>{image.text}</h3>
              <p>{image.date}</p>
            </IonLabel>
        </IonItem>
        </div>
      ))}

    </IonList>


   
          <IonItem button onClick={() => { }}> 
            <IonLabel className="ion-text-wrap">
              <IonText color="primary">
                <h3>H3 Primary Title</h3>
              </IonText>
              <p>Paragraph line 1</p>
              <IonText color="secondary">
                <p>Paragraph line 2 secondary</p>
              </IonText>
            </IonLabel>
          </IonItem>


        <IonItem href="#">
          <IonLabel>
            Thumbnail End, Anchor Item
          </IonLabel>
          <IonThumbnail slot="end">
            <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAAAAAAALAAAAAABAAEAAAICTAEAOw==" />
          </IonThumbnail>
        </IonItem>

        <IonItem>
          <IonThumbnail slot="start">
            <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAAAAAAALAAAAAABAAEAAAICTAEAOw==" />
          </IonThumbnail>
          <IonLabel>
            <h2>H2 Title Text</h2>
            <p>Button on right</p>
          </IonLabel>
          <IonButton fill="outline" slot="end">View</IonButton>
        </IonItem>

        <IonItem button onClick={() => { }}>
          <IonThumbnail slot="start">
            <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAAAAAAALAAAAAABAAEAAAICTAEAOw==" />
          </IonThumbnail>
          <IonLabel>
            <h3>H3 Title Text</h3>
            <p>Icon on right</p>
          </IonLabel>
          <IonIcon icon={closeCircle} slot="end" />
        </IonItem>

        

  </IonContent>

    </IonPage>
        
  );
}
export default withRouter (TeachingList);