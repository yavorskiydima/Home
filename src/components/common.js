import styled from 'styled-components';

export const AppContainer = styled.div`
    padding: 15px;
    width: 100%;
    height: 100%;
    max-width: 1200px;
    margin: 0 auto;
`;

export const AppWrapper = styled.div`
    width: 100%;
    height: ${props => props.fullHeight ? '100vh' : 'auto'};
`;
