import React from "react"
import './App.css';
import Search from "./component/Search";
import axios from 'axios';
import Table from "./component/Table"
import TitleBanner from "./component/TitleBanner"
import'bootstrap/dist/css/bootstrap.css';


class App extends React.Component {

  state = {
    employees: {},
    filterList: [],
    sorted: false
  }



  // get the users
async componentDidMount() {

  let randomAPI = "https://randomuser.me/api/?results=50"

  axios.get(randomAPI).then(res => {

    this.setState({
      employees : res.data.results,
      filterList : res.data.results
    })

  })
}

search = (searchTerm) => {
  const filtered = this.state.employees.filter(employee => {
    const fullName = (employee.name.first + " " + employee.name.last).toLowerCase();
    return fullName.startsWith(searchTerm);
  })
  this.setState({ filterList: filtered });
}

 sortTable = (str) => {
   console.log(str)
   if(!this.state.sorted)
   {
      this.setState({ filterList: str,
      sorted: true });

   }
   else
   {
     this.setState({filterList : this.state.employees,
    sorted: false});
     
   }

 }

render() {

  return (
  <div className="App">
    <TitleBanner />
    <Search searchFunc={this.search} />

      <Table employees={this.state.filterList}
              sortFunc={this.sortTable} />
    </div> 
    );
}
}

export default App;
