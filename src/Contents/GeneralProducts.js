import React from 'react'
import style from '../Module.css/GeneralProducts.module.css'
import image1 from '../Contents/ShopPageContentsImages/GeneralProducts/images/1.jpg'
import image2 from '../Contents/ShopPageContentsImages/GeneralProducts/images/2.jpg'
import image3 from '../Contents/ShopPageContentsImages/GeneralProducts/images/3.jpg'



const GeneralProducts = () => {
    return(
    <div>
                    <div className={style.pContainer}>
                <h1 className={style.proclaim}>Treat your Family to the Lamborghini of Sneakers this Summer</h1>
            </div>

        <h4>KIDS</h4>
        <div className={style.productsBar}>
            <div className={style.card}>
            <img src={image1}className={style.boost700} alt='yeezy boost 700'/>
            <div className={style.container}>
                <h4>Yeezy Boost 700</h4>
                <h5>GhC700</h5>
            </div>
            </div>

            <div className={style.card}>
            <img src={image2}className={style.boost700} alt='yeezy boost 700'/>
            <div className={style.container}>
                <h4>Yeezy Boost 700</h4>
                <h5>GhC700</h5>
            </div>
            </div>

            <div className={style.card}>
            <img src={image3}className={style.boost700} alt='yeezy boost 700'/>
            <div className={style.container}>
                <h4>Yeezy Boost 700</h4>
                <h5>GhC700</h5>
            </div>
            </div>
            
       
        </div>

        <h4>WOMEN</h4>
        <div className={style.productsBar}>
            <div className={style.card}>
            <img src={image1}className={style.boost700} alt='yeezy boost 700'/>
            <div className={style.container}>
                <h4>Yeezy Boost 700</h4>
                <h5>GhC700</h5>
            </div>
            </div>

            <div className={style.card}>
            <img src={image2}className={style.boost700} alt='yeezy boost 700'/>
            <div className={style.container}>
                <h4>Yeezy Boost 700</h4>
                <h5>GhC700</h5>
            </div>
            </div>

            <div className={style.card}>
            <img src={image3}className={style.boost700} alt='yeezy boost 700'/>
            <div className={style.container}>
                <h4>Yeezy Boost 700</h4>
                <h5>GhC700</h5>
            </div>
            </div>
            
       
        </div>

        <h4>MEN</h4>
        <div className={style.productsBar}>
            <div className={style.card}>
            <img src={image1}className={style.boost700} alt='yeezy boost 700'/>
            <div className={style.container}>
                <h4>Yeezy Boost 700</h4>
                <h5>GhC700</h5>
            </div>
            </div>

            <div className={style.card}>
            <img src={image2}className={style.boost700} alt='yeezy boost 700'/>
            <div className={style.container}>
                <h4>Yeezy Boost 700</h4>
                <h5>GhC700</h5>
            </div>
            </div>

            <div className={style.card}>
            <img src={image3}className={style.boost700} alt='yeezy boost 700'/>
            <div className={style.container}>
                <h4>Yeezy Boost 700</h4>
                <h5>GhC700</h5>
            </div>
            </div>
            
       
        </div>

        </div>       
          

        
    )
}

export default GeneralProducts