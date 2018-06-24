import React from 'react';
import styled from 'styled-components';

import Title from '../Title/Title';

import frannerd_illustration2 from '../../assets/frannerd_illustration2.jpeg';

const Slide7Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const Slide7 = () => 
    <Slide7Container>
        <Title>Basics of CSS Grid</Title>
        <img src={frannerd_illustration2} alt="frannerd_illustration2"/>
    </Slide7Container>;

export default Slide7;