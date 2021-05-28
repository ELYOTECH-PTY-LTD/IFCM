import React, { useState, useRef } from 'react';
import { IonContent, IonHeader, IonPage, IonToolbar, IonButton,IonInput, IonSlides,IonSlide,IonButtons,IonIcon,useIonViewWillEnter, IonImg, IonTitle, IonText, IonCard, IonCardContent, IonCardSubtitle ,IonList, IonItem, IonAvatar, IonFooter, IonLabel, IonTabButton,IonTabBar, IonGrid, IonRow, IonCol, IonCardTitle, IonCardHeader,IonBackButton } from '@ionic/react';
import { arrowBack, arrowForward, bookmarksSharp , lockClosedOutline} from 'ionicons/icons';
import './PaymentCardDetail.scss';
import { RouteComponentProps, withRouter } from 'react-router';
import { IonReactRouter } from '@ionic/react-router';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import history from '../history';
import UserService from "../services/UserService";
import { BookmarkSharp,  HomeOutline , BagOutline, HeartOutline , PersonOutline ,ArrowBackOutline , LockClosedOutline ,DiscOutline} from 'react-ionicons'

type Item = {
    src: string;
    title: string;
    date: string;
    text:string;
    prix:string;
  };
  const items: Item[] = [{ 
  src: '/assets/img/Romance-1.jpg', title: 'Love teaching', date:'21 Feb. 2021',text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel enim nec urna …',prix:'5',},];
  
type SomeComponentProps = RouteComponentProps;
const PaymentCardDetail: React.FC<SomeComponentProps> = ({ history }) => {
    const [Card_name, setCardName] = useState('');
    const [Card_Number, setCardNumber] = useState('');
    const [Date, setDate] = useState('');
    const [Exp, setExp] = useState('');
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [Card_nameError, setCardNameError] = useState(false);
    const [Card_NumberError, setCardNumberError] = useState(false);
    const [DateError, setDateError] = useState(false);
    const [ExpError, setExpError] = useState(false);
    const login = async (e: React.FormEvent) => {
        e.preventDefault();
        setFormSubmitted(true);
        if(!Card_name) {
          setCardNameError(true);
        }
        if(!Card_Number) {
          setCardNumberError(true);
        }
        if(!DateError) {
          setDateError(true);
          }
          if(!ExpError) {
            setExpError(true);
          }
      };
    return (
        <IonPage id="payment-page">
          <IonContent fullscreen>
                <IonButtons>
                    <IonBackButton defaultHref="/tabs/teaching/TeachingDetailsPrivate" className="back"/>
                </IonButtons>
                <IonText className="titre_teaching">Checkout</IonText>
                <div className="selection">
                    <div className="payment">
                        
                    <div className="cercle_orange">
                <div className="circle_orange">
                  <div className="dot_orange">
                  </div>
                </div>
                </div>
                        
                        

                        <br/>
                        <IonText className="payment_text">Payment</IonText>
                    </div>
                    <div className="confirmation">
                        <div className="cercle_black">
                    <div className="circle_black">
                      <div className="dot_black">
                      </div>
                    </div>
                    </div>
                        <br/>
                        <IonText className="confirmation_text">Confirmation</IonText>
                    </div>
                </div>

                <IonText className="Payment_title">Payment method</IonText>

                <div className="selection_payment">
                    <div className="visa">
                        <IonButton className="btn_visa" color="light">
                            <img src="/assets/img/LogoVISA.png" alt="visa" className="visa_img"></img>
                        </IonButton>
                    </div>

                    <div className="mastercard">
                        <IonButton className="mastercard_visa" color="light">
                            <img src="/assets/img/LogoMastercard.svg" alt="mastercard" className="mastercard_img"></img>
                        </IonButton>
                    </div>

                    <div className="paypal">
                        <IonButton className="btn_paypal" color="light">
                            <img src="/assets/img/LogoPaypal.png" alt="paypal" className="paypal_img"></img>
                        </IonButton>
                    </div>
                </div>
                <div className="payment_form">


                <form noValidate onSubmit={login}>
              <IonList> 
            
            <IonItem>
              <IonLabel position="stacked" color="primary">Card holder name </IonLabel>
              <IonInput name="username" type="text" value={Card_name} spellCheck={false} autocapitalize="off" onIonChange={e => setCardName(e.detail.value!)}
                required>
              </IonInput>
            </IonItem>

            {formSubmitted && Card_nameError && <IonText color="danger">
              <p className="ion-padding-start">
              Card holder is required
              </p>
            </IonText>}

            <IonItem>
              <IonLabel position="stacked" color="primary">Card Number </IonLabel>
              <IonInput name="password" type="password" value={Card_Number} onIonChange={e => setCardNumber(e.detail.value!)}>
              </IonInput>
            </IonItem>

            {formSubmitted && Card_NumberError && <IonText color="danger">
              <p className="ion-padding-start">
              Card Number  is required
              </p>
            </IonText>}

            <div className="flex date_op">
                    <IonItem className="date_payment">
                    <IonLabel position="stacked" color="primary" >Expiry Date  </IonLabel>
                    <IonInput name="password" type="password" value={Date} onIonChange={e => setDate(e.detail.value!)}>
                    </IonInput>
                    </IonItem>

                    {formSubmitted && DateError && <IonText color="danger">
                    <p className="ion-padding-start">
                     Date  is required
                    </p>
                    </IonText>}

                    <IonItem className="exp_payment">
                    <IonLabel position="stacked" color="primary" >CVV   </IonLabel>
                    <IonInput name="text_cvv" type="number" max="3" value={Exp} onIonChange={e => setExp(e.detail.value!)}>
                    </IonInput>
                    </IonItem>

                    {formSubmitted && ExpError && <IonText color="danger">
                    <p className="ion-padding-start">
                    CVV  is required
                    </p>
                    </IonText>}
            </div>
            
            
          </IonList>

          <IonRow>
            
            <IonCol>
              <div className="total">
              <IonText slot="start" className="total_text">Total</IonText>
              <IonText slot="end" className="prix_total">R 5.00</IonText>
              </div>
              <IonButton type="submit" expand="block" className="btn_complete" href="/tabs/shopping/PaymentShippingDetail">Complete order</IonButton>
            </IonCol>
          </IonRow>
        </form>
                </div>

          </IonContent>
        </IonPage>
        
        
  );
}
export default withRouter (PaymentCardDetail);