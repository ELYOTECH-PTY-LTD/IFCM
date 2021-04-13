import React, { useState, useRef } from 'react';
import { IonContent, IonHeader, IonPage, IonToolbar, IonButton, IonSlides,IonSlide,IonButtons,IonIcon,useIonViewWillEnter } from '@ionic/react';
import { arrowForward } from 'ionicons/icons';
import './Welcome.scss';
import { RouteComponentProps, withRouter } from 'react-router';
import { IonReactRouter } from '@ionic/react-router';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import history from '../history';


type SomeComponentProps = RouteComponentProps;
const Welcome: React.FC<SomeComponentProps> = ({ history }) => {
   const [showSkip, setShowSkip] = useState(true);
    const slideRef = useRef<HTMLIonSlidesElement>(null);

    const handleSlideChangeStart = () => { 
    slideRef.current!.isEnd().then(isEnd => setShowSkip(!isEnd));
    }
    
    const goHome = () => history.push('/Login');
    return (
        
      <IonPage id="tutorial-page">
    <IonHeader no-border>
      <IonToolbar>
        <IonButtons slot="end">
          {showSkip && <IonButton color='primary' onClick={goHome}> Skip</IonButton>}
         
        </IonButtons>
      </IonToolbar>
    </IonHeader>
    <IonContent fullscreen>

      <IonSlides ref={slideRef} onIonSlideWillChange={handleSlideChangeStart} pager={false}>
        <IonSlide>
          <img src="/assets/img/ifcm_logo.png" alt="holy_land" className="slide-image" />
          <h2 className="slide-title orange_ifcm" >​​Welcome to IFCM mobile App</h2>
          <b><p className="blue_ifcm"> PLACE TO CALL HOME</p></b>
          <p>Impact for Christ Ministries (IFCM) is a ministry of the Lord Jesus Christ, where His name is lifted up high and His limitless power 
            demonstrated. This is done through the teaching of the Gospel of Truth, Prophecy and Evangelism while ministering deliverance to the oppressed.
          </p>
          <h6> John 14:12 - "Doing the works of Jesus Christ." </h6>
        </IonSlide>

        <IonSlide>
        <img src="assets/img/mog.jpeg" alt="Prophet Philip Banda" className="slide-photo" />
          <h2 className="slide-title orange_ifcm"> Who is the Prophet Philip Banda?</h2>
          <p>
          <b>The Prophet to the Nations, a servant of the Almighty God, a great teacher of the Word, the Man of God, Prophet Philip Banda.</b> .
            His distinct attributes are endless, a humble servant of God who loves, obeys, adores and respects God. He is more characterized by loving people,
            loving Israel and adoration for the Jewish Nation.
          </p>
          <p>The Prophet has taught and covered a wide range of Biblical subjects and practical topics that affect our daily lives in this generation.
            Everyone listening to his teachings, whether live service in church, ITVN, via webstream, listening to a recorded message on CD or DVD, 
            reading ECHOES of God magazine or the Prophet’s books, is able to identify his or her problem as well as find the solution in the teaching. 
            Through the direct and uncompromised truth that has been taught by the Prophet over the years, 
            <b>the Bible has been simplified to the young and old</b>, to the theologians, politicians, presidents, directors, professionals, 
            business people, graduates as well as the man on the street.</p>
            <p>To the Prophet, this is what he was born to do, 
              <b>to introduce the God of Israel to the people and to point the Nations to Jesus Christ.</b>
            God Almighty has indeed blessed this generation with the Moses of its time. When reading the Bible, all the Kings of Israel had a Prophet behind them. 
            Are we not a blessed generation to have a Prophet among us?
          </p>
        </IonSlide>

        <IonSlide>
        <img src="assets/img/holyland.png" alt="" className="slide-photo" />
        <h2 className="slide-title orange_ifcm">Holy Land - the fullfillment of a vision</h2>
        <p><b>Holy Land is the realization of the vision of the man of God, the prophet Philippe Banda.</b> 
          A holy land on African soil which offers all those who seek God a place of encounter with their Creator. 
          Holy Land is a place of prayer, meditation, a blessed and sanctified place that has the sweet scent of Jerusalem. 
          We are at home there.
        </p>
        <p>Address: Portion 35 of the Farm Tweefontein 523JQ, Kromdraai Road, Mogale City, 1739</p>
          <IonButton fill="clear" onClick={goHome}>
            Continue
            <IonIcon slot="end" icon={arrowForward} />
          </IonButton>

        </IonSlide>
        
      </IonSlides>
    </IonContent>
  </IonPage>
  );
}
export default withRouter (Welcome);

  
  


