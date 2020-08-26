import axios from 'axios';

export const FETCHING_CARD_START = 'FETCHING_CARD_START';
export const FETCHING_CARD_SUCCESS = 'FETCHING_CARD_SUCCESS';
export const FETCHING_CARD_FAILURE = 'FETCHING_CARD_FAILURE';

export const getCard = () => (dispatch) => {
    console.log('getCard action');
    dispatch({ type: FETCHING_CARD_START});
    axios   
        .get('https://api.magicthegathering.io/v1/cards')
        .then(res => {
            dispatch({ 
                type: FETCHING_CARD_SUCCESS, 
                payload: res.data.cards});
            console.log('API Response: ', res.data.cards);
        })
        .catch(err => {
            dispatch({
                type: FETCHING_CARD_FAILURE,
                payload: `No card`
            })
            console.log(err, 'Error!');
        });
};