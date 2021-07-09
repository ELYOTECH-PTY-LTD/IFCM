import React, { useState, useRef } from 'react';
import { IonContent, IonHeader, IonPage, IonToolbar, IonButton,IonInput, IonSlides,IonSlide,IonButtons,IonIcon,useIonViewWillEnter, IonImg, IonTitle, IonText, IonCard, IonCardContent, IonCardSubtitle ,IonList, IonItem, IonAvatar, IonFooter, IonLabel, IonTabButton,IonTabBar, IonGrid, IonRow, IonCol, IonCardTitle, IonCardHeader,IonBackButton, IonToggle } from '@ionic/react';
import { arrowBack, arrowForward, bookmarksSharp , bagOutline,chevronBackOutline,stopCircleOutline} from 'ionicons/icons';
import { addOutline } from 'ionicons/icons';
//import './Shoppingitemdetails.scss';
import './ShoppingCart.scss';
import { RouteComponentProps, withRouter } from 'react-router';
import { IonReactRouter } from '@ionic/react-router';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import history from '../history';
import UserService from "../services/UserService";
import { BookmarkSharp,  HomeOutline , BagOutline, HeartOutline ,AddCircle,PersonOutline , LockClosedOutline,AddOutline ,RemoveOutline,DiscOutline} from 'react-ionicons'
import { Component } from 'ionicons/dist/types/stencil-public-runtime';
import { render } from '@testing-library/react';

type Item = {
    src: string;
    title: string;
    subtitle: string;
    text:string;
    prix:string;
    
  };
  const items: Item[] = [{ 
  src: '/assets/img/Romance-1.jpg', title: 'Love teaching', subtitle:'ggggggg',text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel enim nec urna …',prix:'5',},];


type SomeComponentProps = RouteComponentProps;

  
const ShoppingCart: React.FC<SomeComponentProps> = ({ history }) => {
    
   

    return (
        <IonPage >
          <IonHeader className="navbar-noborder" >
          <IonToolbar >
          <IonButtons slot="start">
          <IonBackButton icon={chevronBackOutline} defaultHref="/tabs/Shopping/Shoppingitemdetails" />
          </IonButtons>

          <IonTitle className="eventdetailstitle">Shopping Cart</IonTitle>
         
          </IonToolbar>
          </IonHeader>
          <IonContent fullscreen>
          <IonCard className="item_card">
          <IonGrid >
            <IonRow>
                 <IonCol>
                     <div > <img className="shopping-cart" src="/assets/img/garden_of_emuna_480x.jpg" /> </div>
                     
                 </IonCol>
                  <IonCol>
                         <IonRow> <IonCol className="title">The Universal Garden of Emuna</IonCol></IonRow>
                         <IonRow> <IonCol className="subtitle"> prophet philipe Banda </IonCol></IonRow>
                         <br/>
                         <IonRow> <IonCol className="price_item"> Price :R 300 </IonCol> </IonRow>
                         <IonRow> 
                         <IonCol size="3"  > 
                          <RemoveOutline
                          color={'#00000'}
                          cssClasses="icon_remove" 
                         />
                          
                          </IonCol>

                          <IonCol  size="3" className="number-item" >
                          <IonLabel className="col">1</IonLabel>
                         
                          </IonCol>

                            <IonCol size="3" >
                            <AddOutline
                             color={'#00000'}
                             cssClasses="icon_add" 
                              onClick=""/>
                         </IonCol>
                         <IonCol size="3">

                         <LockClosedOutline
                          color={'rgb(255, 87, 86);'}
                          cssClasses="icon_LockClosed" 
                         />

                  </IonCol>
              
             </IonRow>
             </IonCol>



            </IonRow>
            </IonGrid>

          </IonCard>
          <IonGrid>
           <IonRow className="total">
            <IonCol>Total</IonCol>
            
           </IonRow>
           <IonRow>
            <IonCol  className="item-number">2Items</IonCol>
            <IonCol  className="total_price">R 310</IonCol>
           </IonRow>
           </IonGrid>
       
          </IonContent>
          <IonFooter>
             <IonRow>
             <IonCol>
           <IonButton className="shopping-item-buttonn" shape="round" type="submit" expand="block" href="">  Buy now</IonButton>
           </IonCol>
             </IonRow>

          </IonFooter>
        </IonPage>
        
        
  );
}
export default withRouter (ShoppingCart);