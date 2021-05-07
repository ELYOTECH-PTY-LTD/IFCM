import React, { useState, useRef } from 'react';
import { IonContent, IonHeader, IonPage, IonToolbar, IonButton, IonSlides,IonSlide,IonButtons,IonIcon,useIonViewWillEnter, IonImg, IonTitle, IonText, IonCard, IonCardContent, IonList, IonItem, IonAvatar, IonFooter, IonLabel, IonTabButton,IonTabBar } from '@ionic/react';
import { arrowForward, bookmarksSharp } from 'ionicons/icons';
import './Homepage.scss';
import { RouteComponentProps, withRouter } from 'react-router';
import { IonReactRouter } from '@ionic/react-router';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import history from '../history';
import UserService from "../services/UserService";
import { BookmarkSharp,  HomeOutline , BagOutline, HeartOutline , PersonOutline} from 'react-ionicons'

type SomeComponentProps = RouteComponentProps;
const Homepage: React.FC<SomeComponentProps> = ({ history }) => {

    return (
        <IonPage id="home-page">
          <IonContent fullscreen>
            <IonList>
              <IonImg src="/assets/img/ifcm_logo.png" className="logo"></IonImg>
              <h1 className="title">Good Morning Raoul,</h1>
            </IonList>
          
            <IonCard className="emptycard">
             <IonCardContent></IonCardContent>
            </IonCard>
            <IonList>
            
              <IonCard className="prophetic-card">
             
              <img src="/assets/img/quotes.png"  className="quotes"/>
                <IonCardContent>
                 
                <IonText className="text_prophet">
                Worries destroy the heart. Please guard your heart. 
                </IonText><br/>
                
              <IonText className="prophet">
              Prophet Philip Banda     
              </IonText>
            </IonCardContent>
            
           </IonCard>
           
            </IonList>

            <IonList className="verse">
              <h2 className="verse_titre">Verse of the day </h2>
              <IonText className="verse_rectangle">
                <BookmarkSharp color={"#0279dc"}/>
                <IonText className="verse_auteur"> John 14:12 </IonText>
              </IonText><br/>
              <IonText className="verse_texte">« Doing the work of Jesus Christ. »</IonText>
            </IonList>

            <IonList className="event">
              <h3 className="event_titre">Upcoming Events</h3>

              <div className="card">

                <IonCard className="event_card" href="/Events">
                  <img src="/assets/img/holyland.png"></img>
                  <IonText className="event_date">AUG 06, 2020</IonText>
                  <IonText className="event_lieu">2020 Israel Pilgrimage</IonText>
                  <IonText className="event_text">The relationship between the Bible and Israel is like the body…</IonText>
                </IonCard>

                <IonCard className="event_card" href="/Events">
                  <img src="/assets/img/holyland.png"></img>
                  <IonText className="event_date">AUG 06, 2020</IonText>
                  <IonText className="event_lieu">2020 Israel Pilgrimage</IonText>
                  <IonText className="event_text">The relationship between the Bible and Israel is like the body…</IonText>
                </IonCard>

                <IonCard className="event_card" href="/Events">
                  <img src="/assets/img/holyland.png"></img>
                  <IonText className="event_date">AUG 06, 2020</IonText>
                  <IonText className="event_lieu">2020 Israel Pilgrimage</IonText>
                  <IonText className="event_text">The relationship between the Bible and Israel is like the body…</IonText>
                </IonCard>
                   
              </div>
              
            </IonList>

            <IonList className="navbar">
            <IonTabBar slot="bottom">
          <IonTabButton tab="tab1" href="/Home">
            <HomeOutline/>
            <IonLabel><b>.</b></IonLabel>
          </IonTabButton>

          <IonTabButton tab="Shop" href="/Shop">
            <BagOutline/>
            <IonLabel><b>.</b></IonLabel>
          </IonTabButton>

          <IonTabButton tab="Logo" href="/Teaching">
            <img src="/assets/img/Orange_Button.svg" className="button_orange"/>
            
          </IonTabButton>

          <IonTabButton tab="Heart" href="/Heart">
            <HeartOutline/>
            <IonLabel><b>.</b></IonLabel>
          </IonTabButton>

          <IonTabButton tab="Personal" href="/Personal">
            <PersonOutline/>
            <IonLabel><b>.</b></IonLabel>
          </IonTabButton>
        </IonTabBar>
            
            </IonList>
          </IonContent>
                
                 </IonPage>
        
  );
}
export default withRouter (Homepage);