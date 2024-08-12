import React from 'react'
import '../App.css'
function GenreFilter({genres}) {
    const handleClickGenreBtn=(item)=>{
console.log('Filtering by',item);
    }
  return (
    <div className='genre'>
        <h2>Filter by Genre</h2>
        <div className='btn-genre'>{genres.map((item,i)=><button onClick={()=>handleClickGenreBtn(item)} key={item+i}>{item}</button>)}</div>
    </div>
  )
}

export default GenreFilter