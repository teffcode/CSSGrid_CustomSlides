import React from 'react';
import styled from 'styled-components';

import Title from '../Title/Title';

const CardSimpleContainer = styled.div`
    width: 500px;
    height: auto;
    display: grid;
    grid-template-row: 30px auto;
`;

const CardSimple = ({ title, children }) => 
    <CardSimpleContainer>
        <Title>{title}</Title>
        {children}
    </CardSimpleContainer>

export default CardSimple;