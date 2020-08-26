import {
    FETCHING_CARD_START,
    FETCHING_CARD_SUCCESS,
    FETCHING_CARD_FAILURE,
} from '../actions/cardActions';

const initialState = {
    card: "",
    isFetching: false,
    error: ""
};

const cardReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_CARD_START: 
            console.log('fetching a new card')
            return {
                ...state,
                isFetching: true,
            };
        case FETCHING_CARD_SUCCESS:
            return {
                ...state,
                card: action.payload.name, isFetching: false
            };
        case FETCHING_CARD_FAILURE: 
            return {
                ...state,
                error: action.payload, isFetching: false
            };
        default: 
            return state;
    };
};

export default cardReducer;