import React, { useState, useRef } from 'react';
import { IonContent, IonHeader, IonPage, IonToolbar, IonButton,IonInput, IonSlides,IonSlide,IonButtons,IonIcon,useIonViewWillEnter, IonImg, IonTitle, IonText, IonCard, IonCardContent, IonCardSubtitle ,IonList, IonItem, IonAvatar, IonFooter, IonLabel, IonTabButton,IonTabBar, IonGrid, IonRow, IonCol, IonCardTitle, IonCardHeader,IonBackButton, IonToggle } from '@ionic/react';
import { arrowBack, arrowForward, bookmarksSharp , lockClosedOutline,chevronBackOutline ,stopCircleOutline} from 'ionicons/icons';
import './PaymentCardDetail.scss';
import { RouteComponentProps, withRouter } from 'react-router';
import { IonReactRouter } from '@ionic/react-router';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import history from '../history';
import UserService from "../services/UserService";
import { BookmarkSharp,  HomeOutline , BagOutline, HeartOutline , PersonOutline ,ArrowBackOutline , LockClosedOutline ,DiscOutline} from 'react-ionicons'
import { Component } from 'ionicons/dist/types/stencil-public-runtime';
import { render } from '@testing-library/react';


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
    let [TabType, setTabType] = useState('visa');
    const [Date, setDate] = useState('');
    const [Exp, setExp] = useState('');
   
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [Card_nameError, setCardNameError] = useState(false);
    const [Card_NumberError, setCardNumberError] = useState(false);
    const [DateError, setDateError] = useState(false);
    const [ExpError, setExpError] = useState(false);

    const [lightModeVisa, setLightModeVisa] = useState(false);
    const [lightModeMastercard, setLightModeMastercard] = useState(false);
    const [lightModePaypal, setLightModePaypal] = useState(false);

    const [VisaActive , setVisaActive] = useState(true);
    const [MastercardActive , setMastercardActive] = useState(false);
    const [PaypalActive , setPaypalActive] = useState(false);

    
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
      const ChangeForVisa = () => {
        setVisaActive(true)
          
            setMastercardActive(true)
            setPaypalActive(true)
           
          setTabType(TabType = 'visa');
          
      }
     const ChangeForMastercard = () => {
      setMastercardActive(false)
     
        setVisaActive(false)
        setPaypalActive(true)
       
      setTabType(TabType = 'mastercard');
      
  }
  const ChangeForPaypal = () => {
    setPaypalActive(false)
  
      setVisaActive(false) 
      setMastercardActive(true)
     
    setTabType(TabType = 'paypal');
    
}

    return (
        <IonPage id="payment-page">
          <IonHeader className="navbar-noborder" >
          <IonToolbar >
          <IonButtons slot="start">
          <IonBackButton icon={chevronBackOutline} defaultHref="/paymentdeliverydetails" />
          </IonButtons>
          <IonTitle className="eventdetailstitle"> Checkout</IonTitle>
          </IonToolbar>
          </IonHeader>
          <IonContent fullscreen>
          <br/>
          <br/>
          <IonItem lines="none" className="item_block">
          <div className="item_flex">
          <IonImg src="/assets/img/cerclevalide.png" className="cercle_valide" alt="cercle_valide"></IonImg>
            <IonText className="deliver_text">Delivery</IonText>
          </div>
            <hr className="trait_simple"></hr>
          <div className="item_flex">
          <IonImg src="/assets/img/cercleorange.png" className="cercle_orange" alt="cercle_orange"></IonImg>
            <IonText className="payment_text">Payment</IonText>
          </div>
          <hr className="trait_simple"></hr>
          <div className="item_flex">
         <IonImg src="/assets/img/cerclegris.png" className="cercle_gris" alt="cercle_gris"></IonImg>
            <IonText className="confirmation_text">Confirmation</IonText>
          </div>
          </IonItem>
          <div className="divider_block_top"></div>
                <IonText className="Payment_title">Payment method</IonText>
                <div className="selection_payment">
                <IonButton className={VisaActive ?  "btn_paypal_on" : "btn_visa_off"}
                color="light"
                
                onClick={() => ChangeForVisa()}>
                            <img 
                            src={VisaActive ? "/assets/img/LogoVisaOn.png" : "/assets/img/LogoVisaOff.png"}
                            alt="visa" 
                            className={VisaActive ?  "visa_img" : "visa_img_off"}
                            id="visa"
                            ></img>
                        </IonButton>
                        
                        <IonButton className={MastercardActive ?  "btn_mastercard_off" : "btn_mastercard_on"}
                        color="light" 
                        onClick={() => ChangeForMastercard()}>
                            <img 
                            src={MastercardActive ? "/assets/img/LogoMastercardOff.png" : "/assets/img/LogoMastercardOn.png"}
                            alt="mastercard" 
                            className={MastercardActive ?  "Mastercard_img" : "Mastercard_img_off"}
                            id="mastercard"
                            
                            ></img>
                        </IonButton>
                    
                        <IonButton className={PaypalActive ?  "btn_paypal_off" : "btn_paypal_on"}
                        color="light"
                         onClick={() => ChangeForPaypal()}>
                            <img
                               src={PaypalActive ? "/assets/img/LogoPaypalOff.png" : "/assets/img/LogoPaypalOn.png"}
                               alt="paypal" 
                               className={PaypalActive ?  "paypal_img" : "paypal_img_off"}
                               id="paypal"
                            />
                        </IonButton>
                </div>
                {
                            TabType === 'visa' && 
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
                      <div className="divider_block_bottom"></div>
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
                        }

                        {
                            TabType === 'mastercard' && 
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
                      <div className="divider_block_bottom"></div>
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
                        }
                        {
                            TabType === 'paypal' && 
                            
                          <div>
                            <IonList>
                            <IonButton className="paypal_button_payment" expand="block" color="primary">Payer avec Paypal</IonButton>
                            </IonList>
                            
                          </div>
                        }
          </IonContent>
        </IonPage>
        
        
  );
}
export default withRouter (PaymentCardDetail);