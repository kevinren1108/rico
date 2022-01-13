import * as actionType from './actionType.js';
import { fromJS } from 'immutable';

export const updateDisplayIndex = (index) =>({
  type: actionType.UPDATE_DISPLAY_INDEX,
  newIndex: index
})

export const updateTechMenuIndex = (index) =>({
  type: actionType.UPDATE_TECH_MENU_INDEX,
  newIndex: index
})