import React from 'react';

import styled from 'styled-components';

const Card = ({name, image}) => {
    return(
        <div>
            <Name> { name } </Name>
            <div>
            <CardImage src= { image } alt='card'/>
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