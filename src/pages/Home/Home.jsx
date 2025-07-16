import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar';
import hero_banner from '../../assets/hero_banner2.jpg'
import hero_title from '../../assets/hero_title1.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitleCards from '../../components/TitleCards/TitleCards';
import Footer from '../../components/Footer/Footer';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate=useNavigate();

  return (
    <div className='home'>
      <Navbar/>
      <div className="hero">
        <img src={hero_banner} className='banner-img'></img>
        <div className="hero-caption">
          <img src={hero_title} className='caption-img'></img>
          <p className='hero-title'>Eight robbers lock themselves in the Royal Mint of Spain as their
             criminal mastermind manipulates the police to carry out his master plan</p>
             <div className="hero-btns">
              <button className='btn' onClick={()=>{navigate("/player/main")}}   > <img src={play_icon}></img> Play</button>
              <button src={info_icon} className='btn dark-btn'><img src={info_icon}></img>More Info</button>
             </div>
             <div className="main-Cards">
              <TitleCards/>

             </div>
        </div>
      </div>
      <div className="more-cards">
              <TitleCards title={"Today's Top Picks for You"} catagory={"popular"}/>
              <TitleCards  title={"My List"} catagory={"top_rated"}/>
              <TitleCards title={"New on Netflix"} catagory={"upcoming"} />
              <TitleCards title={"Your Next Watch"} catagory={"now_playing"} />

      </div>
      <Footer/>
    </div>
  )
}

export default Home
