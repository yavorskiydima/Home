import React, { Component } from 'react'
import styled, { ThemeProvider, } from 'styled-components'
import { YMInitializer, } from 'react-yandex-metrika';
import { themes, } from './themes';
import { IntroContainer, } from './intro';
import { HeaderContainer, } from './header/header'

export const Body = styled.div`
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  min-height: 100vh;
  min-width: 100vw;
  background-color: ${props => props.theme.bgColor};
  color: ${props => props.theme.textColor};
`;

export class App extends Component {
  state = {
    theme: new Date().getHours() > 20 ? themes.dark : themes.light,
  }

  toogleTheme = () => {
    this.setState(state => ({ theme: state.theme === themes.light ? themes.dark : themes.light, }));
  }

  render() {
    return (<>
      <ThemeProvider theme={this.state.theme}>
        <YMInitializer accounts={[56947498]} />
        <Body>
          <HeaderContainer toogleTheme={this.toogleTheme} />
          <IntroContainer />
        </Body>
      </ThemeProvider>
    </>)
  }
}

export default App
