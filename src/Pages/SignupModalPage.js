import React from 'react'
import Modal from 'react-modal'
import {useHistory} from 'react-router-dom'
import style from '../Module.css/Modal.module.css'


Modal.setAppElement('#root')

const SignupModalPage = ({ firstname, surname, username, password, email}) => {
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
                        left: '500px',
                        right: '500px',
                        bottom: '100px',
                    }
                }
            }
          >

<br></br>
                <br></br>
                <input
                type='text'
                placeholder='firstname'
                className={style.modalInput1}
                value={firstname}
                />

<br></br>
                <br></br>

                <input
                type='text'
                placeholder='surname'
                className={style.modalInput1}
                value={surname}
                />

<br></br>
                <br></br>

                <input
                type='text'
                placeholder='username'
                className={style.modalInput3}
                value={username}
                />
            <br></br>
                <br></br>

                <input
                type='email'
                placeholder='email'
                className={style.modalInput4}
                value={email}
                />

<br></br>
                <br></br>

                

                <input
                type='password'
                placeholder='password'
                className={style.modalInput5}
                value={password}
                />

                <br></br>
                <br></br>


                <input
                type='password'
                placeholder='Confirm password'
                className={style.modalInput6}
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
                    Create account
                </button>
                
                
                </div>
            </Modal>


        </div>
    )
}

export default SignupModalPage