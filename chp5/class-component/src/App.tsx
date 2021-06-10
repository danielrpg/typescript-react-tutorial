import React from 'react';
import './App.css';
import Greeting from './Greeting';

class App extends React.Component{
  constructor(props: any) {
    super(props);
    this.state = {
      enteredName: "",
      message: ""
    }
    this.onChangeName = this.onChangeName.bind(this);
  }

  state: { enteredName: string, message: string }

  onChangeName(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      enteredName: e.target.value,
      message: `Hello from, ${e.target.value}`
    });
  }

  render() { 
    console.log("rendering App...");
    return (
      <div className="App">
        <header className="App-header">
          <input 
            value={this.state.enteredName}
            onChange={this.onChangeName}/>
          <Greeting message={this.state.message}></Greeting>
        </header>
      </div>
    )
  }
}

export default App;
