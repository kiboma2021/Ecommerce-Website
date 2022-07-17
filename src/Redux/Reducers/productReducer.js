import { ActionTypes } from "../Constants/action-types";

const initialState = {
  products:[
    {
      id: 1,
      title: "Benson",
      category: "programmer",
    }
  ]
}

export const productReducer = (state, {type, payload}) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return state;
    default:
      return state;
  }
};
