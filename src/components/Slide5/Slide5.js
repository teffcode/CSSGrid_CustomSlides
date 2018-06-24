import React from 'react';
import styled from 'styled-components';

import Card from '../Card/Card';
import Title from '../Title/Title';
import TextWithLink from '../TextWithLink/TextWithLink';

import jen_simmons from '../../assets/jen_simmons.jpg';

const CardImage = styled.img`
    width: 110px;
    height: 110px;
    object-fit: cover;
    border: 4px solid white;
`;

const Slide5Container = styled.div`
    display: flex;
    justify-content: center;
`;

const Slide5 = () => 
    <Slide5Container>
        <Card yellow>
            <Title>Jen Simmons</Title>
            <CardImage src={jen_simmons} alt="frannerd_illustration1"/>
            <p>Designer Advocate at Mozilla. Creator of Firefox Grid Inspector. Member of CSS Working Group.</p>
            <TextWithLink pink link="https://www.youtube.com/channel/UC7TizprGknbDalbHplROtag">Layout Land, YouTube Channel</TextWithLink><br/>
            <TextWithLink pink link="https://twitter.com/jensimmons">Twitter</TextWithLink><br/>
        </Card>
    </Slide5Container>
    
export default Slide5;
