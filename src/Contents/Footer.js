import React from 'react'
import axios from "axios"
import style from '../Module.css/Footer.module.css'



const Footer = () => {
/*axios.get("http://localhost:4000/api/user/find/jayjay")
.then( response => {
   // console.log(response)
    console.log(response.data.firstname)
})
*/

    return(
        <div>       

             <div className={style.footerBar}>
                 <ul className={style.promises}>
                     <li>
                         <h4 className={style.shipping}><strong>Free Shipping in GH</strong><br></br> For orders above GHC100</h4>
                        
                    </li>
                    <li>
                         <h4 className={style.return}><strong>30 Days Return</strong><br></br>money back guarantee</h4>
                        
                    </li>
                    <li>
                         <h4 className={style.contact}><strong>24/7 Support</strong><br></br>Contact anytime</h4>
                        
                    </li>
                 </ul>


             </div>    
          

        </div>
    )
}

export default Footer