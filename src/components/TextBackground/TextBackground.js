import React from 'react';
import styled from 'styled-components';

const TextBackground = styled.p`
    background-color: ${({pink}) => (pink ? 'pink' : '#b9e7f4')};    
    display: inline;
`;

export default TextBackground;