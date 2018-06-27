import React from 'react';
import styled from 'styled-components';

import tape from '../../assets/tape.png';

import black_lines from '../../assets/black_lines.png';

const CardContainer = styled.div`
    width: 438px;
    height: 398px;
    position: relative;
    margin: 20px;
    img {
        width: 430px;
        height: 390px;
        object-fit: cover;
        position: absolute;
        top: 8px;
    }
`;

const CardExternal = styled.div`
    width: 430px;
    height: 390px;
    position: absolute;
    z-index: 2;   
    left: 8px;
    padding: 20px;
    border: 2px solid black;
    background-color: white;
`

const CardCode = ({ children }) =>
    <CardContainer>
        <img src={black_lines} alt="tape"/>
        <CardExternal>
            {children}
        </CardExternal>
    </CardContainer>

export default CardCode;