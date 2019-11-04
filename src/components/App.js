import React, { Component } from 'react'
import FilmsList from './FilmsList'
import PeopleList from './PeopleList'




export class App extends Component {


constructor () {
    super();
    this.state = {
        films: [],
        people: [],
        loaded: false,
        peopleorfilm: '',
        error: null
    }    
}

componentDidMount() {
    fetch('https://ghibliapi.herokuapp.com/people')
      .then(response => response.json())
      .then(result => this.setState({ people: result}))

    fetch('https://ghibliapi.herokuapp.com/films') 
        .then(response => response.json())
        .then(result => this.setState({films: result}))
};

// componentDidMount() {
//     Promise.all([fetch('https://ghibliapi.herokuapp.com/films'), fetch('https://ghibliapi.herokuapp.com/people')])
//           .then(([res1, res2]) => {
//               return Promise.all([res1.json(),res2.json()])
//           })
//           .then(([res1,res2]) => {
//             this.setState( {films: res1,
//                             people: res2
//             })
//           })
//  };


chooseFilms = () => { //toggles the state for loaded
    this.setState({loaded: !this.state.loaded})
    this.setState({ peopleorfilm: 'films' })
}
choosePeople = () => { //toggles the state for loaded
    this.setState({loaded: !this.state.loaded})
    this.setState({ peopleorfilm: 'people' })
}    


render() {

        let h1;
        if (this.state.peopleorfilm === 'people'){
            h1 =
            <div className="App">
                <PeopleList people={this.state.people}/>
            </div>
        }
        if (this.state.peopleorfilm === 'films'){
            h1 =
            <div className="App">
                <FilmsList films={this.state.films}  />
            </div>
        }
        if (this.state.loaded === false ) {
            return (
                <div>
                    <button onClick={this.choosePeople}> People </button>
                    <button onClick={this.chooseFilms}> Films </button>
                </div>
            )
        } else  {
            return(
                <div>
                    {h1}
                </div>
            )
        }
    }
}
export default App


/*    render() {
        return (
                <div className="App">
                    <PeopleList people={this.state.people}/>
                </div>
        )
    }
}
*/