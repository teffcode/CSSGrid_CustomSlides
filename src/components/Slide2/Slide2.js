import React from 'react';
import styled from 'styled-components';

import Title from '../Title/Title';

const Slide2Container = styled.div`
    margin-left: 10px;
    display: flex;
    justify-content: center;
`;

const Slide2 = () => 
    <Slide2Container>
        <Title>CSS GRID</Title>
    </Slide2Container>;

export default Slide2;

/*
import CardCode from '../CardCode/CardCode';
import TextBackground from '../TextBackground/TextBackground';

const CodeIdentation = styled.div`
    margin-left: 10px;
`;


<CardCode>
<TextBackground pink>.container</TextBackground><br/>
<CodeIdentation>
    <p>display: grid;</p>
    <p>grid-template-column: repeat(5, 1fr);</p>
</CodeIdentation>
</CardCode>;
*/