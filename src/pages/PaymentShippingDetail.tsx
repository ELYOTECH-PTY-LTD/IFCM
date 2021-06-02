import React, { useState, useRef } from 'react';
import { IonContent, IonHeader, IonPage, IonToolbar, IonButton,IonInput, IonSlides,IonSlide,IonButtons,IonIcon,useIonViewWillEnter, IonImg, IonTitle, IonText, IonCard, IonCardContent, IonCardSubtitle ,IonList, IonItem, IonAvatar, IonFooter, IonLabel, IonTabButton,IonTabBar, IonGrid, IonRow, IonCol, IonCardTitle, IonCardHeader,IonBackButton, IonListHeader } from '@ionic/react';
import { arrowBack, arrowForward, bookmarksSharp , lockClosedOutline,chevronBackOutline, checkmarkSharp, checkmarkCircle, stopCircleOutline,lockOpenOutline, checkmarkOutline} from 'ionicons/icons';
import './PaymentShippingDetails.scss';
import { RouteComponentProps, withRouter } from 'react-router';
import { IonReactRouter } from '@ionic/react-router';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import history from '../history';
import UserService from "../services/UserService";
import { BookmarkSharp, LockOpenOutline,CheckmarkOutline ,BagCheckOutline,CheckmarkCircleOutline, HomeOutline , BagOutline, HeartOutline , PersonOutline ,ArrowBackOutline , LockClosedOutline ,DiscOutline} from 'react-ionicons'


  type OrderItem = {
    id : string
    desc: string;
    price: string;
  };
  const orderitems: OrderItem[] = [{ id :'1', desc: 'True Christianity is irresistible', price:'R 230'}, { id :'2', desc: 'Praying the Bible into your life', price:'R 80'},
  { id :'3', desc: 'Delivery', price:'R 25'}];

  type OrderTotal = {
    desc: string;
    price: string;
  };
  const totalitems: OrderTotal[] = [{desc: 'Total', price:'R 325'}];


type SomeComponentProps = RouteComponentProps;
const PaymentShippingDetail: React.FC<SomeComponentProps> = ({ history }) => {
    const [Card_name, setUsername] = useState('');
    const [Card_Number, setPassword] = useState('');
    const [Date, setDate] = useState('');
    const [Exp, setExp] = useState('');
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [Card_nameError, setUsernameError] = useState(false);
    const [Card_NumberError, setPasswordError] = useState(false);
    const [DateError, setDateError] = useState(false);
    const [ExpError, setExpError] = useState(false);
    const login = async (e: React.FormEvent) => {
        e.preventDefault();
        setFormSubmitted(true);
        if(!Card_name) {
          setUsernameError(true);
        }
        if(!Card_Number) {
          setPasswordError(true);
        }
        if(!DateError) {
            setPasswordError(true);
          }
          if(!ExpError) {
            setPasswordError(true);
          }
      };
    return (
        <IonPage id="paymentshipping-page">

            {/*-- Back button with a default href --*/}
    <IonHeader className="navbar-noborder" >
      <IonToolbar >
        <IonButtons slot="start">
        <IonBackButton icon={chevronBackOutline} defaultHref="/tabs/shopping/PaymentCardDetail" />
        </IonButtons>
        <IonTitle className="eventdetailstitle"> Checkout</IonTitle>
      </IonToolbar>
    </IonHeader>

    
          <IonContent fullscreen>
           
           <br/>
           <br/>
           <IonItem lines="none">
              <IonIcon icon={stopCircleOutline} ariaLabel="Delivery"/> <br/>
              <IonLabel>Delivery</IonLabel>
            
              <IonIcon icon={stopCircleOutline} ariaLabel="Payment</IonIcon"/><br/>
              <IonLabel>Payment</IonLabel>

              <IonIcon icon={stopCircleOutline} ariaLabel="Confirmation"/><br/>
              <IonLabel>Confirmation</IonLabel>

</IonItem>


<div className="divider-block"></div>

<IonCard className="PaymentShip_card" no-border>
<IonCardTitle className="PaymentShip_title">Teaching unlocked </IonCardTitle>
<br/>
<br/>
<IonIcon icon={lockOpenOutline} className="lock-button"></IonIcon>
<IonIcon icon={checkmarkOutline} className="check-button"></IonIcon>
  <IonText className="thanks">Thanks for your purchase.</IonText>

 <IonText className="ordernumber">Order #453745</IonText>


  


   
            {orderitems.map((image) => (

            <IonList lines="none">

<IonRow>
  <IonCol>
    <IonItem>
      <IonText slot="start" className="orders"> {image.desc}</IonText>
      </IonItem>
    </IonCol>
    <IonCol>
        <IonItem>
         <IonText slot="end" className="orders"> {image.price}</IonText>
         </IonItem>
    </IonCol>
    </IonRow>

</IonList>

            ))}

      



            {totalitems.map((image) => (
<IonList>
<IonRow>
<IonCol>
  <IonItem>
    <IonText slot="start" className="total_order"> {image.desc}</IonText>
    </IonItem>
  </IonCol>
  <IonCol>
      <IonItem>
       <IonText slot="end" className="total_order"> {image.price}</IonText>
       </IonItem>
  </IonCol>
  </IonRow>

</IonList>

            ))} 

<br/>
<br/>

</IonCard>
          <IonButton className="user-logout" shape="round" expand="block" href="#">
                Order details
            </IonButton>

    </IonContent>
        </IonPage>
        
        
  );
}
export default withRouter (PaymentShippingDetail);