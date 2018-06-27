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