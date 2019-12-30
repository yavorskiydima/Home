import React, { Component } from 'react'
import { Background, Container, } from './App.styled';
import Preview from './preview/preview';

import { config, } from './particles.config';

//header
//planet
//calc
//drag-and-drop
//



export class App extends Component {
  render() {
    return (<>
      <Background params={config} />
      <Container>
        <Preview />
      </Container>

    </>
    )
  }
}

export default App
