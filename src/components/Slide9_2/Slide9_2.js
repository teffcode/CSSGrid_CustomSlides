import React from 'react';
import styled from 'styled-components';

import TextBackground from '../TextBackground/TextBackground';

import auto from '../../assets/auto.png';

const Slide9_2Container = styled.div`
    width: 100%;
    height: 330px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    img {
        width: 680px;
        height: 330px;
        margin-top: 50px;
    }
`;

const Slide9_2 = () => 
    <Slide9_2Container>
        <TextBackground>auto</TextBackground>
        <img src={auto} />
    </Slide9_2Container>

export default Slide9_2;