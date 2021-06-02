import React, { useState, useRef } from 'react';
import { IonRange, IonInput, IonToggle, IonSelectOption, IonSelect, IonDatetime, IonThumbnail, IonCheckbox, IonRow, IonCol, IonGrid, IonCardTitle, IonSegment, IonSegmentButton, IonContent, IonHeader, IonPage, IonToolbar, IonButton, IonSlides,IonSlide,IonButtons,IonIcon,useIonViewWillEnter, IonImg, IonTitle, IonText, IonCard, IonCardContent, IonCardSubtitle ,IonList, IonItem, IonAvatar, IonFooter, IonLabel, IonTabButton,IonTabBar } from '@ionic/react';
import {  navigate, informationCircle, checkmarkCircle, shuffle, closeCircle, bagOutline, arrowForward, bookmarksSharp, call, home, heart, pin, star, globe, basket, camera, bookmark, basketOutline  } from 'ionicons/icons';
import './Shopping.scss';
import { RouteComponentProps, withRouter } from 'react-router';
import { IonReactRouter } from '@ionic/react-router';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import history from '../history';
import UserService from "../services/UserService";
import { BookmarkSharp,  HomeOutline , BagOutline, HeartOutline , PersonOutline} from 'react-ionicons'

type SomeComponentProps = RouteComponentProps;
const Shopping: React.FC<SomeComponentProps> = ({ history }) => {

    return (
        <IonPage id="shopping-page">
           <IonContent fullscreen>
              <IonCard className="teaching-title" >
                  <IonCardTitle className="titre">Shop</IonCardTitle>
                  <IonIcon icon={bagOutline} size="large" color="medium" className="bag-icon"/>
              </IonCard>
    


     {/*-- Segment with secondary color --*/}
     <IonSegment onIonChange={e => console.log('Segment selected', e.detail.value)} color="success">
          <IonSegmentButton value="BOOKS" className="shopping-button">
            <IonLabel className="shopping-title">BOOKS</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="VIDEOS" className="shopping-button">
            <IonLabel className="shopping-title">VIDEOS</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="ACCESSORIES" className="shopping-button">
            <IonLabel className="shopping-title">ACCESSORIES</IonLabel>
          </IonSegmentButton>
      </IonSegment>

        
      <IonCard className="emptycard-shopping">

            <IonText className="titre_card flex">All Items </IonText>
            <br/>
            <br/>
      <IonGrid className="shopping-grid">
                    <IonRow>
                        <IonCol>
                            <IonCard className="shoppingitem-card" href="/tabs/shopping/shoppingitemdetails">
                                <img src="/assets/img/Love.jpg" className="book-img"/> 
                            </IonCard>
                            <IonText className="shoppingitem-text"> The power of praying for your adult children  </IonText>
                                <br/>
                                <IonText className="shoppingitem-price"> R300</IonText>
                        </IonCol>
                      <IonCol>
                      <IonCard className="shoppingitem-card" href="/tabs/shopping/shoppingitemdetails">
                                <img src="/assets/img/Prayer.png" className="book-img"/> 
                            </IonCard>
                            <IonText className="shoppingitem-text"> True Christianity is irresistible    </IonText>
                                <br/>
                                <IonText className="shoppingitem-price"> R300</IonText>

                        </IonCol>
                      </IonRow>
                  </IonGrid>
        </IonCard>


 
      </IonContent>

    </IonPage>
  );
};
export default withRouter (Shopping);