
import React, { useState, useRef } from 'react';
import { IonListHeader,IonThumbnail,IonContent, IonHeader, IonPage, IonToolbar, IonButton, IonSlides,IonSlide,IonButtons,IonIcon,useIonViewWillEnter, IonImg, IonTitle, IonText, IonCard, IonCardContent, IonCardSubtitle ,IonList, IonItem, IonAvatar, IonFooter, IonLabel, IonTabButton,IonTabBar, IonGrid, IonRow,IonInput, IonCol, IonCardTitle, IonCardHeader,IonBackButton, IonTextarea} from '@ionic/react';
import { arrowBack, arrowForward, bookmarksSharp , lockClosedOutline} from 'ionicons/icons';
import './Help.scss';
import { RouteComponentProps, withRouter } from 'react-router';
import { IonReactRouter } from '@ionic/react-router';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import history from '../history';
import UserService from "../services/UserService";
import { BookmarkSharp,  HomeOutline , BagOutline, HeartOutline , PersonOutline ,ArrowBackOutline , LockClosedOutline ,ArrowForwardOutline} from 'react-ionicons'
  

type SomeComponentProps = RouteComponentProps;
const Help: React.FC<SomeComponentProps> = ({ history }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sujet, setSujet] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);
  const [sujetError, setSujetError] = useState(false);

  const login = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    if(!username) {
      setUsernameError(true);
    }
    if(!email) {
      setEmailError(true);
    } 
    if(!sujet) {
        setSujetError(true);
      } 
    if(!message) {
        setMessageError(true);
      }
    if(email && email ) {
      history.push('/tabs/home', {direction: 'none'});
    }
  };

    return (
        <IonPage id="teachingorder-page">
          <IonContent fullscreen>
            
                <IonButtons>
                    <IonBackButton defaultHref="/tabs/userprofile" className="back"/>
                </IonButtons>
                <IonText className="titre_order">  Need Help ?  </IonText>
              <br/>
              <br/>
              <br/>
              <hr className="trait_simple"></hr>
              <IonList className="event" lines="none">
            <IonListHeader className="titre_orders">Send your message </IonListHeader>
            <br/>
            <br/>

            <form noValidate onSubmit={login}>
          <IonList>    
            <IonItem>
              <IonLabel position="stacked" color="primary">Username</IonLabel>
              <IonInput name="username" type="text" value={username} spellCheck={false} autocapitalize="off" onIonChange={e => setUsername(e.detail.value!)}
                required>
              </IonInput>
            </IonItem>

            {formSubmitted && usernameError && <IonText color="danger">
              <p className="ion-padding-start">
                Username is required
              </p>
            </IonText>}

            <IonItem>
              <IonLabel position="stacked" color="primary">Email</IonLabel>
              <IonInput name="username" type="text" value={email} spellCheck={false} autocapitalize="off" onIonChange={e => setEmail(e.detail.value!)}
                required>
              </IonInput>
            </IonItem>

            {formSubmitted && usernameError && <IonText color="danger">
              <p className="ion-padding-start">
             Email is required
              </p>
            </IonText>}

            <IonItem>
              <IonLabel position="stacked" color="primary">Sujet</IonLabel>
              <IonInput name="username" type="text" value={sujet} spellCheck={false} autocapitalize="off" onIonChange={e => setSujet(e.detail.value!)}
                required>
              </IonInput>
            </IonItem>

            {formSubmitted && usernameError && <IonText color="danger">
              <p className="ion-padding-start">
             Sujet is required
              </p>
            </IonText>}
            <IonItem>
              <IonLabel position="stacked" color="primary">Votre Message</IonLabel>
              <IonTextarea name="password" value={message} onIonChange={e => setMessage(e.detail.value!)}>
              </IonTextarea>
            </IonItem>

            {formSubmitted && passwordError && <IonText color="danger">
              <p className="ion-padding-start">
                Message is required
              </p>
            </IonText>}
          </IonList>

          <IonRow>
            <IonCol>
              <IonButton className="login-button" type="submit" expand="block">Envoyer</IonButton>
            </IonCol>
          </IonRow>
        </form>

             </IonList>

         

          </IonContent>
                
        </IonPage>
        
        
  );
}
export default withRouter (Help);