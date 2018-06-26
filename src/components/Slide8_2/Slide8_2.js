import React from 'react';
import styled from 'styled-components';

import TextBackground from '../TextBackground/TextBackground';

import cssgrid1 from '../../assets/cssgrid1.gif';

const Slide8_2Container = styled.div`
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

const Slide8_2 = () => 
<Slide8_2Container>
    <TextBackground>Grid Track</TextBackground>
    <img src={cssgrid1} />
</Slide8_2Container>

export default Slide8_2;