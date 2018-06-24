import React, { Component } from 'react';
import { SectionsContainer, Section, Header, Footer } from 'react-fullpage';

import Logo from './components/Logo/Logo';
import Slide1 from './components/Slide1/Slide1';
import Slide2 from './components/Slide2/Slide2';
import Slide3 from './components/Slide3/Slide3';
import Slide4 from './components/Slide4/Slide4';
import Slide5 from './components/Slide5/Slide5';
import Slide6 from './components/Slide6/Slide6';
import Slide7 from './components/Slide7/Slide7';
import Slide8 from './components/Slide8/Slide8';
import Slide9 from './components/Slide9/Slide9';
import Slide10 from './components/Slide10/Slide10';
import Slide11 from './components/Slide11/Slide11';
import Slide12 from './components/Slide12/Slide12';
import Slide13 from './components/Slide13/Slide13';

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
                'Slide1/hello_presentation', 
                'Slide2/css_grid', 
                'Slide3/about_frannerd',
                'Slide4/phrase_jen_simmons',
                'Slide5/about_jen_simmons',
                'Slide6/content',
                'Slide7/basics_of_css_grid',
                'Slide8/important_terminology',
                'Slide9/repeaters_measurement_units_and_funtions',
                'Slide10/grid_properties',
                'Slide11/can_i_use',
                'Slide12/about_my_presentation',
                'Slide13/good_night'
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
          <Section color="#FFF" verticalAlign="true">
            <Slide3/>
          </Section>
          <Section color="#FFF" verticalAlign="true">
            <Slide4/>          
          </Section>
          <Section color="#FFF" verticalAlign="true">
            <Slide5/>          
          </Section>
          <Section color="#FFF" verticalAlign="true">
            <Slide6/>          
          </Section>
          <Section color="#FFF" verticalAlign="true">
            <Slide7/>          
          </Section>
          <Section color="#FFF" verticalAlign="true">
            <Slide8/>          
          </Section><Section color="#FFF" verticalAlign="true">
            <Slide9/>          
          </Section>
          <Section color="#FFF" verticalAlign="true">
            <Slide10/>          
          </Section>
          <Section color="#FFF" verticalAlign="true">
            <Slide11/>          
          </Section>
          <Section color="#FFF" verticalAlign="true">
            <Slide12/>          
          </Section>
          <Section color="#FFF" verticalAlign="true">
            <Slide13/>          
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
