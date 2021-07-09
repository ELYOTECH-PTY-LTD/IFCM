
import { SessionsActions } from './dataApi';
import { AppIfcmState } from './models';

export const sessionsReducer = (state: AppIfcmState, action: SessionsActions): AppIfcmState => {
    switch (action.type) {
      case 'set-app-loading': {
        return { ...state, loading: action.isLoading };
      }
      case 'set-app-data': {
        return { ...state, ...action.data };
      }
    }
  }