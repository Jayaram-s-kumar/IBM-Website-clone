import React from 'react'
import '../css/hero.css'

function Hero() {
  return (
    <div className='Herocontainer'>
        <div className="Heroleft">
            <p className='title'>Automate your <br /> business end- <br /> to-end</p>
            <div className="bottom">
                <p>Its time to move beyond the bots <br /> and let IBM's intelligent automation <br /> make work less</p>
                <div className="explorebutton">
                    <button>Explore more</button>
                </div> 
            </div>
        </div>
        <div className="Heroright">
            <img src="/images/MainPage-StringPulley.webp" alt="" />
        </div>
    </div>
  )
}

export default Hero