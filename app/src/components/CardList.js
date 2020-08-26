import React from 'react';
import { getCard } from '../actions/cardActions';
import { connect } from 'react-redux';

import Card from './Card'

import styled from 'styled-components';

const CardList = (props) => {  

    const fetchCards = e => {
        e.preventDefault();
        props.getCard();
    }
    
    console.log(props.cards.map);

    return (
        <div className='card-list'>
            {props.isFetching && <p>Fetching your cards</p>}    
            <div>
            {props.cards.map(cards => (
                <Card 
                    key={cards.id} 
                    name={cards.name}
                    image={cards.imageUrl}
                />
            ))}
            </div>
            {props.error && <p>{props.error}</p>}
            <Button onClick={fetchCards}>Fetch Cards!</Button>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        cards: state.cards,
        isFetching: state.isFetching, 
        error: state.error};
};

export default connect(mapStateToProps, { getCard })(CardList);

const Button = styled.button`
font-size: 1.5rem;
  border: .2rem solid black;
  border-radius: .5rem;
  background-color: lightgray;
`

