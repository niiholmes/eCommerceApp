import React from 'react'
import {Link} from 'react-router-dom'
import style from '../ShopPageNavBar/ShopPageNavBar.module.css'


const ShopPageNavBar = (props) => {
    return(
        <div>
            <div className={style.shopNav}>
                <Link to='/'>
                <h1 className={style.home}>YeezyCave</h1>
                </Link>

                <h1>{username}</h1>
                

                <div>
                    <ul className={style.shopNavList}>
                        <li><input type='search' placeholder='search shoes' className={style.searchBox}></input></li>
                        <li><input type='submit' className={style.box}></input></li>
                        <li className={style.cart}>Kart</li>

                    </ul>
                    

                </div>
            </div>


        </div>
    )
}

export default ShopPageNavBar