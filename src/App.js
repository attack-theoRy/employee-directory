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
  const filtered = this.state.employees.filter(employee => {
    const fullName = (employee.name.first + " " + employee.name.last).toLowerCase();
    return fullName.startsWith(str);
  })
  this.setState({ filterList: filtered });
}

 sortTable = (str) => {
   console.log(str)
   this.setState({ filterList: str });
 }

render() {

  return (
  <div className="App">
  <Search searchFunc={this.search} />

      <Table employees={this.state.filterList}
              sortFunc={this.sortTable} />
    </div> 
    );
}
}

export default App;
