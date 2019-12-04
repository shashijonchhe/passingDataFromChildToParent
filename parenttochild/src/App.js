import React from 'react';
import logo from './logo.svg';
import './App.css';
import Child from './Child';

class App extends React.Component{
  constructor(){
    super()
      this.state={
        counter:0
      }
  }

onHandleClick=()=>{
  let counter=this.state.counter

  this.setState({
    counter:counter+1
  })
}



render(){
  return(
    <div className="App">
    
      <h1>{this.state.counter}</h1>
      <Child onHandleUpdate={this.onHandleClick}/>
      
    </div>
  )
}

}

export default App;
