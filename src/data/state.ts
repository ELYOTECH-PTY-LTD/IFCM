import { combineReducers } from './combineReducers';
import { sessionsReducer } from './seesionReducers';
import { userReducer } from './user';
import { Event } from './models'

export const initialState: AppState = {
  data: {
    propheticmessage : "" as any,
    verseoftoday : "" as any,
    events: [],
    shopping: { items: [] } as any,
    shoppingitems: [],
    teachings: { lessons: [] } as any,
    lessons: [],
    loading: false,
  },
  user: {
    hasSeenTutorial: false,
    isLoggedin: false,
    loading: false
  }
};


export const reducers = combineReducers({
  data: sessionsReducer,
  user: userReducer
});


export type AppState = ReturnType<typeof reducers>;
