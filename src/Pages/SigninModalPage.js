import React from 'react'
import Modal from 'react-modal'
import {useHistory} from 'react-router-dom'
import style from '../Module.css/Modal.module.css'


Modal.setAppElement('#root')

const SigninModalPage = ({ username, password}) => {
    const history = useHistory()
  
    return(
        <div>

            <Modal isOpen={true}  
            style={
                {
                    overlay:{
                        backgroundColor: 'bisque', 
                        position:'fixed'
                
                    },
                    content:{
                        position: 'absolute',
                        background: 'antiquewhite',
                        top: '100px',
                        left: '300px',
                        right: '300px',
                        bottom: '100px',
                    }
                }
            }
          >

<br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
             
                <input
                type='text'
                placeholder='username'
                className={style.modalInput1}
                value={username}
                />

                <br></br>
                <br></br>


                <input
                type='password'
                placeholder='password'
                className={style.modalInput2}
                password={password}
                />

<br></br>
<br></br>
                <div>
                <button 
                type='submit' 
                onClick = {()=>history.push('/shop')}
                className={style.modalButton}                
                >
                    Sign in
                </button>
                
                
                </div>
            </Modal>


        </div>
    )
}

export default SigninModalPage