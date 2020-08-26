import React, { useEffect, useState } from 'react';

import styled from 'styled-components';
import axios from 'axios';

const Card = (props) => {
    const [cardData, setCardData] = useState({});
    useEffect(() => {
        axios.get(props.card)
        .then(res => setCardData(res.data))
        .catch(err => console.log(err));
    }, [props.card]);

    return(
        <div>
            <Name>{ cardData.name }</Name>
            <div>
                <CardImage src= { cardData.imageUrl } alt='card'/>
            </div>
        </div>
    );
};

export default Card;

const Name = styled.h2 `
    color: black;
`
const CardImage = styled.img `
    height: 20rem;
`