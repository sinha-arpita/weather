import React from 'react';
//import logo from './logo.svg';
import Title from "./components/Title"
import './App.css';

class  App extends React.Component {
  //constructor(props){
    //super(props)
    //this.state={}
  //}
  render(){
     return (
        <div className="App">
          <h1>HELLO</h1>
             <Title/>
        </div>
    );
  }
}

export default App;
