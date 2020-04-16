import styled from 'styled-components';
import { AppContainer, AppWrapper } from 'components/common'

export const Container = styled(AppContainer)`
    display: flex;
    flex-wrap: nowrap;
    justify-content: flex-end;
    padding-right: 50px;
`;

export const Wrapper = styled(AppWrapper)`
    position: fixed;
    height: 50px;
    background-color: red;
    box-shadow: 0 0 10px rgba(0,0,0,0.5);

    background-color: ${props => props.theme.bgColor};
`;

export const Item = styled.a`
    margin: 0 20px;
    text-decoration: none;
    color: ${props => props.theme.textColor};
    position: relative;
        &:after {
            opacity: 0;
            display: block;
            content: "";
            bottom: -4px;
            right: -10%;
            height: 2px;
            left: -10%;
            position: absolute;
            background-color: ${props => props.theme.textColor};
            transition: opacity .2s linear;
        }
        &:hover {
            &:after {
                opacity: 1;
            }
        }
`;
