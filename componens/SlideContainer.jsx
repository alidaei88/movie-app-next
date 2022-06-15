import React from 'react';
import { useState } from 'react';
import Slider from './Slider';
import Styles from './component.module.css'

const SliderContainer = ({ title, data }) => {
    
    const [active, setActive] = useState(data[0].title);

    const clickHandler = (item) => {
        setActive(item)
    }

  return (
      <div className={Styles.sliderContainer}>
          <h2 className={Styles.sliderContainerHeader}>{title}</h2>
          <div className={ Styles.titleContainer }>
              {
                  data?.map((item, index) => {
                      const style = active === item.title ? Styles.active : Styles.deactive
                      return (
                          <span className={ style } key={index} onClick={() => clickHandler(item.title)} > { item.title } </span>
                      )
                  })
              }
          </div>
          <div>
              <Slider data={data.find(item => active===item.title)} />
          </div>
      </div>
  )
}

export default SliderContainer;