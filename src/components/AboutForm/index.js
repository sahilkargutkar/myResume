import React from  'react'
import background from '../../Icons/lg.png';
import GlassCard from '../AboutForm/GlassCard';

const AboutPage=()=>{
  return (
    <div className="App" id="about"
      style={{
        width: '99vw',
        height: '150vh',
        backgroundImage: `url(${background})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <GlassCard />
    </div>
  );
}

 export default AboutPage;