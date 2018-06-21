import React from 'react';
import styled from 'styled-components';

const TextWithLinkContainer = styled.div`
    i {
        color: ${({pink}) => (pink ? 'pink' : '#b9e7f4')};
    }
`;

const TextWithLinkStyled = styled.a`
    text-decoration: underline ${({pink}) => (pink ? 'pink' : '#b9e7f4')};    
    display: inline;
    margin-left: 8px;
`;

const TextWithLink = ({ pink, link, children }) => 
    <TextWithLinkContainer pink={pink}>
        <i class="fa fa-link"></i>
        <TextWithLinkStyled pink={pink} href={link}>{children}</TextWithLinkStyled>
    </TextWithLinkContainer>

export default TextWithLink;