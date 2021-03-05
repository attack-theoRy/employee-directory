import React from "react"
import './App.css';
import Search from "./component/Search";
import axios from 'axios';
import Table from "./component/Table"


class App extends React.Component {

  state = {
    employees: {},
    filterList: [],
    sorted: false
  }



async componentDidMount() {

  let randomAPI = "https://randomuser.me/api/?results=50"

  axios.get(randomAPI).then(res => {

    this.setState({
      employees : res.data.results,
      filterList : res.data.results
    })


  })
}

search = (str) => {
  const filteredList = this.state.employees.filter(employee => {
    const fullName = (employee.name.first + " " + employee.name.last).toLowerCase();
    return fullName.startsWith(str);
  })
  this.setState({ filterList: filteredList });
}

render() {

  return (
  <div className="App">
  <Search searchFunction={this.search} />
      <Table employees={this.state.filterList} />
    </div> 
    );
}
}

export default App;
