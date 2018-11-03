const INITIAL_STATE = {
    emotionalRecognition: {
        name: '',
        category: '',
        isLocked: false,
        onTheLevel: 1,
        percentageOfHits: 0,
        questionsLevelOne: [],
        questionsLevelTwo: [],
        questionsLevelThree: []
    }
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'initializeEmotionalRecognition':
            return { ...state, emotionalRecognition: action.payload };
    }
    return state;
}