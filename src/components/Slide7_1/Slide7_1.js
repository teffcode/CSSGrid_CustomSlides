import React from 'react';
import styled from 'styled-components';

import TextBackground from '../TextBackground/TextBackground';

import cssgrid1 from '../../assets/cssgrid1.gif';

const Slide7_1Container = styled.div`
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

const Slide7_1 = () => 
<Slide7_1Container>
    <TextBackground>Container</TextBackground>
    <img src={cssgrid1} />
</Slide7_1Container>

export default Slide7_1;