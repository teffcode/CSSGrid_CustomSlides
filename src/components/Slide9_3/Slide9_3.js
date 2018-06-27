import React from 'react';
import styled from 'styled-components';

import TextBackground from '../TextBackground/TextBackground';
import CardCode from '../CardCode/CardCode';

const Slide9_3Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column; 
`;

const CodeIdentation = styled.div`
    margin-left: 10px;
`;

const CodeIdentation2 = styled.p`
    margin-left: 10px;
`;

const Slide9_3 = () => 
    <Slide9_3Container>
        <TextBackground>minmax() and repeat()</TextBackground>
        <CardCode>
            <TextBackground pink>.container /* option 1 */</TextBackground><br/>
            <CodeIdentation>
                <p>display: grid;</p>
                <p>grid-template:</p>
                <CodeIdentation2>1fr / repeat(4, 250px);</CodeIdentation2>
                <p>grid-gap: 20px;</p>
            </CodeIdentation>
            <TextBackground pink>.container /* option 2 */</TextBackground><br/>
            <CodeIdentation>
                <p>display: grid;</p>
                <p>grid-template:</p>
                <CodeIdentation2>1fr / repeat(4, minmax(100px, 250px));</CodeIdentation2>
                <p>grid-gap: 20px;</p>
            </CodeIdentation>
        </CardCode>
    </Slide9_3Container>

export default Slide9_3;