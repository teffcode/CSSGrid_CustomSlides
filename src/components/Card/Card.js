import React from 'react';
import styled from 'styled-components';

import tape from '../../assets/tape.png';

const CardContainer = styled.div`
    width: 380px;
    height: 440px;
    position: relative;
    margin: 20px;
    > img {
        position: absolute;
        top: -45px;
        left: 130px;
        z-index: 3;
        width: 100px;
        height: 100px;
        transform: rotate(-45deg);
    }
`;

const CardInternal = styled.div`
    width: 370px;
    height: 438px;
    background-color: ${({yellow}) => (yellow ? '#f6eabc' : '#fcddd3')};
    position: absolute;
    right: 0px;
    box-shadow: 0 5px 5px rgba(0,0,0,0.19);
    transform: ${({yellow}) => (yellow ? 'rotate(1deg)' : 'rotate(-1deg)')};
`
const CardExternal = styled.div`
    width: 360px;
    height: 418px;
    background-color: ${({yellow}) => (yellow ? '#fffbed' : '#fff4f0')};
    position: absolute;
    z-index: 2;   
    top: 10px; 
    box-shadow: 0 5px 5px rgba(0,0,0,0.19);   
    transform: ${({yellow}) => (yellow ? 'rotate(-1deg)' : 'rotate(1deg)')};    
    padding: 20px;
`

const Card = ({ yellow, children }) =>
    <CardContainer>
        <img src={tape} alt="tape"/>
        <CardExternal yellow={yellow}>
            {children}
        </CardExternal>
        <CardInternal yellow={yellow}/>
    </CardContainer>

export default Card;