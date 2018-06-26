import React from 'react';
import styled from 'styled-components';

import TextBackground from '../TextBackground/TextBackground';

import cssgrid1 from '../../assets/cssgrid1.gif';

const Slide9_2Container = styled.div`
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

const Slide9_2 = () => 
<Slide9_2Container>
    <TextBackground>auto</TextBackground>
    <img src={cssgrid1} />
</Slide9_2Container>

export default Slide9_2;