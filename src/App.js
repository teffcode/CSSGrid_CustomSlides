import React, { Component } from 'react';
import { SectionsContainer, Section, Header, Footer } from 'react-fullpage';

import Logo from './components/Logo/Logo';
import Slide1 from './components/Slide1/Slide1';
import Slide2 from './components/Slide2/Slide2';
import Slide3 from './components/Slide3/Slide3';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      current: 0,
    }
  }
  
  render() {
    const options = {
      sectionClassName: 'section',
      anchors: [
                'Slide1', 
                'Slide2', 
                'Slide3'
                ],
      scrollBar: false,
      navigation: false,
      verticalAlign: false,
      sectionPaddingTop: '50px',
      sectionPaddingBottom: '50px',
      arrowNavigation: true,
      scrollCallback: (states) => this.setState({current: states.activeSection})
    };

    const {current} = this.state

    return (
      <div>
        <Header className="header">
          <Logo/>       
        </Header>
        <SectionsContainer className="container" {...options} activeSection={current}>
          <Section color="#FFF" verticalAlign="true">
            <Slide1/>
          </Section>
          <Section color="#FFF" verticalAlign="true">
            <Slide2/>          
          </Section>
          <Section color="#FFF" verticalAlign="true" >
            <Slide3/>                    
          </Section>
        </SectionsContainer>
        <Footer className="footer">
          <a href="https://github.com/teffcode">Github</a>
          <a href="https://twitter.com/teffcode">Twitter</a>
          <a href="https://www.instagram.com/teffcode/">Instagram</a>
        </Footer>
        <div className="btnGroup">
            <button onClick={() => this.setState({current: current - 1})} disabled={current === 0}>pre</button>
            <button onClick={() => this.setState({current: current + 1})} disabled={current === 2}>next</button>
        </div>
      </div>
    );
  }
}

export default App;
