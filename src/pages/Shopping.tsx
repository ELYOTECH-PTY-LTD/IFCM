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
type SomeComponentProps = RouteComponentProps;
const Shopping: React.FC<SomeComponentProps> = ({ history }) => {

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
              <IonTitle className="shopping-title">VideoS</IonTitle>
            </IonSegmentButton>
            <IonSegmentButton className="shopping-button-accessories" value="2"  >
              <IonTitle className="shopping-title">Accessoires</IonTitle>
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
          <IonCol size="6">
            <IonRow>
              
          <IonCard className="shoppingitem-card" href="/tabs/shopping/shoppingitemdetails">
          <IonRow>
          <IonCol size="1">
          <br/>
          </IonCol>
            <IonCol>
           
              <img src="/assets/img/garden_of_emuna_480x.jpg" className="book-img"/> 
           
              </IonCol>
            <IonCol size="1">
              <br/>
            </IonCol>
           
            
          </IonRow>
          </IonCard>
          </IonRow>
          <IonRow >
            <IonText  className="shoppingitem-text"> The Universal Garden of Emuna</IonText>
            </IonRow>   
            <IonRow>
            <IonText className="shoppingitem-price"> R 300</IonText>
            </IonRow>
          </IonCol>
          <IonCol size="6">
            <IonRow>
              
          <IonCard className="shoppingitem-card" href="/tabs/shopping/shoppingitemdetails">
          <IonRow>
          <IonCol size="1">
          <br/>
          </IonCol>
            <IonCol>
              <img src="/assets/img/garden_of_education_480x.jpg" className="book-img"/> 
              </IonCol>
            <IonCol size="1">
              <br/>
            </IonCol>
           
            
          </IonRow>
          </IonCard>
          </IonRow>
          <IonRow >
            <IonText  className="shoppingitem-text"> The Garden of Education - Education with Love  </IonText>
            </IonRow>   
            <IonRow>
            <IonText className="shoppingitem-price"> R 300</IonText>
            </IonRow>
          </IonCol>
          <IonCol size="6">
            <IonRow>
              
          <IonCard className="shoppingitem-card" href="/tabs/shopping/shoppingitemdetails">
          <IonRow>
          <IonCol size="1">
          <br/>
          </IonCol>
            <IonCol>
              <img src="/assets/img/REWIRINGthemind_1_480x.jpg" className="book-img"/> 
              </IonCol>
            <IonCol size="1">
              <br/>
            </IonCol>
           
            
          </IonRow>
          </IonCard>
          </IonRow>
          <IonRow >
            <IonText  className="shoppingitem-text">Rewiring the Mind </IonText>
             </IonRow>   
            <IonRow>
            <IonText className="shoppingitem-price"> R 300</IonText>
            </IonRow>
          </IonCol>
         
          <IonCol size="6">
            <IonRow>
              
          <IonCard className="shoppingitem-card" href="/tabs/shopping/shoppingitemdetails">
          <IonRow>
          <IonCol size="1">
          <br/>
          </IonCol>
            <IonCol>
              <img src="/assets/img/truechristianity_480x.png" className="book-img"/> 
              </IonCol>
            <IonCol size="1">
              <br/>
            </IonCol>
           
            
          </IonRow>
          </IonCard>
          </IonRow>
          <IonRow >
            <IonText  className="shoppingitem-text"> The power of praying for your adult children  </IonText>
            </IonRow>   
            <IonRow>
            <IonText className="shoppingitem-price"> R 300</IonText>
            </IonRow>
          </IonCol>
        </IonRow>
        </IonGrid>
        </IonCard>
        </IonSlide>
        {/*-- Package Segment --*/}
        <IonSlide>
        <IonCard className="emptycard-shopping">
        <IonGrid className="shopping-grid">
          <IonRow>
            <IonText className="text">All videos</IonText>
          </IonRow>
        <IonRow>
          <IonCol size="6">
            <IonRow>
              
          <IonCard className="shoppingitem-card" href="/tabs/shopping/shoppingitemdetails">
          <IonRow>
          <IonCol size="1">
          <br/>
          </IonCol>
            <IonCol>
           
              <img src="/assets/img/fsatat_480x.png" className="book-img"/> 
           
              </IonCol>
            <IonCol size="1">
              <br/>
            </IonCol>
           
            
          </IonRow>
          </IonCard>
          </IonRow>
          <IonRow >
            <IonText  className="shoppingitem-text"> Impact for Christ Ministries - For Such A Time As This</IonText>
            </IonRow>   
            <IonRow>
            <IonText className="shoppingitem-price"> R 300</IonText>
            </IonRow>
          </IonCol>
          <IonCol size="6">
            <IonRow>
              
          <IonCard className="shoppingitem-card" href="/tabs/shopping/shoppingitemdetails">
          <IonRow>
          <IonCol size="1">
          <br/>
          </IonCol>
            <IonCol>
              <img src="/assets/img/Faithful_480x.jpg" className="book-img"/> 
              </IonCol>
            <IonCol size="1">
              <br/>
            </IonCol>
           
            
          </IonRow>
          </IonCard>
          </IonRow>
          <IonRow >
            <IonText  className="shoppingitem-text"> Faithful  </IonText>
            </IonRow>   
            <IonRow>
            <IonText className="shoppingitem-price"> R 300</IonText>
            </IonRow>
          </IonCol>
          <IonCol size="6">
            <IonRow>
              
          <IonCard className="shoppingitem-card" href="/tabs/shopping/shoppingitemdetails">
          <IonRow>
          <IonCol size="1">
          <br/>
          </IonCol>
            <IonCol>
              <img src="/assets/img/WhatLoveIS_480x.jpg" className="book-img"/> 
              </IonCol>
            <IonCol size="1">
              <br/>
            </IonCol>
           
            
          </IonRow>
          </IonCard>
          </IonRow>
          <IonRow >
            <IonText  className="shoppingitem-text">What Love is </IonText>
             </IonRow>   
            <IonRow>
            <IonText className="shoppingitem-price"> R 300</IonText>
            </IonRow>
          </IonCol>
         
          <IonCol size="6">
            <IonRow>
              
          <IonCard className="shoppingitem-card" href="/tabs/shopping/shoppingitemdetails">
          <IonRow>
          <IonCol size="1">
          <br/>
          </IonCol>
            <IonCol>
              <img src="/assets/img/MyWorld_480x.jpg" className="book-img"/> 
              </IonCol>
            <IonCol size="1">
              <br/>
            </IonCol>
           
            
          </IonRow>
          </IonCard>
          </IonRow>
          <IonRow >
            <IonText  className="shoppingitem-text"> You are my world+For this cause</IonText>
            </IonRow>   
            <IonRow>
            <IonText className="shoppingitem-price"> R 300</IonText>
            </IonRow>
          </IonCol>
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
          <IonCol size="6">
            <IonRow>
              
          <IonCard className="shoppingitem-card" href="/tabs/shopping/shoppingitemdetails">
          <IonRow>
          <IonCol size="1">
          <br/>
          </IonCol>
            <IonCol>
           
              <img src="/assets/img/Cross_480x.png" className="book-img"/> 
           
              </IonCol>
            <IonCol size="1">
              <br/>
            </IonCol>
           
            
          </IonRow>
          </IonCard>
          </IonRow>
          <IonRow >
            <IonText  className="shoppingitem-text"> Corss</IonText>
            </IonRow>   
            <IonRow>
            <IonText className="shoppingitem-price"> R 300</IonText>
            </IonRow>
          </IonCol>
          <IonCol size="6">
            <IonRow>
              
          <IonCard className="shoppingitem-card" href="/tabs/shopping/shoppingitemdetails">
          <IonRow>
          <IonCol size="1">
          <br/>
          </IonCol>
            <IonCol>
              <img src="/assets/img/AllThingsBand_480x.jpg" className="book-img"/> 
              </IonCol>
            <IonCol size="1">
              <br/>
            </IonCol>
           
            
          </IonRow>
          </IonCard>
          </IonRow>
          <IonRow >
            <IonText  className="shoppingitem-text">  I Can Do All Things Through Him Wristband  </IonText>
            </IonRow>   
            <IonRow>
            <IonText className="shoppingitem-price"> R 300</IonText>
            </IonRow>
          </IonCol>
          <IonCol size="6">
            <IonRow>
              
          <IonCard className="shoppingitem-card" href="/tabs/shopping/shoppingitemdetails">
          <IonRow>
          <IonCol size="1">
          <br/>
          </IonCol>
            <IonCol>
              <img src="/assets/img/courage_480x.jpg" className="book-img"/> 
              </IonCol>
            <IonCol size="1">
              <br/>
            </IonCol>
           
            
          </IonRow>
          </IonCard>
          </IonRow>
          <IonRow >
            <IonText  className="shoppingitem-text">Gift Courageous  </IonText>
             </IonRow>   
            <IonRow>
            <IonText className="shoppingitem-price"> R 300</IonText>
            </IonRow>
          </IonCol>
         
          <IonCol size="6">
            <IonRow>
              
          <IonCard className="shoppingitem-card" href="/tabs/shopping/shoppingitemdetails">
          <IonRow>
          <IonCol size="1">
          <br/>
          </IonCol>
            <IonCol>
              <img src="/assets/img/BlessedisShe_Luke1_480x.png" className="book-img"/> 
              </IonCol>
            <IonCol size="1">
              <br/>
            </IonCol>
           
            
          </IonRow>
          </IonCard>
          </IonRow>
          <IonRow >
            <IonText  className="shoppingitem-text"> The Blessed is She who believe  </IonText>
            </IonRow>   
            <IonRow>
            <IonText className="shoppingitem-price"> R 300</IonText>
            </IonRow>
          </IonCol>
        </IonRow>
        </IonGrid>
        </IonCard>
        </IonSlide>
      </IonSlides>
    </IonContent>
  </IonPage>
















  );
};
export default withRouter (Shopping);