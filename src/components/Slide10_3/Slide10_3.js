import React from 'react';
import styled from 'styled-components';

import TextBackground from '../TextBackground/TextBackground';

import align_items from '../../assets/align_items.PNG';
import align_content from '../../assets/align_content.PNG';
import align_self from '../../assets/align_self.PNG';

const Slide10_3Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    img {
        margin: 30px 10px;
        width: 280px;
        height: 150px;                
    }
`;

const Slide10_3 = () => 
<Slide10_3Container>
    <TextBackground>align- items/content/self</TextBackground>
    <div>
        <img src={align_items} alt="align_items"/>
        <img src={align_content} alt="align_content"/>
        <img src={align_self} alt="align_self"/>
    </div>
</Slide10_3Container>

export default Slide10_3;