import { Plugins } from '@capacitor/core';
import { useState } from 'react';

import { ActionType } from './types'; 
import { AppIfcmState, Event, Shopping,ShoppingItem, Teaching, TeachingLesson } from './models';


const { Storage } = Plugins;


const dataUrl = '/assets/data/data.json';

const HAS_LOGGED_IN = 'hasLoggedIn';
const HAS_SEEN_TUTORIAL = 'hasSeenTutorial';
const USERNAME = 'username';

//const [data type AppState, setData] = useState(false);
console.log("début");

export const getAppData = async () => {

  console.log("debut lecture du fichier data.json");

  const response = await Promise.all([
    fetch(dataUrl)]);

  console.log(response);

  console.log("fin lecture du fichier data.json");


  console.log("debut fetch data.json");
  const responseData = await response[0].json();
  console.log("fin fetch data.json");

  console.log(responseData);


  console.log("debut fetch event structure");
  const events = responseData.Event as Event[];
  console.log("fin fetch event structure");

  const data = {
    events
  }

  console.log(data);

  console.log("fin reading data");

  return data;
}


export const loadAppData = async () => {

  console.log("debut loading data");

  const data = await getAppData();
  console.log(data);
  console.log("fin loading data");


}

export const setLoading = (isLoading: boolean) => ({
  type: 'set-app-loading',
  isLoading
} as const);

export const setData = (data: Partial<AppIfcmState>) => ({
  type: 'set-app-data',
  data
} as const);

export type SessionsActions =
  | ActionType<typeof setLoading>
  | ActionType<typeof setData>


  export const getUserData = async () => {
    const response = await Promise.all([
      Storage.get({ key: HAS_LOGGED_IN }),
      Storage.get({ key: HAS_SEEN_TUTORIAL }),
      Storage.get({ key: USERNAME })]);
    const isLoggedin = await response[0].value === 'true';
    const hasSeenTutorial = await response[1].value === 'true';
    const username = await response[2].value || undefined;
    const data = {
      isLoggedin,
      hasSeenTutorial,
      username
    }
    return data;
  }
  
  export const setIsLoggedInData = async (isLoggedIn: boolean) => {
    await Storage.set({ key: HAS_LOGGED_IN, value: JSON.stringify(isLoggedIn) });
  }

  export const setUsernameData = async (username?: string) => {
    if (!username) {
      await Storage.remove({ key: USERNAME });
    } else {
      await Storage.set({ key: USERNAME, value: username });
    }
  }

  export const setHasSeenTutorialData = async (hasSeenTutorial: boolean) => {
    await Storage.set({ key: HAS_SEEN_TUTORIAL, value: JSON.stringify(hasSeenTutorial) });
  }