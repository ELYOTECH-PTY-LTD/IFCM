import React, { useState, useRef } from 'react';
import { IonContent, IonHeader, IonPage, IonToolbar, IonButton, IonSlides,IonSlide,IonButtons,IonIcon,useIonViewWillEnter, IonImg, IonTitle, IonText, IonCard, IonCardContent, IonCardSubtitle ,IonList, IonItem, IonAvatar, IonFooter, IonLabel, IonTabButton,IonTabBar, IonGrid, IonRow, IonCol, IonCardTitle } from '@ionic/react';
import { arrowForward, bookmarksSharp } from 'ionicons/icons';
import './Teaching.scss';
import { RouteComponentProps, withRouter } from 'react-router';
import { IonReactRouter } from '@ionic/react-router';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import history from '../history';
import UserService from "../services/UserService";
import { BookmarkSharp,  HomeOutline , BagOutline, HeartOutline , PersonOutline} from 'react-ionicons'
import  *  as selectors from '../data/selectors';
import { Teaching, TeachingLesson } from '../data/models';
import { connect } from '../data/connect';

interface OwnProps { 

};

interface StateProps {
  teachinglist: Teaching[];
}

interface DispatchProps { };

interface TeachingProps extends OwnProps, StateProps, DispatchProps { };
const TeachingPage: React.FC<TeachingProps> = ({ teachinglist  }) => {

console.log("Liste des teachings");
console.log(teachinglist);

    return (
        <IonPage id="teaching-page">
          <IonContent fullscreen>
              <IonCard className="teaching-title" >
                  <IonCardTitle className="titre">Find teaching</IonCardTitle>
                  <IonCardSubtitle className="titre_text">Choose the topic you want to explore</IonCardSubtitle>
              </IonCard>
  
            <IonCard className="emptycard">
                    <IonText className="titre_card flex">Categories </IonText>
                        <IonGrid className="custom_grid ">
                            {teachinglist.map((teachingcategorie, i) => (
                                <IonCol className="colum">
                            <IonCard className={ i / 1 == 0 ? 'card_one' : 'card_two'}  routerLink={`/tabs/teaching/TeachingList/${teachingcategorie.id}`} key={i}>
                                <img src={teachingcategorie.imgsrc}></img>
                                <IonText className="card_titre">{teachingcategorie.category}</IonText>
                                <IonText className="card_text">{teachingcategorie.count} texts</IonText>
                            </IonCard>
                            </IonCol>   
                          ))}
                </IonGrid>
            </IonCard>
          </IonContent>
        </IonPage>
  );
};

export default connect<OwnProps, StateProps, DispatchProps>({
    mapStateToProps: (state) => ({
      teachinglist : selectors.getTeachings(state),
       //teachinglist: state.data.teachings 
    }),
    mapDispatchToProps: {
    },
    component: React.memo(TeachingPage)
  });