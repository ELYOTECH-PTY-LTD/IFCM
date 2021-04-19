import React, { useState, useRef } from 'react';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonButtons, IonRow, IonCol, IonButton, IonList, IonItem, IonLabel, IonInput, IonText, IonRouterLink, IonIcon } from '@ionic/react';
import './Login.scss';
import { RouteComponentProps, withRouter } from 'react-router';
import { IonReactRouter } from '@ionic/react-router';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import history from '../history';
import { LogoFacebook } from 'react-ionicons'
import { LogoInstagram } from 'react-ionicons'
import { LogoTwitter } from 'react-ionicons'

type SomeComponentProps = RouteComponentProps;
const Login: React.FC<SomeComponentProps> = ({ history }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const login = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    if(!username) {
      setUsernameError(true);
    }
    if(!password) {
      setPasswordError(true);
    }
  };
    return (
      <IonPage id="login-page">
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">   
          </IonButtons>
          <IonTitle>Login to IFCM</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>

        <div className="login-logo">
          <img src="assets/img/ifcm_logo.png" alt="ifcm Logo" />
        </div>

        <form noValidate onSubmit={login}>
          <IonList>
            <IonButton expand="block" color="facebook" className="margin"> 
            <LogoFacebook
            color={'#ffffff'}
            height="25px"
            width="25px"
              /> <IonText className="facebook">Facebook Connect</IonText>
              
              </IonButton>
            
            <IonButton expand="block" color="instagram" className="margin">
            <LogoInstagram
            color={'#ffffff'}
            height="25px"
            width="25px"/> <IonText className="instagram">Instagram Connect</IonText>
            </IonButton>
            
            <IonButton expand="block" color="twitter" className="margin"> 
            
            <LogoTwitter
            color={'#ffffff'}
            height="25px"
            width="25px"/> <IonText className="twitter">Twitter Connect</IonText>
            </IonButton>
            
            <IonText className="ion-text-center"> <p className="gray" > OR</p></IonText>
            
            <IonItem>
              <IonLabel position="stacked" color="primary">Email</IonLabel>
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
              <IonLabel position="stacked" color="primary">Password</IonLabel>
              <IonInput name="password" type="password" value={password} onIonChange={e => setPassword(e.detail.value!)}>
              </IonInput>
            </IonItem>

            {formSubmitted && passwordError && <IonText color="danger">
              <p className="ion-padding-start">
                Password is required
              </p>
            </IonText>}
          </IonList>

          <IonRow>
            <IonCol>
              <IonButton type="submit" expand="block">Login</IonButton>
            </IonCol>
          </IonRow>
        </form>
        <IonText className="ion-text-center">
          <IonRouterLink href="/forgot" class="forgot">Forgot Password ?</IonRouterLink>
          <p>Don't have an account ? <IonRouterLink href="/Signup">Sign up</IonRouterLink></p>
        </IonText>
        

      </IonContent>

    </IonPage>
  );
};
export default withRouter (Login);

  