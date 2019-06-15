import React, {Component} from 'react';
import CardList from '../components/CardList';
// import Scroll from '../components/Scroll';
import SearchBox from '../components/SearchBox';
import './App.css';

class App extends Component{
    constructor(){
        super()
        this.state ={
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(Response=>Response.json())
        .then(users => this.setState({robots: users}));
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value});
    }

    render(){
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        if(this.state.robots.length === 0){
            return <h1 className="tc">Loading...</h1>
        } else {
            return(
                <div className='tc'>
                    <h1 className="">RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <CardList robots={filteredRobots} />
                    <footer>
                        <p>Created by Mier • View on <a href="#github.com" target="blank">GitHub</a></p> 
                    </footer>
                </div>
            );
        }
    }
}

export default App;