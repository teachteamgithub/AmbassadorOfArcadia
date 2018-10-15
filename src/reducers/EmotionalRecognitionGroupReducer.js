const MASK = require('../assets/images/crop_image.png');

const INITIAL_STATE = {
    players: [
        {
            id: 1,
            image: MASK,
            punctuation: 0
        },
        {
            id: 2,
            image: MASK,
            punctuation: 0
        },
        {
            id: 3,
            image: MASK,
            punctuation: 0
        },
        {
            id: 4,
            image: MASK,
            punctuation: 0
        }
    ]
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'changePlayers':
            return { ...state, players: action.payload };
    }
    return state;
}