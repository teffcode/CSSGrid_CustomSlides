import React from 'react';
import styled from 'styled-components';

import TextBackground from '../TextBackground/TextBackground';

import cssgrid1 from '../../assets/cssgrid1.gif';

const Slide8_4Container = styled.div`
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

const Slide8_4 = () => 
<Slide8_4Container>
    <TextBackground>Grid Area</TextBackground>
    <img src={cssgrid1} />
</Slide8_4Container>

export default Slide8_4;