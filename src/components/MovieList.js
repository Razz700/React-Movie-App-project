import React from 'react'
import '../App.css'
function MovieList({movies}) {
    const columnTitle=['Title','Genre','Year'];
  return (
    <table className='movie-list'>
        <thead>
            <tr>
                {columnTitle.map((item,i)=><th key={'table-head'+i}>{item}</th>)}
            </tr>
        </thead>
        <tbody>
            {movies.map((item,i)=><tr key={'table-row'+i}>
               <td>{item.title}</td>
               <td>{item.genre}</td>
               <td>{item.year}</td>
            </tr>)}
        </tbody>
    </table>
  )
}

export default MovieList