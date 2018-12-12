import { combineReducers } from 'redux';

import Levels from './Levels';
import Presentation from './Presentation';
import RecognitionOfEmotions from './RecognitionOfEmotions';
import RecognitionOfEmotionsGroup from './RecognitionOfEmotionsGroup';

export default combineReducers({
  Levels,
  Presentation,
  RecognitionOfEmotions,
  RecognitionOfEmotionsGroup,
});
