import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Title from "./components/Title"
const API_key="2d05715263909d557fd4436c36a7c73c"
class  App extends React.Component {
  constructor(props){
    super(props)
    this.state={

    }
  }  
  render(){
   return (
    <div className="App">
      <Title/>
      
    </div>
  );
  }
}

export default App;
  