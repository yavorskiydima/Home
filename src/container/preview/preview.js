import React, { Component } from 'react'
import { Text, } from '../../shared/components';
import photo from './photo.jpg'
import { Img, } from './preview.styled';
import { GithubIcon, } from '../../shared/icon/github'
import { FacebookIcon, } from '../../shared/icon/facebook'

export class Preview extends Component {
    render() {
        return (
            <Text align="center">
                <h1>Привет! Меня зовут Дима.</h1>
                <p>В 2020 начну суда заливать какие-нибудь свои проекты, правда не знаю зачем... пусть будет</p>
                <p>А сейчас я вставлю свое лицо, что бы разбавить текст картинкой, и потом вставлю ссылки на соцсети</p>
                <p>А еще это все довольно поганно выглядит на мобилке</p>
                <Img src={photo} />
                <p>
                    <a href="https://github.com/yavorskiydima" target="_blank" rel="noopener noreferrer"><GithubIcon /></a>
                    <span>  </span>
                    <a href="https://www.facebook.com/yavorskiydima" target="_blank" rel="noopener noreferrer"><FacebookIcon /></a>
                </p>
            </Text>
        )
    }
}

export default Preview
