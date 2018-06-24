import React from 'react';
import styled from 'styled-components';

import Text from '../Text/Text';
import Title from '../Title/Title';

import jen_simmons from '../../assets/jen_simmons.jpg';

const Slide6Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: auto;
    text-align: center;
    margin: 0 auto;
`;

const Slide6 = () => 
    <Slide6Container>
        <Title>Content</Title>
        <Text>
            <li>Basics of CSS Grid</li>
            <li>Important terminology</li>
            <li>Repeaters, measurement units & functions</li>
            <li>Grid properties, table of contents</li>
            <li>Can I Use ?</li>
        </Text>
    </Slide6Container>
    
export default Slide6;
