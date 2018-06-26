import React from 'react';
import styled from 'styled-components';

import TextBackground from '../TextBackground/TextBackground';
import TextWithLink from '../TextWithLink/TextWithLink';

import justify_items from '../../assets/justify_items.PNG';
import justify_content from '../../assets/justify_content.PNG';
import justify_self from '../../assets/justify_self.PNG';

const Slide10_2Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    img {
        margin: 30px 10px;
        width: 280px;
        height: 150px;        
`;

const Slide10_2 = () => 
    <Slide10_2Container>
        <TextBackground>justify- items/content/self</TextBackground>
        <div>
            <img src={justify_items} alt="justify_items"/>
            <img src={justify_content} alt="justify_content"/>
            <img src={justify_self} alt="justify_self"/>
        </div>
        <TextWithLink link="https://css-tricks.com/snippets/css/complete-guide-grid/">css-tricks</TextWithLink><br/>
    </Slide10_2Container>

export default Slide10_2;