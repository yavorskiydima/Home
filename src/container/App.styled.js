import styled from 'styled-components';
import Particles from 'react-particles-js';

export const Container = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    padding: 10px;
    z-index: 100;
    position: relative;
`;

export const Background = styled(Particles)`
    position: fixed;
    width: 100%;
    height: 100%;
`;