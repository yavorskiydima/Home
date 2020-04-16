import React, { Component } from 'react'
import { AppWrapper } from 'components/common'
import { Container, Photo, Info, InfoItem, InfoItemTopic, } from './intro.styled'

export class IntroContainer extends Component {
    render() {
        return (
            <AppWrapper fullHeight>
                <Container>
                    <Info>
                        <h1>Меня зовут Дима</h1>
                        <p>
                            Привет друг, я работаю Frontend разработчиком и эта страница <b>ни CV</b>, <b>ни блог</b>, <b>ни портфолио</b>.
                            Эта страница созданна просто так, от того что нечего делать.
                            Тут я выложу немного инфы о себе, возможно какие-то интересные ссылки и вообще все что посчитаю интересным :)
                        </p>
                        <InfoItem><InfoItemTopic>Телефон</InfoItemTopic><a href="tel:+79226120681">+7 (922) 612 06 81</a></InfoItem>
                        <InfoItem><InfoItemTopic>Email</InfoItemTopic><a href="mailto:yavorskiydima@gmail.com">yavorskiydima@gmail.com</a></InfoItem>
                        <InfoItem><InfoItemTopic>Telegram</InfoItemTopic><a href="https://t.me/yavorskiydima">@yavorskiydima</a></InfoItem>
                        <InfoItem><InfoItemTopic>Соцесети</InfoItemTopic></InfoItem>
                    </Info>
                    <Photo />
                </Container>
            </AppWrapper>
        )
    }
}

