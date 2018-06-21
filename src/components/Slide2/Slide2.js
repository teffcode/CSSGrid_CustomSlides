import React from 'react';
import styled from 'styled-components';

import CardCode from '../CardCode/CardCode';
import TextBackground from '../TextBackground/TextBackground';

const CodeIdentation = styled.div`
    margin-left: 10px;
`;

const Slide2 = ({ yellow }) => 
    <CardCode>
        <TextBackground pink>.container</TextBackground><br/>
        <CodeIdentation>
            <p>display: grid;</p>
            <p>grid-template-column: repeat(5, 1fr);</p>
        </CodeIdentation>
    </CardCode>;

export default Slide2;
