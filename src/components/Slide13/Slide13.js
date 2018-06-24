import React from 'react';
import styled from 'styled-components';

import Title from '../Title/Title';
import Text from '../Text/Text';
import TextWithLink from '../TextWithLink/TextWithLink';

import frannerd_sticker_good_night from '../../assets/frannerd_sticker_good_night.png';

const Slide13Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    img {
        width: 150px;
        height: 150px;
        object-fit: cover;
    }
`;

const Slide13 = () => 
    <Slide13Container>
        <img src={frannerd_sticker_good_night} alt="frannerd_sticker_good_night"/>
    </Slide13Container>;

export default Slide13;