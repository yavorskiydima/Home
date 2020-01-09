import React, { Component } from 'react'
import { Background, Container, } from './App.styled';
import Preview from './preview/preview';
import { YMInitializer, } from 'react-yandex-metrika';

import { config, } from './particles.config';

//header
//planet
//calc
//drag-and-drop
//



export class App extends Component {
  render() {
    return (<>
      <YMInitializer accounts={[56947498]} />
      <Background params={config} />
      <Container>
        <Preview />
      </Container>

    </>
    )
  }
}

export default App
