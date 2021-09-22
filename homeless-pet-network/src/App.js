import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import 'tachyons'
import SearchBox from './components/SearchBox'
import CardList from './components/CardList'
import DogInfo from './components/DogInfo'
import { dogs } from './dogs'

class App extends Component {
  constructor() {
    super();
    this.state = {
      dogs: [],
      searchField: '',
      total_dogs: 10
    }
  }

  componentDidMount() {
    fetch(`http://localhost:8000/dogs/${this.state.total_dogs}`)
    .then(response => response.json())
    .then(results => {
      this.setState({ dogs: results })
    })
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value })
  }

  onClick = () => {
    this.setState({ total_dogs: this.state.total_dogs + 10})
    this.componentDidMount()
  }

  render() {
    const filterDogs = this.state.dogs.filter(dog => {
      return dog.tags.toLowerCase().includes(this.state.searchField.toLowerCase())
    })

    return (
      <Router>
        <Switch>
          <div className="tc">
            <h1 className="f1">Homeless Pet Network</h1>
            <Route exact path="/">
              <SearchBox searchChange={this.onSearchChange} />
              <CardList dogs={filterDogs} />
              <button onClick={this.onClick}>Load More</button>
            </Route>
            <Route exact path="/dog-info" component={DogInfo} />
          </div>
        </Switch>
      </Router>
    )
  }
}

export default App;
