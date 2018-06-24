import React from 'react';
import styled from 'styled-components';

import Title from '../Title/Title';

import frannerd_illustration3 from '../../assets/frannerd_illustration3.jpeg';

const Slide8Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const Slide8 = () => 
    <Slide8Container>
        <Title>Important terminology</Title>
        <img src={frannerd_illustration3} alt="frannerd_illustration2"/>
    </Slide8Container>;

export default Slide8;