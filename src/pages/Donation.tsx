import React, { useState, useRef } from 'react';
import { IonSelectOption, IonSelect, IonTextarea, IonItemDivider, IonInput, IonThumbnail, IonContent, IonHeader, IonPage, IonToolbar, IonButton, IonSlides,IonSlide,IonButtons,IonIcon,useIonViewWillEnter, IonImg, IonTitle, IonText, IonCard, IonCardContent, IonCardSubtitle ,IonList, IonItem, IonAvatar, IonFooter, IonLabel, IonTabButton,IonTabBar, IonGrid, IonRow, IonCol, IonCardTitle } from '@ionic/react';
import { arrowForward, bookmarksSharp } from 'ionicons/icons';
import './Donation.scss';
import { RouteComponentProps, withRouter } from 'react-router';
import { IonReactRouter } from '@ionic/react-router';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import history from '../history';
import UserService from "../services/UserService";
import { BookmarkSharp,  HomeOutline , BagOutline, HeartOutline , PersonOutline} from 'react-ionicons'

const options = {
    cssClass: 'my-custom-interface'
  };

type SomeComponentProps = RouteComponentProps;
const Donation: React.FC<SomeComponentProps> = ({ history }) => {
    const [text, setText] = useState<string>();
    const [number, setNumber] = useState<number>();


    return (
        <IonPage id="teaching-page">
          <IonContent fullscreen>
              <IonCard className="teaching-title" >
                  <IonCardTitle className="titre">Donation</IonCardTitle>
                  <IonCardSubtitle className="titre_text">Support Impact For Christ Ministries Charitable Deeds</IonCardSubtitle>
              </IonCard>
  
            <IonCard className="emptycard-teaching">
            <div className="div-donation">
                <IonGrid>
                    <IonRow>
                        <IonCol >
                            <IonCard className="donation-card">
                            <img src="/assets/img/love.jpg" className="donation-img"/>
                            </IonCard>
                        </IonCol>
                        <IonCol >

                            <IonCard className="donation-card">
                            <img src="/assets/img/charities2.jpeg" className="donation-img"/>

                            </IonCard>                        
                            </IonCol>
                        <IonCol >
                        <IonCard className="donation-card"> 
                            <img src="/assets/img/charities3.jpeg" className="donation-img"/>

                            </IonCard>                        
                        </IonCol>

                    </IonRow>
                    
                </IonGrid>
            </div>
            <div>
                <p>
                <IonText className="donation-question">How much wanna donate ? </IonText>
                </p>
            </div>

    
<IonCard className="dollar-card">
    <IonGrid className="dollar-grid">
        <IonRow>
            <IonCol className="dollar-col">
                <IonImg src="/assets/img/Dollar_Icon.svg" className="dollar-img"/>
            </IonCol>
            <IonCol>
            <IonInput className="input-amount" type="number" value={number} placeholder="0,00"   onIonChange={e => setNumber(parseInt(e.detail.value!, 10))}></IonInput>
            <IonItemDivider className="divider"></IonItemDivider>
            </IonCol>
        </IonRow>
    </IonGrid>
</IonCard>

        <IonItem>
          <IonLabel>Choose your cause</IonLabel>
          <IonSelect interface="action-sheet" interfaceOptions={options}>
          <IonSelectOption  value="Tithe">Tithe</IonSelectOption>
            <IonSelectOption value="Offering">Offering</IonSelectOption>
            <IonSelectOption value="IFCM Charity">Impact For Christ Ministries Charitable Deeds   </IonSelectOption>
            <IonSelectOption value="Alexandra">Alexandra Flash Floods and IFCM Charity   </IonSelectOption>
          </IonSelect>
        </IonItem>

<p>&nbsp;</p>
        <IonRow>
            <IonCol>
              <IonButton className="donation-button" type="submit" expand="block">Donate</IonButton>
            </IonCol>
          </IonRow>

</IonCard>



          </IonContent>
                
        </IonPage>
        
  );
}
export default withRouter (Donation);