import React from 'react';
import styled from 'styled-components';

import Title from '../Title/Title';

import frannerd_illustration5 from '../../assets/frannerd_illustration5.jpeg';

const Slide10Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const Slide10 = () => 
    <Slide10Container>
        <Title>Grid properties, table of contents</Title>
        <img src={frannerd_illustration5} alt="frannerd_illustration2"/>
    </Slide10Container>;

export default Slide10;