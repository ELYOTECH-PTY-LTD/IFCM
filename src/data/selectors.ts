import { createSelector } from 'reselect';
import { Event, Shopping, ShoppingItem, Teaching, TeachingLesson } from './models';
import { AppState } from './state';

const getEventList = (state: AppState) => {
  return state.data.events
};

export const getShopping= (state: AppState) => state.data.shopping;
const getShoppingItems= (state: AppState) => state.data.shoppingitems;
export const getTeachings= (state: AppState) => state.data.teachings;
const getTeachingLessons = (state: AppState) => state.data.lessons;



const getIdParam = (_state: AppState, props: any) => {
  return props.match.params['id'];
}

export const getEvent= createSelector(
  getEventList, getIdParam,
  (event, id) => {
    return event.find(s => s.id === id);
  }
);

export const getLesson = createSelector(
  getTeachingLessons, getIdParam,
  (speakers, id) => speakers.find(x => x.id === id)
);


