import React from 'react';
import styled from 'styled-components';

import Card from '../Card/Card';
import Title from '../Title/Title';
import TextBackground from '../TextBackground/TextBackground';
import TextWithLink from '../TextWithLink/TextWithLink';

import frannerd_illustration1 from '../../assets/frannerd_illustration1.png';

const CardImage = styled.img`
    width: 170px;
    height: 170px;
    object-fit: cover;
    margin: 22px 0px 10px 0px;
    border: 4px solid white;
`;

const Slide3Container = styled.div`
    display: flex;
    justify-content: center;
`;

const Slide3 = () => 
    <Slide3Container>
        <Card>
            <Title>Frannerd</Title>
            <TextBackground pink>Fran Meneses, Illustrator</TextBackground><br/>
            <CardImage src={frannerd_illustration1} alt="frannerd_illustration1"/>
            <TextWithLink pink link="https://www.youtube.com/user/frannerd13">YouTube Channel</TextWithLink><br/>
            <TextWithLink pink link="https://www.instagram.com/frannerd/">Instagram</TextWithLink><br/>
        </Card>
    </Slide3Container>
    
export default Slide3;

/*
import React from 'react';
import styled from 'styled-components';

import CardSimple from '../CardSimple/CardSimple';
import TextBackground from '../TextBackground/TextBackground';
import TextWithLink from '../TextWithLink/TextWithLink';

const CodeIdentation = styled.div`
    margin-left: 10px;
`;

const Slide3 = () => 
    <CardSimple>
        <TextBackground pink>.container</TextBackground><br/>
        <TextWithLink pink link="https://github.com/teffcode">este es un link</TextWithLink><br/>
    </CardSimple>

export default Slide3;
*/