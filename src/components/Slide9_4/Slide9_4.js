import React from 'react';
import styled from 'styled-components';

import TextBackground from '../TextBackground/TextBackground';

import minmax from '../../assets/minmax.gif';

const Slide9_4Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    img {
        width: 690px;
        height: 150px;
        margin-top: 50px;
    }
`;

const Slide9_4 = () => 
    <Slide9_4Container>
        <TextBackground>minmax() and repeat() - example</TextBackground>
        <img src={minmax} />
    </Slide9_4Container>

export default Slide9_4;