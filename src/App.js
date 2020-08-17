import React from 'react';
import PropTypes from "prop-types";

class App extends React.Component{
  state = {
    isLoading: true,
    movies: []
  };
  componentDidMount(){
    setTimeout(() => {
      this.setState({ isLoading: false});

    }, 6000);  //6000단위의 시간 이후에 we are ready 로 만든다. 
  }

  render() {  //react는 자동적으로 class 컴포넌트의 랜더 meothod를 자동적으로 실행한다.
    const {isLoading} = this.state;
    return <div>{isLoading ? "Loading": "We are ready"}</div>
      
  }
}

export default App;
