import React, { useState } from 'react';
import { IonHeader, IonToolbar, IonContent, IonPage, IonButtons, IonMenuButton, IonButton, IonIcon, IonDatetime, IonSelectOption, IonList, IonItem, IonLabel, IonSelect, IonPopover } from '@ionic/react';
import './AboutUs.scss';
import { ellipsisHorizontal, ellipsisVertical } from 'ionicons/icons';
//import AboutPopover from '../components/AboutPopover';

interface AboutProps { }

const About: React.FC<AboutProps> = () => {


  const [location, setLocation] = useState<'BURUNDI - Bujumbura' | 'DRC - Kinshasa' | 'DRC - Lubumbashi' | 'ZAMBIA - Chipata' | 'ZAMBIA - Lusaka' | 'SOUTH AFRICA - Durban' | 'SOUTH AFRICA - Johannesburg' >('BURUNDI - Bujumbura');

  type PhysicalAddressItems = {
    location: string;
    address: string;
    contact : string;
    
  };
  const items: PhysicalAddressItems[] = [{ location: 'BURUNDI - Bujumbura', address: 'No. 10 Avenue Ngozi Commune RoheroM Quartier Rohero 1 Bujumbura Mairie Bujumbura/Mutanga Sud Bujumbura Burundi', contact:'+25 779 860 138 | +25 779 925 760'},
  { location: 'DRC - Kinshasa', address: '19805 boulevard Lumumba Commune de Limete a Kinshasa Kinshasa DRC', contact:'+243999917618 | +243997554217 | +243999918740 | +243815000150'},
  { location: 'DRC - Lubumbashi', address: '1600B av Munua Q/ Golf Meteo arret Prophet Philip Banda (bureau)', contact:'+243997029346 | +243997030643 | +243990535566 | +243993939997'},
  { location: 'ZAMBIA - Chipata', address: 'Chipata Day High School, Room 10d', contact:'+2609 6949 7625 | +2609 6614 7282 | +2609 7989 9869'},
  { location: 'ZAMBIA - Lusaka', address: 'Plot 873A Mungwi Road, Off Kasupe Road, Zingalume Lusaka West', contact:'+260955798158 Lusaka West Zambia | +260977789158 | +260977789158'},
  { location: 'SOUTH AFRICA - Durban', address: '19805 boulevard Lumumba Commune de Limete a Kinshasa Kinshasa DRC', contact:'+243999917618 | +243997554217 | +243999918740 | +243815000150'} ,
  { location: 'SOUTH AFRICA - Johannesburg', address: '19805 boulevard Lumumba Commune de Limete a Kinshasa Kinshasa DRC', contact:'+243999917618 | +243997554217 | +243999918740 | +243815000150'} ];


  const selectOptions = {
    header: 'Select a branch'
  };



  return (
    <IonPage id="about-page">
      <IonContent>
        <IonHeader className="ion-no-border">
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>

        <div className="about-header">
          {/* Instead of loading an image each time the select changes, use opacity to transition them */}
          <div className="about-image bujumbura" style={{'opacity': location === 'BURUNDI - Bujumbura' ? '1' : undefined}}></div>
          <div className="about-image kinshasa" style={{'opacity': location === 'DRC - Kinshasa' ? '1' : undefined}}></div>
          <div className="about-image lubumbashi" style={{'opacity': location === 'DRC - Lubumbashi' ? '1' : undefined}}></div>
          <div className="about-image chipata" style={{'opacity': location === 'ZAMBIA - Chipata' ? '1' : undefined}}></div>
          <div className="about-image lusaka" style={{'opacity': location === 'ZAMBIA - Lusaka' ? '1' : undefined}}></div>
          <div className="about-image durban" style={{'opacity': location === 'SOUTH AFRICA - Durban' ? '1' : undefined}}></div>
          <div className="about-image johannesburg" style={{'opacity': location === 'SOUTH AFRICA - Johannesburg' ? '1' : undefined}}></div>

        </div>
        <div className="about-info">
          <h3 className="ion-padding-top ion-padding-start">About Impact For Christ Ministries</h3>

          <p className="ion-padding-start ion-padding-end">
          Who we are?
Impact for Christ Ministries is a revelation of the Church of the Lord Jesus Christ, governed by Him as the Head, according to the enunciation of the Holy Scriptures, the working of the Holy Spirit and the ministrations instituted by Jesus Himself. We are a ministry of the Lord Jesus Christ, where His name is lifted up high and His limitless power demonstrated – According to John 14:12, “Doing the works of Jesus Christ and greater works than He did for those who believe in Him.”

Vision
John 14:12, “Doing the Works of Jesus Christ” Most assuredly, I say to you, he who believes in Me, the works that I do he will do also and greater works than these he will do, because I go to My Father.”

Mission
To glorify God, to proclaim the Kingdom of God by preaching the Gospel of the Lord Jesus Christ through the power of The Holy Spirit. To minister to the needs of the total person. To develop, equip and release believers into ministry. To extend the influence of the church beyond its boundaries and abroad.

What we stand for?
Prayer
Intensity of Prayer
High Praise
Strong Godly established relationships
Development and Empowerment of strong leadership
Healing and Deliverance
Release of Apostolic and Prophetic anointing
Breaking of Holy Communion bread
Apostolic liberal giving          </p>

          <h3 className="ion-padding-top ion-padding-start">Details</h3>

          <IonList lines="none">
            <IonItem>
              <IonLabel>
                Location
              </IonLabel>
              <IonSelect value={location} interfaceOptions={selectOptions} onIonChange={(e) => setLocation(e.detail.value as any)}>
                <IonSelectOption value="BURUNDI - Bujumbura">BURUNDI - Bujumbura'</IonSelectOption>
                <IonSelectOption value="DRC - Kinshasa">DRC - Kinshasa</IonSelectOption>
                <IonSelectOption value="DRC - Lubumbashi">DRC - Lubumbashi</IonSelectOption>
                <IonSelectOption value="ZAMBIA - Chipata">ZAMBIA - Chipata</IonSelectOption>
                <IonSelectOption value="ZAMBIA - Lusaka">ZAMBIA - Lusaka</IonSelectOption>
                <IonSelectOption value="SOUTH AFRICA - Durban">SOUTH AFRICA - Durban</IonSelectOption>
                <IonSelectOption value="SOUTH AFRICA - Johannesburg">SOUTH AFRICA - Johannesburg</IonSelectOption>

              </IonSelect>
            </IonItem>

             {items.map((image) => (
            <IonItem>
              <IonLabel>
                Physical Address
              </IonLabel>
              <IonLabel> {image.address}
              </IonLabel>
            </IonItem>
             ))};
          </IonList>

          <h3 className="ion-padding-top ion-padding-start">Internet</h3>

        

        </div>
      </IonContent>


    </IonPage>
  );
};

export default React.memo(About);