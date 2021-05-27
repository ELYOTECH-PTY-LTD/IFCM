import React, { useState, useRef } from 'react';
import { IonContent, IonHeader, IonPage, IonToolbar, IonButton, IonSlides,IonSlide,IonButtons,IonIcon,useIonViewWillEnter, IonImg, IonTitle, IonText, IonCard, IonCardContent, IonCardSubtitle ,IonList, IonItem, IonAvatar, IonFooter, IonLabel, IonTabButton,IonTabBar, IonGrid, IonRow, IonCol, IonCardTitle, IonCardHeader,IonBackButton } from '@ionic/react';
import { arrowBack, arrowForward, bookmarksSharp , lockClosedOutline} from 'ionicons/icons';
import './TeachingDetailsPrivate.scss';
import { RouteComponentProps, withRouter } from 'react-router';
import { IonReactRouter } from '@ionic/react-router';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import history from '../history';
import UserService from "../services/UserService";
import { BookmarkSharp,  HomeOutline , BagOutline, HeartOutline , PersonOutline ,ArrowBackOutline , LockClosedOutline} from 'react-ionicons'

type Item = {
    src: string;
    title: string;
    date: string;
    text:string;
    prix:string;
  };
  const items: Item[] = [{ 
  src: '/assets/img/Romance-1.jpg', title: 'Love teaching', date:'21 Feb. 2021',text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel enim nec urna …',prix:'5',},];
  
type SomeComponentProps = RouteComponentProps;
const TeachingDetailsPrivate: React.FC<SomeComponentProps> = ({ history }) => {

    return (
        <IonPage id="teaching-page">
          <IonContent fullscreen>
                <IonButtons>
                    <IonBackButton defaultHref="/tabs/teaching/teachinglist" className="back"/>
                </IonButtons>
                <IonText className="titre_teaching">Love teaching </IonText>
              <br/>
              <br/>
              <br/>
              {items.map((image, i) => (
            <IonCard className="box">
            <IonImg src={image.src} alt="romance" className="img_teaching"></IonImg>
            <IonCardTitle className="titre_card_teaching">{image.title}</IonCardTitle>
            <IonCardSubtitle className="date_card_teaching">{image.date}<IonIcon className="icon_locker" icon={lockClosedOutline}></IonIcon> </IonCardSubtitle>
             <IonCardContent className="titre_card_list">{image.text}</IonCardContent>
             <IonText className="center">Shop now for <IonText className="price"> R {+image.prix}</IonText> </IonText>
             <IonButton className="payd" color="favorite" href="/tabs/shopping/PaymentCardDetail">Purchase</IonButton>
            </IonCard>   
      ))}
          </IonContent>
                
        </IonPage>
        
        
  );
}
export default withRouter (TeachingDetailsPrivate);