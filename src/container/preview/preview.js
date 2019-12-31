import React, { Component } from 'react'
import photo from './photo.jpg'
import { Img, IconContainer, } from './preview.styled';
import { GithubIcon, } from 'shared/icon/github'
import { FacebookIcon, } from 'shared/icon/facebook'
import { LinkedinIcon, } from 'shared/icon/linkedin'
import { Text, } from 'shared/components';
export class Preview extends Component {
    render() {
        return (
            <Text align="center">
                <h1>Привет! Меня зовут Дима.</h1>
                <p>В 2020 начну суда заливать какие-нибудь свои проекты, правда не знаю зачем... пусть будет</p>
                <p>А сейчас я вставлю свое лицо, что бы разбавить текст картинкой, и потом вставлю ссылки на соцсети</p>
                <p>А еще это все довольно погано выглядит на мобилке</p>
                <Img src={photo} />
                <IconContainer>
                    <a href="https://github.com/yavorskiydima" target="_blank" rel="noopener noreferrer"><GithubIcon /></a>
                    <a href="https://www.facebook.com/yavorskiydima" target="_blank" rel="noopener noreferrer"><FacebookIcon /></a>
                    <a href="https://www.linkedin.com/in/dmitriy-yavorskiy-6a744b161/" target="_blank" rel="noopener noreferrer"><LinkedinIcon /></a>
                </IconContainer>

            </Text>
        )
    }
}

export default Preview
