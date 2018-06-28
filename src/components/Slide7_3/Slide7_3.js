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
        <TextBackground>.items</TextBackground><br/>
        <CardCode>
            <TextBackground pink>.item /* option 1 */</TextBackground><br/>
            <CodeIdentation>
                <p>grid-column-start: 2;</p>
                <p>grid-column-end: 5;</p>
                <p>grid-row-start: 1;</p>
                <p>grid-row-end: 3;</p>
            </CodeIdentation>
            <TextBackground pink>.item /* option 2 */</TextBackground><br/>
            <CodeIdentation>
                <p>grid-column: 2 / 5;</p>
                <p>grid-row: 1 / 3;</p>
            </CodeIdentation>
            <TextBackground>NO: float, display: inline-block, display: table-cell, vertical-align and column-*</TextBackground><br/>
        </CardCode>
    </Slide7_2Container>

export default Slide7_2;



