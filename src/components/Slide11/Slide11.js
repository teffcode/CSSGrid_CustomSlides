import React from 'react';
import styled from 'styled-components';

import Title from '../Title/Title';

import frannerd_sticker_question from '../../assets/frannerd_sticker_question.png';

const Slide11Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    img {
        width: 140px;
        height: 140px;
        object-fit: cover;
    }
`;

const Slide11 = () => 
    <Slide11Container>
        <Title>Can I Use ?</Title>
        <img src={frannerd_sticker_question} alt="frannerd_sticker_question"/>
    </Slide11Container>;

export default Slide11;