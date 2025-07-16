import React, { useEffect, useState } from 'react';
import './Player.css';
import back_arrow_icon from '../../assets/back_arrow_icon.png';
import { useNavigate, useParams } from 'react-router-dom';
import netflix_spinner from '../../assets/netflix_spinner.gif'

const Player = ({main}) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [apiData, setApiData] = useState(null); 

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMTY1N2QyZDBmODg3MzA0ZjlhZjhhNzU5NjU2MDY0OSIsIm5iZiI6MTc1MjQ3MzUxMS41MTEwMDAyLCJzdWIiOiI2ODc0OWZhNzI3NjZkNzNjZTY3MDU5YTIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.uo6WNysPqBuouQqEJLFQWUHEY44wI8VTFvwrfJ7VBS4'
    }
  };


   useEffect(() => {
    if (!main && id) {
      fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
        .then(res => res.json())
        .then(res => {
          if (res.results && res.results.length > 0) {
            setApiData(res.results[0]);
          }
        })
        .catch(err => console.error(err));
    }
  }, [id, main]);

  return (
    <div className='player'>
      <img src={back_arrow_icon} alt="Back" onClick={() => navigate(-1)} />

      {(main || apiData?.key) ? (
        <>
          <iframe
            width='90%'
            height='90%'
            src={`https://www.youtube.com/embed/${main ? main : apiData.key}`}
            title='Trailer'
            frameBorder='0'
            allowFullScreen
          ></iframe>

          {apiData && (
            <div className="player-info">
              <p>Published Date: {apiData.published_at?.slice(0, 10)}</p>
              <p>Name: {apiData.name}</p>
              <p>Type: {apiData.type}</p>
            </div>
          )}
        </>
      ) : (
        <p style={{ color: 'white', fontSize: '20px' }}>Loading trailer.</p>
      )}
    </div>
  );
};

export default Player;