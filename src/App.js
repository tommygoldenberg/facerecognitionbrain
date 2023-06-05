import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import './App.css';
import ParticlesBg from 'particles-bg';


class App extends Component {
  render(){
    return (
     <div className="App">
      <ParticlesBg color="#ffffff" num={100} type="cobweb" bg={true} />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm />
      {/* {<FaceRecognition />} */}
     </div>
    );
  }  
}

export default App;
