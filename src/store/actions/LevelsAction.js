import {
    UPDATE_LEVEL_ONE,
    UPDATE_LEVEL_TWO,
    UPDATE_LEVEL_THREE,
    UPDATE_LEVEL_FOUR
} from './types';

export const updateLevelOne = value => {
    return {
        type: UPDATE_LEVEL_ONE,
        payload: parseInt(value)
    }
};

export const updateLevelTwo = value => {
    return {
        type: UPDATE_LEVEL_TWO,
        payload: parseInt(value)
    }
};

export const updateLevelThree = value => {
    return {
        type: UPDATE_LEVEL_THREE,
        payload: parseInt(value)
    }
};

export const updateLevelFour = value => {
    return {
        type: UPDATE_LEVEL_FOUR,
        payload: parseInt(value)
    }
};
