import React, { useState, useRef } from 'react';
import { IonContent, IonHeader, IonPage, IonToolbar, IonButton,IonInput, IonSlides,IonSlide,IonButtons,IonIcon,useIonViewWillEnter, IonImg, IonTitle, IonText, IonCard, IonCardContent, IonCardSubtitle ,IonList, IonItem, IonAvatar, IonFooter, IonLabel, IonTabButton,IonTabBar, IonGrid, IonRow, IonCol, IonCardTitle, IonCardHeader,IonBackButton } from '@ionic/react';
import { arrowBack, arrowForward, bookmarksSharp , lockClosedOutline} from 'ionicons/icons';
import './PaymentShippingDetails.scss';
import { RouteComponentProps, withRouter } from 'react-router';
import { IonReactRouter } from '@ionic/react-router';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import history from '../history';
import UserService from "../services/UserService";
import { BookmarkSharp, BagCheckOutline,CheckmarkCircleOutline, HomeOutline , BagOutline, HeartOutline , PersonOutline ,ArrowBackOutline , LockClosedOutline ,DiscOutline} from 'react-ionicons'

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
          <IonContent fullscreen>
                <IonButtons>
                    <IonBackButton defaultHref="/tabs/shopping/PaymentCardDetail" className="back"/>
                </IonButtons>
                <IonText className="titre_teaching">Checkout</IonText>

                <div className="multipleselection">

                  <div className="delivery_payment">
                      <CheckmarkCircleOutline
                        color={'#0c0e2f'}
                        height="35px"
                        width="35px"
                      />
                      <br/>
                    <IonText className="delivery_text">Delivery</IonText>
                  </div>

                  <div className="payment_payment">
                  <div className="cercle_grey">
                    <div className="circle_grey">
                      <div className="dot_grey">
                      </div>
                    </div>
                    </div>
                    
                    <IonText className="payment_confirmation">Payment</IonText>
                  </div>


                  <div className="confirmation_payment">
                  <div className="cercle_orang">
                    <div className="circle_orang">
                      <div className="dot_orang">
                      </div>
                    </div>
                    </div>
                    <br/>
                    <IonText className="confirmation_payment_text">Confirmation</IonText>
                  </div>
                  </div>

                <IonText className="Payment_title">Order placed  </IonText>
          <IonRow>
            <div className="shopping_card">
            <BagCheckOutline
            color={'#949494'} 
            height="75px"
            width="75px"
            cssClasses="icon_shop"
          />
          <IonText className="thanks">Thanks for your purchase.</IonText>
          <IonText className="ordernumber">Order #453745</IonText>
            </div>
          
          <div className="liste_order">
            <IonText className="orders">
            True Christianity is irresistible  
            </IonText>
            <IonText className="orders">
            True Christianivty is irresistible  
            </IonText>
            <IonText className="orders">
            True Christianity is irresistible
            </IonText>
            <IonText className="order_delivery">
            Delivery 
            </IonText>
            <IonText className="total_order">
            Total 
            </IonText>
          </div>
            
          </IonRow>
    
          <IonButton className="btn_valider_order" color="light" expand="block">
          Order details
          </IonButton>
          </IonContent>
        </IonPage>
        
        
  );
}
export default withRouter (PaymentShippingDetail);