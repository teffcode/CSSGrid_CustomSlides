import React from 'react';
import styled from 'styled-components';

import Title from '../Title/Title';
import Text from '../Text/Text';
import TextWithLink from '../TextWithLink/TextWithLink';

import frannerd_sticker_perfect from '../../assets/frannerd_sticker_perfect.png';

const Slide12Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    img {
        width: 120px;
        height: 120px;
        object-fit: cover;
    }
`;

const Slide12 = () => 
    <Slide12Container>
        <Title>Did you like my presentation ?</Title>
        <img src={frannerd_sticker_perfect} alt="frannerd_sticker_perfect"/>
        <Text>
            <li>React JS</li>
            <li>Styled Components</li>
            <li>Fullpage.js</li>
        </Text>
        <TextWithLink pink link="https://github.com/teffcode/CSSGrid_CustomSlides">Repository</TextWithLink>      
    </Slide12Container>;

export default Slide12;