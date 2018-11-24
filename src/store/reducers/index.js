import { combineReducers } from 'redux';

import LevelsReducer from './LevelsReducer';
import EmotionalRecognitionGroupReducer from './EmotionalRecognitionGroupReducer'

export default combineReducers({
    LevelsReducer,
    EmotionalRecognitionGroupReducer
});