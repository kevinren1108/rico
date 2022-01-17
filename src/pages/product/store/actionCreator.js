import * as actionType from "./actionType.js";

export const updateDisplayIndex = (index) =>({
  type: actionType.UPDATE_DISPLAY_INDEX,
  newIndex: index
});

export const updateTechMenuIndex = (index) =>({
  type: actionType.UPDATE_TECH_MENU_INDEX,
  newIndex: index
});

export const updateThumbIndex = (index) =>({
  type: actionType.UPDATE_THUMB_INDEX,
  newIndex: index
});