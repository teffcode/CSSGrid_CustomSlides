import React from 'react';
import styled from 'styled-components';

import TextBackground from '../TextBackground/TextBackground';

import fr from '../../assets/fr.png';

const Slide9_1Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    img {
        width: 660px;
        height: 238px;
        margin-top: 50px;
    }
`;

const Slide9_1 = () => 
    <Slide9_1Container>
        <TextBackground>fr</TextBackground>
        <img src={fr} />
    </Slide9_1Container>

export default Slide9_1;