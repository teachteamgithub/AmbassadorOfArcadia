export const EMOTIONAL_RECOGNITION_SCHEMA = 'emotionalRecognition';
export const QUESTION_SCHEMA = 'question';
export const OPTION_SCHEMA = 'option';

const OptionSchema = {
  name: OPTION_SCHEMA,
  primaryKey: 'id',
  properties: {
    id: 'int',
    text: 'string',
    isCorrect: { type: 'bool', default: false }
  }
};

const QuestionSchema = {
  name: QUESTION_SCHEMA,
  primaryKey: 'id',
  properties: {
    id: 'int',
    question: 'string',
    image: 'string',
    options: { type: 'list', objectType: OPTION_SCHEMA }
  }
}

const EmotionalRecognitionSchema = {
  name: EMOTIONAL_RECOGNITION_SCHEMA,
  primaryKey: 'id',
  properties: {
    id: 'int',
    name: 'string',
    category: 'string',
    isLocked: { type: 'bool', default: false },
    onTheLevel: { type: 'int', default: 1 },
    questionsLevelOne: { type: 'list', objectType: QUESTION_SCHEMA },
    questionsLevelTwo: { type: 'list', objectType: QUESTION_SCHEMA },
    questionsLevelThree: { type: 'list', objectType: QUESTION_SCHEMA }
  }
};

export default { EmotionalRecognitionSchema, QuestionSchema, OptionSchema };
