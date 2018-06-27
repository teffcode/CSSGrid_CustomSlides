import React from 'react';
import styled from 'styled-components';

import TextBackground from '../TextBackground/TextBackground';
import TextWithLink from '../TextWithLink/TextWithLink';

import important_terminology from '../../assets/important_terminology.svg';

const Slide8_1Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    img {
        width: 600px;
        height: 400px;
        margin-top: 50px;
    }
`;

const Slide8_1 = () => 
    <Slide8_1Container>
        <TextBackground>Grid: line, track, cell & area</TextBackground>
        <img src={important_terminology} />
        <TextWithLink link="https://webkit.org/blog/7434/css-grid-layout-a-new-layout-module-for-the-web/">webkit.org</TextWithLink>
    </Slide8_1Container>
export default Slide8_1;