import React from 'react';
import styled from 'styled-components';

import TextBackground from '../TextBackground/TextBackground';
import TextWithLink from '../TextWithLink/TextWithLink';

import area from '../../assets/area.png';

const Slide8_1Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    img {
        width: 600px;
        height: 450px;
        margin-top: 30px;
    }
`;

const Slide8_1 = () => 
    <Slide8_1Container>
        <TextBackground>Grid area - example</TextBackground>
        <img src={area} />
    </Slide8_1Container>
export default Slide8_1;