import React from 'react';
import styled from 'styled-components';

import TextBackground from '../TextBackground/TextBackground';

import can_i_use from '../../assets/can_i_use.png';

const Slide11_1Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    img {
        width: 55%;
        height: 470px;
        pbject-fit: cover;
    }
`;

const Slide11_1 = () => 
    <Slide11_1Container>
        <img src={can_i_use} />
    </Slide11_1Container>

export default Slide11_1;