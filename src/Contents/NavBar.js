import React from 'react'
import {Link} from 'react-router-dom'
import style from '../Module.css/NavBar.module.css'


const NavBar = () => {
    return(
        <div>
            <div className={style.homeNav}>
                <Link to='/' className={style.homeLink}>
                <h1  className={style.home}>YeezyCave</h1>
                </Link>
                

                <div>
                    <ul className={style.navList}>
                        <Link to='/create-an-account' className={style.oldNew}>
                        <li className={style.signup}>CREATE AN ACCOUNT</li>
                        </Link>
                        <Link to='/sign-in-your-details' className={style.oldNew}>
                        <li className={style.signin}>SIGN IN</li>
                        </Link>

                    </ul>
                </div>
            </div>

        </div>
    )
}

export default NavBar