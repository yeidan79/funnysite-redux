import React from 'react';
import { connect } from 'react-redux';

import Table from '../components/Table.js'
import Button from '../components/Button.js'
import Menu from '../components/Menu.js'
import Scroll from '../components/Scroll.js'
import { fetchJokes, addJoke } from '../actions/jokesActions'


import './css/App.css';
import logo from './css/logo_transparent.png';

// parameter state comes from index.js provider store state(rootReducers)
const mapStateToProps = (state) => {
  return {
    loading: state.jokes.loading,
    jokes: state.jokes.jokes,
    hasErrors: state.jokes.hasErrors,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchJokes: (num) => dispatch(fetchJokes(num)),
    onAddJoke: (jokes) => dispatch(addJoke(jokes))
  }
}

class App extends React.Component {

  componentDidMount() {
    this.props.onFetchJokes(8)
  }

  render(){
    return (
      <div className="App">
        <div className="flex items-center justify-center vh-25">
          <img alt="logo" src={logo} width='325' height='300'/>
        </div>
        <Scroll>
          <Table
            jokes={this.props.jokes}
            />
        </Scroll>
          <Menu>
          <Button
            handleClick={() => this.props.onFetchJokes(this.props.jokes.length)}
            name="Refresh jokes!"
          />
          <Button
            handleClick={() => this.props.onAddJoke(this.props.jokes)}
            name="New Joke!"
          />
        </Menu>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
