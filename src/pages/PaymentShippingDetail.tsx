import React, { useState, useRef } from 'react';
import { IonContent, IonHeader, IonPage, IonToolbar, IonButton,IonInput, IonSlides,IonSlide,IonButtons,IonIcon,useIonViewWillEnter, IonImg, IonTitle, IonText, IonCard, IonCardContent, IonCardSubtitle ,IonList, IonItem, IonAvatar, IonFooter, IonLabel, IonTabButton,IonTabBar, IonGrid, IonRow, IonCol, IonCardTitle, IonCardHeader,IonBackButton } from '@ionic/react';
import { arrowBack, arrowForward, bookmarksSharp , lockClosedOutline} from 'ionicons/icons';
import './PaymentShippingDetail.scss';
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

                <div className="selection">
                    <div className="payment">
                        <DiscOutline
                        color={'#fe7d4e'}
                        height="24px"
                        width="24px"
                        cssClasses="payment_circle"
                        />
                        <br/>
                        <IonText className="payment_text">Payment</IonText>
                    </div>
                    <div className="confirmation">
                        <DiscOutline
                        color={'black'}
                        height="24px"
                        width="24px"
                        cssClasses="confirmation_circle"
                        />
                        <br/>
                        <IonText className="confirmation_text">Confirmation</IonText>
                    </div>
                </div>

                <IonText className="Payment_title">Teaching unlocked </IonText>

                
                


              
          
            
            
            
       

          <IonRow>
            
            <IonCol>
              <div className="total">
              <IonText slot="start" className="total_text">Total</IonText>
              <IonText slot="end" className="prix_total">R 5.00</IonText>
              </div>
            
            </IonCol>
          </IonRow>
    

          </IonContent>
        </IonPage>
        
        
  );
}
export default withRouter (PaymentShippingDetail);