import React from "react"
import logo from './logo.svg';
import './App.css';
import Search from "./component/Search";
import axios from 'axios';


class App extends React.Component {

  state = {
    employees: {}
  }


async componentDidMount() {

  let randomAPI = "https://randomuser.me/api/?results=50"

  axios.get(randomAPI).then(data => {

    this.setState({
      employees : data.data.results
    })

  })
} 

render() {

  return (
  <div className="App">
    <Search />
    <div class="card">
          <div class="card-body text-center">
            Click on the name column to sort the table by name.
          </div>
        </div>
    </div>)
}
}

export default App;
