import React from 'react';
import styled from 'styled-components';

import TextBackground from '../TextBackground/TextBackground';

import implicit2 from '../../assets/implicit2.gif';

const Slide10_1_1Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    img {
        width: 680px;
        height: 340px;
        margin-top: 50px;
    }
`;

const Slide10_1_1 = () => 
    <Slide10_1_1Container>
        <TextBackground>implicit grid (grid-auto-flow)</TextBackground>
        <img src={implicit2} />
    </Slide10_1_1Container>

export default Slide10_1_1;