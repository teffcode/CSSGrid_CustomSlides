import React from 'react';
import styled from 'styled-components';

import Text from '../Text/Text';

const Slide4Container = styled.div`
    margin: 0 auto;
    width: 600px;
    p {
        text-align: center;
    }
`;

const Slide4 = () => 
    <Slide4Container>
        <Text>"CSS Grid changes the way flexibility works on the web. When there is more or less space available, Grid allows us to precisely design how content moves."</Text>
        <p>Jen Simmons</p>    
    </Slide4Container>
    
export default Slide4;
