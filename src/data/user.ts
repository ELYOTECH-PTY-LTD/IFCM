import { getUserData, setIsLoggedInData, setUsernameData, setHasSeenTutorialData } from './dataApi';
import { ActionType } from './types';



export interface UserState {
  isLoggedin: boolean;
  username?: string;
  hasSeenTutorial: boolean;
  loading: boolean;
};

export function userReducer(state: UserState, action: UserActions): UserState {
  switch (action.type) {
    case 'set-user-loading':
      return { ...state, loading: action.isLoading };
    case 'set-user-data':
      return { ...state, ...action.data };
    case 'set-username':
      return { ...state, username: action.username };
    case 'set-has-seen-tutorial':
      return { ...state, hasSeenTutorial: action.hasSeenTutorial };
    case 'set-is-loggedin':
      return { ...state, isLoggedin: action.loggedIn };
  }
}


export const loadUserData = () => async (dispatch: React.Dispatch<any>) => {
  dispatch(setLoading(true));
  const data = await getUserData();
  dispatch(setData(data));
  dispatch(setLoading(false));
}

export const setLoading = (isLoading: boolean) => ({
  type: 'set-user-loading',
  isLoading
} as const);

export const setData = (data: Partial<UserState>) => ({
  type: 'set-user-data',
  data
} as const);

export const logoutUser = () => async (dispatch: React.Dispatch<any>) => {
  await setIsLoggedInData(false);
  dispatch(setUsername());
};

export const setIsLoggedIn = (loggedIn: boolean) => async (dispatch: React.Dispatch<any>) => {
  await setIsLoggedInData(loggedIn);
  return ({
    type: 'set-is-loggedin',
    loggedIn
  } as const)
};

export const setUsername = (username?: string) => async (dispatch: React.Dispatch<any>) => {
  await setUsernameData(username);
  return ({
    type: 'set-username',
    username
  } as const);
};

export const setHasSeenTutorial = (hasSeenTutorial: boolean) => async (dispatch: React.Dispatch<any>) => {
  await setHasSeenTutorialData(hasSeenTutorial);
  return ({
    type: 'set-has-seen-tutorial',
    hasSeenTutorial
  } as const);
} 


export type UserActions =
  | ActionType<typeof setLoading>
  | ActionType<typeof setData>
  | ActionType<typeof setIsLoggedIn>
  | ActionType<typeof setUsername>
  | ActionType<typeof setHasSeenTutorial>
