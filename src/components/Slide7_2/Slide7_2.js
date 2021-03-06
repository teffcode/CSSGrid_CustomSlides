import React from 'react';
import styled from 'styled-components';

import TextBackground from '../TextBackground/TextBackground';
import CardCode from '../CardCode/CardCode';

import cssgrid1 from '../../assets/cssgrid1.gif';

const Slide7_2Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column; 
`;

const CodeIdentation = styled.div`
    margin-left: 10px;
`;

const Slide7_2 = () => 
    <Slide7_2Container>
        <CardCode>
            <TextBackground pink>.container /* option 1 */</TextBackground><br/>
            <CodeIdentation>
                <p>display: grid;</p>
                <p>grid-template-column: 1fr 2fr 1fr</p>
                <p>grid-template-row: 20px 20px</p>
                <p>grid-gap-column: 20px</p>
                <p>grid-gap-row: 10px</p>
            </CodeIdentation>
            <TextBackground pink>.container /* option 2 */</TextBackground><br/>
            <CodeIdentation>
                <p>display: grid;</p>
                <p>grid-template: 20px 20px / 1fr 2fr 1fr</p>
                <p>grid-gap: 10px / 20px</p>
            </CodeIdentation>
        </CardCode>
    </Slide7_2Container>

export default Slide7_2;



