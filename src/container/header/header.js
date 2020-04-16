import React, { Component } from 'react'
import { Container, Wrapper, Item, } from './header.styled'

export class HeaderContainer extends Component {
    render() {
        return (
            <Wrapper>
                <Container>
                    <Item href="#">Главная</Item>
                    <Item href="#">Скилы</Item>
                    <Item href="#">Опыт</Item>
                    <Item href="#">Учеба</Item>
                    <Item href="#">Проекты</Item>
                    <Item href="#">Материалы</Item>
                    <Item onClick={this.props.toogleTheme} >Тема</Item>
                </Container>
            </Wrapper>
        )
    }
}

