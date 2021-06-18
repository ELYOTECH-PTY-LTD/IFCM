import React, { useState, useRef } from 'react';
import { IonContent, IonHeader, IonPage, IonToolbar, IonButton,IonInput, IonSlides,IonSlide,IonButtons,IonIcon,useIonViewWillEnter, IonImg, IonTitle, IonText, IonCard, IonCardContent, IonCardSubtitle ,IonList, IonItem, IonAvatar, IonFooter, IonLabel, IonTabButton,IonTabBar, IonGrid, IonRow, IonCol, IonCardTitle, IonCardHeader,IonBackButton, IonToggle } from '@ionic/react';
import { arrowBack, arrowForward, bookmarksSharp , lockClosedOutline,chevronBackOutline ,stopCircleOutline } from 'ionicons/icons';
import './PaymentDelieryDetail.scss';
import { RouteComponentProps, withRouter } from 'react-router';
import { IonReactRouter } from '@ionic/react-router';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import history from '../history';
import UserService from "../services/UserService";
import { BookmarkSharp,  HomeOutline , BagOutline, HeartOutline , PersonOutline ,ArrowBackOutline , LockClosedOutline ,DiscOutline , AddOutline} from 'react-ionicons'
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

const PaymentDelieryDetail: React.FC<SomeComponentProps> = ({ history }) => {

    let [TabType, setTabType] = useState('visa');
    const [VisaActive , setVisaActive] = useState(true);
    const [MastercardActive , setMastercardActive] = useState(false);
    const [PaypalActive , setPaypalActive] = useState(false);


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
          <IonBackButton icon={chevronBackOutline} defaultHref="/tabs/teaching/TeachingOrder" />
          </IonButtons>
          <IonTitle className="eventdetailstitle"> Checkout</IonTitle>
          </IonToolbar>
          </IonHeader>
          <IonContent fullscreen>
          <br/>
          <br/>


          <IonItem lines="none" className="item_block">
          <div className="item_flex">
          <IonImg src="/assets/img/cercleorange.png" className="cercle_orange_2" alt="cercle_valide"></IonImg>
            <IonText className="delivery_text">Delivery</IonText>
          </div>

            <hr className="trait_simple"></hr>
          <div className="item_flex">
          <IonImg src="/assets/img/cerclegris.png" className="cercle_gris1" alt="cercle_gris"></IonImg>
            <IonText className="text_payment">Payment</IonText>
          </div>

          <hr className="trait_simple"></hr>
          <div className="item_flex">
         <IonImg src="/assets/img/cerclegris.png" className="cercle_gris2" alt="cercle_gris"></IonImg>
            <IonText className="text_confirmation">Confirmation</IonText>
          </div>
          </IonItem>



          <div className="divider_block_top"></div>
                <IonText className="Payment_title">Delivery Option</IonText>
                <div className="selection_delivery">

                <IonList>
                <IonCard className={VisaActive ?  "shipping" : "shipping_off"}
                color="light"
                onClick={() => ChangeForVisa()}>
                           
                <div className="flex">
                  <IonTitle className="title_delivery">SHIPPING</IonTitle>
                 </div>

                <div className="flex marge">
                    
                    <AddOutline
                color={'rgb(73, 73, 73)'}
                height="25px"
                width="25px"
                cssClasses="plus"
                />
                <IonText className="adress_text">Add an address </IonText>
                </div>
                <br/>

                <IonText className="price margebetter">R 25 </IonText>
                </IonCard>
                        
                    

                  
                    <IonCard className={PaypalActive ?  "pickup" : "pickup_off"}
                        color="light"
                         onClick={() => ChangeForPaypal()}>

                             <div className="flex">
                             <IonTitle className="title_delivery">PICK UP</IonTitle>
                             </div>
                           
                <div className="flex marge">
                <IonText className="marge pickup_adress">Bookshop Main 
                    8 Smal Street, Johannesburg, GT
                    </IonText>
                </div>
                <br/>

                <IonText className="price margebottom margebetter">R 25 </IonText>

                </IonCard>
                    
              
                </IonList>
                
              
                
                        </div>
                      
                      <div className="divider_block_bottom2"></div>

                      <IonRow>
                        <IonCol>
                            <div className="total">
                          <IonText slot="start" className="total_text delivery margin_none">Order</IonText>
                          <IonText slot="end" className="prix_total delivery_total margin_none">R 5.00</IonText>
                          </div>

                          <div className="total margin_none">
                          <IonText slot="start" className="total_text delivery margin_none">Delivery</IonText>
                          <IonText slot="end" className="prix_total delivery_total margin_none">R 5.00</IonText>
                          </div>

                          <div className="total margin_none">
                          <IonText slot="start" className="total_text margin_none">Total</IonText>
                          <IonText slot="end" className="prix_total margin_none">R 5.00</IonText>
                          </div>

                          <IonButton type="submit" expand="block" className="btn_complete_delivery flex" href="/paymentcarddetails">Proceed to payment</IonButton>
                        </IonCol>
                      </IonRow>
                   
                        
          
          </IonContent>
        </IonPage>
        
        
  );
}
export default withRouter (PaymentDelieryDetail);