
import React, { useState, useRef } from 'react';
import { IonContent, IonHeader, IonPage, IonToolbar, IonButton,IonInput, IonSlides,IonSlide,IonButtons,IonIcon,useIonViewWillEnter, IonImg, IonTitle, IonText, IonCard, IonCardContent, IonCardSubtitle ,IonList, IonItem, IonAvatar, IonFooter, IonLabel, IonTabButton,IonTabBar, IonGrid, IonRow, IonCol, IonCardTitle, IonCardHeader,IonBackButton, IonToggle } from '@ionic/react';
import { arrowBack, arrowForward, bookmarksSharp , bagOutline,chevronBackOutline ,stopCircleOutline} from 'ionicons/icons';
import './Shoppingitemdetails.scss';
import { RouteComponentProps, withRouter } from 'react-router';
import { IonReactRouter } from '@ionic/react-router';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import history from '../history';
import UserService from "../services/UserService";
import { BookmarkSharp,  HomeOutline , BagOutline, HeartOutline , PersonOutline ,ArrowBackOutline , LockClosedOutline ,DiscOutline} from 'react-ionicons'
import { Component } from 'ionicons/dist/types/stencil-public-runtime';
import { render } from '@testing-library/react';

type ShoppingItem = {
    src: string;
    title: string;
    subtitle: string;
    text:string;
    prix:string;
    
  };
  const items: ShoppingItem[] = [{ 
  src: '/assets/img/Romance-1.jpg', title: 'Love teaching', subtitle:'ggggggg',text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel enim nec urna …',prix:'5',},];
 
  

type SomeComponentProps = RouteComponentProps;

const Shoppingitemdetails: React.FC<SomeComponentProps> = ({ history }) => {
    
   

    return (
        <IonPage >
          <IonHeader className="navbar-noborder" >
          <IonToolbar >
          <IonButtons slot="start">
          <IonBackButton icon={chevronBackOutline} defaultHref="/tabs/Shopping" />
          </IonButtons>

          <IonTitle className="eventdetailstitle">Shop Book</IonTitle>
         
          </IonToolbar>
          </IonHeader>
          <IonContent fullscreen>
            
   <IonRow>
          <IonCol size="12">
            
          
          <IonCard className="item_card" href="/tabs/shopping/shoppingitemdetails">
          <IonGrid>
          <IonRow>
          <IonCol size="2">
          <br/>
          </IonCol>
            <IonCol>
           
              <img  className="shoppingitem-card" src="/assets/img/garden_of_emuna_480x.jpg" /> 
           
              </IonCol>
            <IonCol size="2">
              <br/>
            </IonCol>
           
            
          </IonRow>
          </IonGrid>
          </IonCard>
         
          <IonRow >
            <IonCol>
            <IonText className="card_title" > The Universal Garden of Emuna</IonText>
            </IonCol>
          </IonRow>   
            <IonRow>
              <IonCol>
            <IonText className="card_sub_title"> prophet philipe Banda </IonText>
            </IonCol>
            <IonCol>
            <span className="shoppingitem-d-price"> R 300 </span> 
            </IonCol>
            </IonRow>
          </IonCol>
          </IonRow>
         <IonRow>
           <IonCol >
             <IonRow className="icon__lock" > 
        
             <IonCol  >  <img  className="icon"  src="/assets/img/shopping-bag.png" /> </IonCol>
            
              </IonRow >
            
           </IonCol>
          
           <IonCol >
           <IonRow > 
           <IonCol  className="col">
           <IonButton  className="shopping-item-button" shape="round" type="submit" expand="block" href="/tabs/shopping/shoppingitemdetails/ShoppingCart">  Buy now</IonButton>
           </IonCol>
            </IonRow>
          </IonCol>
         </IonRow>
         <IonRow>
           <IonCol className="book-description">
            <p>
            The Universal Garden of Emuna, completely non-denominational. 
            All of mankind deserve to live a life of Emuna, peace and tranquility. 
            The Garden of Emuna -- Emuna is the Hebrew word for faith -- Working on Emuna allows 
            us to really appreciate life straight from the source.
             This book is a practical step by step guide to attaining high levels of Emuna / faith .
              Faith / Emuna is likened to a lush, fragrant garden, thus the book Garden of Emuna a garden
               harmonizing G-d's will with our existent. Written by the worlds expert on practical Emuna,
               * Rabbi Shalom Arush, and translated by Rabbi Lazer Brody.


            </p>
            </IonCol>
         </IonRow>
      
      
        












          </IonContent>
        </IonPage>
        
        
  );
}
export default withRouter (Shoppingitemdetails);