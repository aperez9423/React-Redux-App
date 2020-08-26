import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getCard } from '../actions/cardActions';

import Card from './Card'

const CardList = props => {
    const [card, setCard] = useState(props.card);

    console.log(card);

    useEffect(() => {
        setCard(props.card);
    }, [props.card])
    
    return (
        <div>
            <h2>Welcome to Magic the Gathering!</h2>
            {props.isFetching && <p>Fetching your Cards</p>}
            <div>
                <div>
                    {card.length > 0 ? card.map ((creature, i) => <Card key={i} creature={creature}/>) : <p>Loading...</p>}
                </div>
            </div>
            {props.error && <p className='error'>{props.error}</p>}
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        card: state.card,
        isFetching: state.isFetching, 
        error: state.error};
};

export default connect(mapStateToProps, { getCard })(CardList);