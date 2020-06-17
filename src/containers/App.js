import React,{ Component } from 'react';
import './App.css';
import {details} from './robotDetails.js';
import Scroll from '../components/Scroll';
import SearchBox from '../components/SearchBox';
import CardList from '../components/CardList';

class App extends Component {
  constructor(){
    super();
  this.state = {
    searchText:'',
    robots: details
  }
}

   onSearchChange = (event) =>{
   this.setState({searchText: event.target.value}); 
}

// componentDidMount(){
//   fetch('https://jsonplaceholder.typicode.com/users')
//   .then(response=>response.json())
//   .then(users =>this.setState({robots: users}))
// }

     render() {
     const {robots, searchText} = this.state;
     console.log(robots);
const filteredRobots = robots.filter(robot=>
  { return robot.name.toLowerCase().includes(searchText.toLowerCase()) }
  );
     return robots.length ?
         (
          <div className="tc">
            <h1> Trans4Mers </h1>
            <SearchBox searchChange={this.onSearchChange} />
            <Scroll>
              <CardList details={filteredRobots}/>
            </Scroll>
          </div>
        ) :
         (
          <h1>LOADING...</h1>
          );
  }
}
export default App;
