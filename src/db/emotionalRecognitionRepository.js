import configRepository from './configRepository';
import { EMOTIONAL_RECOGNITION_SCHEMA } from './emotionalRecognitonSchema';

const emotionalRecognitionRepository = configRepository(EMOTIONAL_RECOGNITION_SCHEMA);

export default emotionalRecognitionRepository;
