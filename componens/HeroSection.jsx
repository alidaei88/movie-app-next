import React from 'react'
import Styles from './component.module.css'
import Logo from './page/index/Logo'


const HeroSection = () => {
  return (
      <div className={Styles.heroSectionRoot}>
          <spn className={Styles.bgCover}>
          <div className={Styles.logoWraper}><Logo /></div>
          <div className={Styles.heroContentRoot}>
              <h1 className={Styles.heroHeader}>Unlimited films,<br />TV programmes<br />and more.</h1>
              <p className={Styles.heroContent}>Enjoy on your TV. Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more. Save your favourites easily and always have something to watch.</p>
          </div> 
          </spn>


         
      </div>
  )
}

export default HeroSection