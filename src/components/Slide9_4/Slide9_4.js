import React from 'react';
import styled from 'styled-components';

import TextBackground from '../TextBackground/TextBackground';

import cssgrid1 from '../../assets/cssgrid1.gif';

const Slide9_4Container = styled.div`
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

const Slide9_4 = () => 
<Slide9_4Container>
    <TextBackground>repeat()</TextBackground>
    <img src={cssgrid1} />
</Slide9_4Container>

export default Slide9_4;