import React from 'react'
import Films from './Films'

let FilmsList = (props) => {
    return props.films.map((films) => (
        <Films key={films.id} films={films}/>
    ))
}

export default FilmsList
