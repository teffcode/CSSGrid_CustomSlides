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
