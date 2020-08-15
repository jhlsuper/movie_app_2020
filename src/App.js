import React from 'react';
import PropTypes from "prop-types";

class App extends React.Component{
  state ={
    count: 0
  };

  add = () => {  //이것들은 react 코드가 아니라 자바스크립트 코드
    this.setState(current => ({count: current.count +1}));
  };
  minus = () =>{
    this.setState(current=>({count: current.count -1}));

  };

  render() {  //react는 자동적으로 class 컴포넌트의 랜더 meothod를 자동적으로 실행한다.
    return <div>
      <h1>The number is {this.state.count}</h1>
      <button onClick={this.add}>Add</button> 
      <button onClick={this.minus}>Minus</button>
      </div>
  }
}

export default App;
