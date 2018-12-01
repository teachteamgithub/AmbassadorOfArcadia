import {
  UPDATE_LEVEL_ONE,
  UPDATE_LEVEL_TWO,
  UPDATE_LEVEL_THREE,
  UPDATE_LEVEL_FOUR,
} from '../actions/types';

const INITIAL_STATE = {
  levelOne: 0,
  levelTwo: 0,
  levelThree: 0,
  levelFour: 0,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_LEVEL_ONE:
      return { ...state, levelOne: action.payload };
    case UPDATE_LEVEL_TWO:
      return { ...state, levelThree: action.payload };
    case UPDATE_LEVEL_THREE:
      return { ...state, levelThree: action.payload };
    case UPDATE_LEVEL_FOUR:
      return { ...state, levelFour: action.payload };
    default:
      return state;
  }
};
