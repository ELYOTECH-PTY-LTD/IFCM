import React from "react";
import {IonHeader, IonPage,IonIcon,IonButtons, IonToolbar, IonBackButton} from "@ionic/react";
const Shoppingitemdetails: React.FC = () => {
    return (
        <IonPage>
             <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton />

        </IonButtons>
      </IonToolbar>
    </IonHeader>
        </IonPage>
    );
};

export default Shoppingitemdetails