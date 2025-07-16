import React, { useEffect, useRef, useState } from 'react'
import './TitleCards.css'
import card_data from '../../assets/cards/Cards_data'
import  {Link} from 'react-router-dom'


const TitleCards = ({title,catagory}) => {
const [apiData,setApiData]=useState([])


const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMTY1N2QyZDBmODg3MzA0ZjlhZjhhNzU5NjU2MDY0OSIsIm5iZiI6MTc1MjQ3MzUxMS41MTEwMDAyLCJzdWIiOiI2ODc0OWZhNzI3NjZkNzNjZTY3MDU5YTIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.uo6WNysPqBuouQqEJLFQWUHEY44wI8VTFvwrfJ7VBS4'
  }
};
 useEffect(()=>{
fetch(`https://api.themoviedb.org/3/movie/${catagory?catagory:"now_playing"}?language=en-US&page=1`, options)

  .then(res => res.json())
  .then(res => setApiData(res.results))
  .catch(err => console.error(err)); //api movie list 
 },[catagory]
)



  return (
    <div  className='titlcards'>
      <h3>{title?title:"Popular on Netflix"}</h3>
      
      <div className="card-list"  >
        {apiData.map((card,index)=>{
            return <Link to={`/player/${card.id}`} className='card' key={index}> 
            <img src={`https://image.tmdb.org/t/p/w500/`+card.backdrop_path}></img>
            <p>{card.original_title}</p>
            </Link>
        })}
      </div>
    </div>
  )
}

export default TitleCards
