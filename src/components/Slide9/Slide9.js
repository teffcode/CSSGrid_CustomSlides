import React from 'react';
import styled from 'styled-components';

import Title from '../Title/Title';

import frannerd_illustration4 from '../../assets/frannerd_illustration4.jpeg';

const Slide9Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const Slide9 = () => 
    <Slide9Container>
        <Title>Repeaters, measurement units & functions</Title>
        <img src={frannerd_illustration4} alt="frannerd_illustration2"/>
    </Slide9Container>;

export default Slide9;