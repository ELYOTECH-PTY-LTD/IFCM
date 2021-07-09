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
import { IonCardHeader,IonMenuButton,IonSearchbar} from '@ionic/react';


import { Shopping, ShoppingItem } from '../data/models';
import { connect } from '../data/connect';

interface OwnProps { };

interface StateProps {
  shopping: Shopping[];
  shoppingitems : ShoppingItem[];
  
}

interface DispatchProps { };

interface ShopProps extends OwnProps, StateProps, DispatchProps { };

const Shop: React.FC<ShopProps> = ({ shopping, shoppingitems }) => {

//const books = shoppingitems.filter( t => t.id_cat=1);
//const videos = shoppingitems.filter( t => t.id_cat=2);


  const [searchText, setSearchText] = useState('');

  // a ref variable to handle the current slider
  const slider = useRef<HTMLIonSlidesElement>(null);
  // a state value to bind segment value
  const [value, setValue] = useState("0");
  var Items="All Books";

  const slideOpts = {
    initialSlide: 0,
    speed: 400,
    loop: false,
    pagination: {
      el: null
    },
  
  };

  // a function to handle the segment changes
  const handleSegmentChange = (e: any) => {
    setValue(e.detail.value);
    slider.current!.slideTo(e.detail.value);
  };

  // a function to handle the slider changes
  const handleSlideChange = async (event: any) => {
    let index: number = 0;
    
    
    await event.target.getActiveIndex().then((value: any) => (index=value));
    setValue(''+index)
    if(index==0)
     console.log(" je suis le slide N 1");

     else
       if(index==1)
       console.log(" je suis le slide N 2");
         else
           console.log(" je suis le slide N 3");
  }     
  


    return (
<IonPage  id="shopping-page">

<IonHeader>
<IonCard className="teaching-title" >
                  <IonCardTitle className="titre">Shop</IonCardTitle>
                  <IonIcon icon={bagOutline} size="large" color="medium" className="bag-icon"/>
              </IonCard>
</IonHeader>


        <IonToolbar>
         
        {/*--  <IonSearchbar value={searchText} onIonChange={e => setSearchText(e.detail.value!)}></IonSearchbar>--*/}
          {/*-- Segment in a toolbar --*/}
          {/*-- the value is binded to state value and is updated every time setValue is running --*/}
          {/*-- buttons values are set to 0 and 1, to match slider index, it can be whatever you need but there mas be a table --*/}
          <IonSegment value={value} onIonChange={(e) => handleSegmentChange(e)} >

            <IonSegmentButton  className="shopping-button-books" value="0" >
              <IonTitle className="shopping-title">Books</IonTitle>
            </IonSegmentButton>
            <IonSegmentButton className="shopping-button-videos" value="1"  >
              <IonTitle className="shopping-title">Media</IonTitle>
            </IonSegmentButton>
            <IonSegmentButton className="shopping-button-accessories" value="2"  >
              <IonTitle className="shopping-title">Accessories</IonTitle>
            </IonSegmentButton>
          </IonSegment>
        </IonToolbar>
     
      
      <IonContent>
      {/*-- Market Segment --*/}
    {/*-- the ref method binds this slider to slider variable --*/}
    <IonSlides pager={true} options={slideOpts} onIonSlideDidChange={(e) => handleSlideChange(e)} ref={slider}>
        <IonSlide>
      <IonCard className="emptycard-shopping">
        <IonGrid className="shopping-grid">
          
          <IonRow>
            <IonText className="text">All books</IonText>
          </IonRow>
        
            
        <IonRow>
        {shoppingitems.filter(books=> books.idcat==1).map((items,i) => (
          <IonCol size="6">
            <IonRow>
              
          <IonCard  key={i} routerLink={`/tabs/shopping/shoppingitemdetails/${items.id}`}  className="shoppingitem-card" >
          <IonRow>
          <IonCol size="1">
          <br/>
          </IonCol>
            <IonCol>
              <img src={items.imgsrc} className="book-img"/> 
              </IonCol>
            <IonCol size="1">
              <br/>
            </IonCol>
          </IonRow>
          </IonCard>
          </IonRow>
          <IonRow >
            <IonText  className="shoppingitem-text"> {items.title}</IonText>
            </IonRow>   
            <IonRow>
            <IonText className="shoppingitem-price">{items.price}</IonText>
            </IonRow>
          </IonCol>
             ))}
         </IonRow>  
        
        </IonGrid>
        
        </IonCard>
        </IonSlide>

        {/*-- Package Segment --*/}
        <IonSlide>
        <IonCard className="emptycard-shopping">
        <IonGrid className="shopping-grid">
          <IonRow>
            <IonText className="text">All Media</IonText>
          </IonRow>
   
     
            
        <IonRow>
        {shoppingitems.filter(videos=> videos.idcat==2).map((itemmedia,i) => (
          <IonCol size="6">
            <IonRow>
              
          <IonCard className="shoppingitem-card" href="/tabs/shopping/shoppingitemdetails">
          <IonRow>
          <IonCol size="1">
          <br/>
          </IonCol>
            <IonCol>
           
              <img src={itemmedia.imgsrc} className="book-img"/> 
           
              </IonCol>
            <IonCol size="1">
              <br/>
            </IonCol>
          
          </IonRow>
          </IonCard>
          </IonRow>
          <IonRow >
           
            <IonText  className="shoppingitem-text"> {itemmedia.title}</IonText>
            </IonRow>   
            <IonRow>
            <IonText className="shoppingitem-price">{itemmedia.price} </IonText>
            </IonRow>
          </IonCol>
            ))}
        </IonRow>
        
        </IonGrid>
        </IonCard>
        </IonSlide>

        <IonSlide>
        <IonCard className="emptycard-shopping">
        <IonGrid className="shopping-grid">
          <IonRow>
            <IonText className="text">All accessoires</IonText>
          </IonRow>
         

        <IonRow>
          
            {shoppingitems.filter(accessories => accessories.idcat==3).map((itemsaccessories ,i) => (
          <IonCol size="6">
            <IonRow>
              
          <IonCard className="shoppingitem-card" href="/tabs/shopping/shoppingitemdetails">
          <IonRow>
          <IonCol size="1">
          <br/>
          </IonCol>
            <IonCol>
           
              <img src={itemsaccessories.imgsrc} className="book-img"/> 
           
              </IonCol>
            <IonCol size="1">
              <br/>
            </IonCol>
           
          </IonRow>
          </IonCard>
          </IonRow>
          <IonRow >
            <IonText  className="shoppingitem-text">{itemsaccessories.title}</IonText>
            </IonRow>   
            <IonRow>
            <IonText className="shoppingitem-price">{itemsaccessories.price}</IonText>
            </IonRow>
          </IonCol>
            ))}
        </IonRow>
         
        </IonGrid>
        </IonCard>
        </IonSlide>
      </IonSlides>
    </IonContent>
  </IonPage>

        
    );

};
//export default withRouter (Shopping);
export default connect<OwnProps, StateProps, DispatchProps>({
  mapStateToProps: (state) => ({
    shopping: state.data.shopping,
    shoppingitems : state.data.shoppingitems
  }),
  mapDispatchToProps: {
  },
  component: React.memo(Shop)
});