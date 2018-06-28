import React from 'react';
import styled from 'styled-components';

import TextWithLink from '../TextWithLink/TextWithLink';

import can_i_use from '../../assets/can_i_use.png';

const Slide11_1Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    img {
        width: 800px;
        height: 450px;
        margin-bottom: 30px;
    }
`;

const Slide11_1 = () => 
    <Slide11_1Container>
        <img src={can_i_use} />
        <TextWithLink link="https://caniuse.com/#search=css%20grid">Can I use</TextWithLink>
    </Slide11_1Container>

export default Slide11_1;