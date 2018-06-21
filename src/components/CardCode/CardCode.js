import React from 'react';
import styled from 'styled-components';

import tape from '../../assets/tape.png';

import black_lines from '../../assets/black_lines.png';

const CardContainer = styled.div`
    width: 288px;
    height: 358px;
    display: inline-block;
    position: relative;
    margin: 20px;
    img {
        width: 280px;
        height: 350px;
        object-fit: cover;
        position: absolute;
        top: 8px;
    }
`;

const CardExternal = styled.div`
    width: 280px;
    height: 350px;
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