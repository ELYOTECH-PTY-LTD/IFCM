
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


import { ShoppingItem } from '../data/models';
import { connect } from '../data/connect';
import * as selectors from '../data/selectors';


interface ShoppingDetailsProps {
  shoppingDetails: ShoppingItem;
}


interface OwnProps extends RouteComponentProps {
  shoppingDetails: ShoppingItem;
};

interface StateProps {};

interface DispatchProps {};

interface ShoppingDetailsProps extends OwnProps, StateProps, DispatchProps {};



const Shoppingitemdetails: React.FC<ShoppingDetailsProps> = ({shoppingDetails }) => {
    
   

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
           
              <img  className="shoppingitem-card" src={shoppingDetails.imgsrc} /> 
           
              </IonCol>
            <IonCol size="2">
              <br/>
            </IonCol>
           
            
          </IonRow>
          </IonGrid>
          </IonCard>
         
          <IonRow >
            <IonCol>
            <IonText className="card_title" > {shoppingDetails.title}</IonText>
            </IonCol>
          </IonRow>   
            <IonRow>
              <IonCol>
            <IonText className="card_sub_title"> {shoppingDetails.author} </IonText>
            </IonCol>
            <IonCol>
            <span className="shoppingitem-d-price"> {shoppingDetails.price} </span> 
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
            {shoppingDetails.description}
            </p>
            </IonCol>
         </IonRow>
      
      
        












          </IonContent>
        </IonPage>
        
        
  );
}

export default connect({
  mapStateToProps: (state, ownProps) => ({
    shoppingDetails: selectors.getShoppingDetails(state, ownProps)
  }),
  component: Shoppingitemdetails
});

//export default withRouter (Shoppingitemdetails);