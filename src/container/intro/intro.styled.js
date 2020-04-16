import styled from 'styled-components';
import { AppContainer } from 'components/common'
import photo from './photo.JPG'

export const Container = styled(AppContainer)`
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-around;
    align-items: center;
`;

export const Photo = styled.div`
    width: 40%;
    height: 400px;
    border-radius: 10px;
    background-image: url(${photo});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`;

export const Info = styled.div`
    width: 40%;
`;

export const InfoItem = styled.div`
    padding: 8px 0;
    a {
        text-decoration: none;
        color: ${props => props.theme.textColor};
        position: relative;
        &:after {
            opacity: 0;
            display: block;
            content: "";
            bottom: -4px;
            width: 100%;
            height: 2px;
            left: 0px;
            position: absolute;
            background-color: ${props => props.theme.textColor};
            transition: opacity .2s linear;
        }
        &:hover {
            &:after {
                opacity: 1;
            }
        }
    }
`;

export const InfoItemTopic = styled.span`
    display: inline-block;
    width: 150px;
    font-weight: 700;
`;