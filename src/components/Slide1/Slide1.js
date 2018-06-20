import React from 'react';
import styled from 'styled-components';

import Card from '../Card/Card';
import Title from '../Title/Title';
import TextBackground from '../TextBackground/TextBackground';

const Slide1Container = styled.div`
    display: flex;
    justify-content: center;
`;

const Slide1 = () => 
    <Slide1Container>
        <Card yellow>
            <Title>Hello!</Title>
            <ul>
                <li>Front-end Dev at Accenture.</li>
                <li>Telecommunications Engineer.</li>
                <li>CoderDojo volunteer.</li>
            </ul>
            <TextBackground pink>@teffcode</TextBackground>
        </Card>
    </Slide1Container>;

export default Slide1;