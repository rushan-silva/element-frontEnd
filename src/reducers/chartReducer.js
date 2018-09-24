import { FETCH_EMOTION_DATA, NEW_DATA } from "../actions/types";

const initialState = {
  items: [],
  item: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_EMOTION_DATA:
      return {
        ...state,
        items: [
          { name: "Anger", count: 1208 },
          { name: "Fear", count: 1398 },
          { name: "Happy", count: 9800 },
          { name: "Guilt", count: 3908 },
          { name: "Sadness", count: 4800 },
          { name: "Shame", count: 3800 },
          { name: "Disgust", count: 4300 }
        ]
      };
    case NEW_DATA:
      return {
        ...state,
        item: action.payload
      };
    default:
      return state;
  }
}
