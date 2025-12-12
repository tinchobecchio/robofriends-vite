import { useState, useEffect } from 'react';
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox';
import './App.css'
import Scroll from '../components/Scroll';

// class App1 extends React.Component {
//     constructor() {
//         super()
//         this.state = {
//             robots: [],
//             searchfield: ''
//         }
//     }

//     componentDidMount() {
//         fetch('https://jsonplaceholder.typicode.com/users')
//             .then(res => res.json())
//             .then(users => this.setState({robots: users}))
//     }

//     onSearchChange = (event) => {
//         this.setState({ searchfield: event.target.value })
//     }

//     render() {
//         const { robots, searchfield } = this.state
//         const filteredRobots = robots.filter(robot => {
//             return robot.name.toLowerCase().includes(searchfield.toLowerCase())
//         })   
//         return !robots.length
//                 ? <h1 className='tc'>Loading</h1>
//                 : (
//                     <div className='tc'>
//                         <h1 className='f1'>RoboFriends</h1>
//                         <SearchBox searchChange={this.onSearchChange} />
//                         <Scroll>
//                             <CardList robots={filteredRobots}/>
//                         </Scroll>
//                     </div>
//                 )
//     }
// }

const App = () => {
    const [robots, setRobots] = useState([])
    const [searchfield, setSearchfield] = useState('')

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(users => setRobots(users))
    },[])

    const onSearchChange = (event) => {
        setSearchfield(event.target.value)
    }

    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchfield.toLowerCase())
    })   
    
    return !robots.length
            ? <h1 className='tc'>Loading</h1>
            : (
                <div className='tc'>
                    <h1 className='f1'>RoboFriends</h1>
                    <SearchBox searchChange={onSearchChange} />
                    <Scroll>
                        <CardList robots={filteredRobots}/>
                    </Scroll>
                </div>
            )
};

export default App