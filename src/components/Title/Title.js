import React from 'react';
import styled from 'styled-components';

const TextTitle = styled.h1`
    text-decoration: underline #000;
`;

const Title = ({ children }) => <TextTitle>{children}</TextTitle>

export default Title;