import React, { useState, useRef } from 'react';
import {  IonChip, IonSelectOption, IonSelect, IonTextarea, IonItemDivider, IonInput, IonThumbnail, IonContent, IonHeader, IonPage, IonToolbar, IonButton, IonSlides,IonSlide,IonButtons,IonIcon,useIonViewWillEnter, IonImg, IonTitle, IonText, IonCard, IonCardContent, IonCardSubtitle ,IonList, IonItem, IonAvatar, IonFooter, IonLabel, IonTabButton,IonTabBar, IonGrid, IonRow, IonCol, IonCardTitle } from '@ionic/react';
import { arrowForward, bookmarksSharp, chevronForwardOutline } from 'ionicons/icons';
import './Donation.scss';
import { RouteComponentProps, withRouter } from 'react-router';
import { IonReactRouter } from '@ionic/react-router';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import history from '../history';
import UserService from "../services/UserService";
import { BookmarkSharp,  HomeOutline , BagOutline, HeartOutline , PersonOutline} from 'react-ionicons'

const options = {
    cssClass: 'my-custom-interface'
  };

type SomeComponentProps = RouteComponentProps;
const Donation: React.FC<SomeComponentProps> = ({ history }) => {
    const [text, setText] = useState<string>();
    const [number, setNumber] = useState<number>();


    return (
        <IonPage id="donation-page">
          <IonContent fullscreen>
              <IonCard className="teaching-title" >
                  <IonCardTitle className="donation-title"> Donation</IonCardTitle>
                  <IonCardSubtitle className="donation-subtitle">Support Impact For Christ Ministries Charitable Deeds</IonCardSubtitle>
              </IonCard>
  
            <IonCard className="emptycard">
                <br/>
                <br/>
                <IonGrid>
                    <IonRow>
                        <IonCol className="donation-col" >
                            <IonCard className="donation-card">
                            <img src="/assets/img/love.jpg" className="donation-img"/>
                            </IonCard>
                        </IonCol>
                        <IonCol className="donation-col">

                            <IonCard className="donation-card">
                            <img src="/assets/img/charities2.jpeg" className="donation-img"/>

                            </IonCard>                        
                            </IonCol>
                        <IonCol className="donation-col">
                        <IonCard className="donation-card"> 
                            <img src="/assets/img/charities3.jpeg" className="donation-img"/>

                            </IonCard>                        
                        </IonCol>

                    </IonRow>
                    
                </IonGrid>
       <br/>
       <br/>
       <br/>
       <br/>
    
                <IonText className="donation-question">How much wanna donate ? </IonText>

                <br/>
       <br/>

            <IonItem lines="inset" className="donation-amount">
                <IonIcon src="/assets/img/Dollar_Icon.svg" slot="start" className="dollar-img" />

                <IonInput className="input-amount" type="number" value={number} placeholder="0,00"   onIonChange={e => setNumber(parseInt(e.detail.value!, 10))}></IonInput>

            </IonItem>


<br/>
<br/>

        <IonItem detail lines="none" className="cause-button" >
          <IonLabel>Choose your cause</IonLabel>
          <IonSelect interface="action-sheet" interfaceOptions={options} className="donation-select">
          <IonSelectOption  value=""></IonSelectOption>
          <IonSelectOption  value="Tithe">Tithe</IonSelectOption>
            <IonSelectOption value="Offering">Offering</IonSelectOption>
            <IonSelectOption value="IFCM Charity">Impact For Christ Ministries Charitable Deeds   </IonSelectOption>
            <IonSelectOption value="Alexandra">Alexandra Flash Floods and IFCM Charity   </IonSelectOption>
          </IonSelect>
        </IonItem>

        <br/>
<br/>

        <br/>
        <br/>
<br/>

        <br/>
<IonButton className="donation-button" shape="round" type="submit" expand="block" href="#"> Donate </IonButton>
           

       
        </IonCard>




          </IonContent>
                
        </IonPage>
        
  );
}
export default withRouter (Donation);