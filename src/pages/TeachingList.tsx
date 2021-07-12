import React, { useState, useRef } from 'react';
import {  IonBackButton, IonDatetime, IonSelectOption, IonRange, IonCheckbox, IonSelect, IonToggle, IonInput, IonGrid, IonRow, IonCol, IonThumbnail, IonContent, IonHeader, IonPage, IonToolbar, IonButton, IonSlides,IonSlide,IonButtons,IonIcon,useIonViewWillEnter, IonImg, IonTitle, IonText, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonCardSubtitle ,IonList, IonItem, IonAvatar, IonFooter, IonLabel, IonTabButton,IonTabBar } from '@ionic/react';
import { lockClosedOutline, arrowForward, bookmarksSharp } from 'ionicons/icons';
import './TeachingList.scss';
import { RouteComponentProps, withRouter } from 'react-router';
import { IonReactRouter } from '@ionic/react-router';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import history from '../history';
import UserService from "../services/UserService";
import { pin, wifi, wine, warning, walk, informationCircle, navigate, star, checkmarkCircle, shuffle, home, closeCircle } from 'ionicons/icons';
import { BookmarkSharp,  HomeOutline , BagOutline, HeartOutline , PersonOutline, LockClosedOutline} from 'react-ionicons';

import { Teaching, TeachingLesson } from '../data/models';
import { connect } from '../data/connect';

import  *  as selectors from '../data/selectors';


interface OwnProps extends RouteComponentProps {
  teachingcat: Teaching;
}

interface DispatchProps {};
interface StateProps {};
interface TeachingListProps extends OwnProps, StateProps, DispatchProps {};
const TeachingList: React.FC<TeachingListProps> = ({ teachingcat }) => {

  
  console.log("here is the teaching categorie selected");
  console.log(teachingcat);
  const lessons = teachingcat.lessons;
  console.log(lessons);
    return (
      <IonPage id="teachinglist-page">
      <IonContent fullscreen>
        <IonCard className="box">
        <IonButtons>
                <IonBackButton defaultHref="/tabs/teaching" className="back"/>
            </IonButtons>     
            <div className="Texte_teaching">
            <IonText className="text_catégorie">
              Teaching
            </IonText>
            <IonCardSubtitle className="text_caté">{teachingcat.category}</IonCardSubtitle>
            <IonCardHeader className="text_nombre">`{teachingcat.count} texts</IonCardHeader>
            </div>
           <IonText className="text_title">
           All texts 
           </IonText>
           <p>
           &nbsp;
           </p>
           <IonList>
           {lessons.map((lessonitem, i) => (
             <IonCard routerLink={`/tabs/teaching/TeachingList/${teachingcat.id}/Teachingdetails/${lessonitem.id}`} className="card_teach">
               <img src={lessonitem.imgsrc}className="img_card"></img>
               <IonText className="text_card">{lessonitem.title} </IonText><br/>
               <IonText className="date_card">{lessonitem.date} </IonText>
               <IonText >{lessonitem.author} </IonText>
          {
            lessonitem.lock === true && 
            
            <div>
            <IonIcon slot="end" icon={lockClosedOutline}> </IonIcon>
            <IonIcon name="lock-closed-outline"></IonIcon>
            <div id="cercle"></div>
            <LockClosedOutline 
              color={'#00000'}
              cssClasses="icon_lock"/>
          </div>
              
        }
             </IonCard>
           ))}
           </IonList>
        </IonCard>
      </IonContent>
    </IonPage>
);
};
export default connect<OwnProps, StateProps, DispatchProps>({
  mapStateToProps: (state, ownProps) => ({​​​​​​​​
    teachinglessons : selectors.getTeachingLessons(state),
    teachingcat :selectors.getTeaching(state,ownProps)
 }​​​​​​​​),
​​​​  mapDispatchToProps: {
},
component: React.memo(TeachingList)
}​​​​​​​​);

