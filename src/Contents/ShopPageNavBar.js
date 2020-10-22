import React from 'react'
import {Link} from 'react-router-dom'
import style from '../Module.css/ShopPageNavBar.module.css'


const ShopPageNavBar = () => {
    return(
        <div>
            <div className={style.shopNav}>
                <Link to='/'>
                <h1 className={style.home}>YeezyCave</h1>
                </Link>
                

                <div>
                    <ul className={style.shopNavList}>
                        <li><input type='search' placeholder='search shoes' className={style.searchBox}></input></li>
                        <li><input type='submit' className={style.box}></input></li>
                        <li className={style.cart}>Kart</li>

                    </ul>
                    

                </div>
            </div>
            <div className={style.pContainer}>
                <h1 className={style.proclaim}>Treat your Family to the Lamborghini of Sneakers this Summer</h1>
            </div>

        </div>
    )
}

export default ShopPageNavBar