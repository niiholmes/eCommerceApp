import React from 'react'
import style from '../Module.css/CarouselBar.module.css'
import image1 from '../Contents/HomePageContentsImages/images/yeezy-main-350.jpg'
import image2 from '../Contents/HomePageContentsImages/images/yeezy-main-750.jpg'


const CarouselBar = () => {
    return(
        <div>
            <div className={style.caroBar}>

                <img src={image1} alt='yeezy 350 boost' className={style.yeezyPrime}></img>
                <img src={image2} alt='yeezy 750 boost' className={style.yeezyPrime2}></img>


            </div>

            
          

        </div>
    )
}

export default CarouselBar