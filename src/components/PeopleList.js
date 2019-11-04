import React from 'react'
import People from './People'

let PeopleList = (props) => {
    return props.people.map((people) => (
        <People key={people.id} people={people}/>
    ))
}

export default PeopleList
