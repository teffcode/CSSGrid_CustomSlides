import React from 'react';
import styled from 'styled-components';

import Card from '../Card/Card';
import Title from '../Title/Title';
import TextBackground from '../TextBackground/TextBackground';

import Teff from '../../assets/Teff.jpg';

const Slide1Container = styled.div`
    display: flex;
    justify-content: center;
`;

const CardImage = styled.img`
    width: 160px;
    height: 160px;
    object-fit: cover;
    margin: 20px 0px;
    border: 4px solid white;
    display: block;
`;

const Slide1 = () => 
    <Slide1Container>
        <Card yellow>
            <Title>Hello!</Title>
            <TextBackground>@teffcode</TextBackground>
            <CardImage src={Teff} alt="Teff"/>
            Front-end Dev at Accenture, Telecommunications Engineer, CoderDojo volunteer.
        </Card>
    </Slide1Container>;

export default Slide1;