import React, {useState} from 'react'
import Modal from 'react-modal'
import axios from 'axios'
import style from '../Module.css/Modal.module.css'


Modal.setAppElement('#root')

const SignupModalPage = () => {

    const [ user, setUser ] = useState({
        firstname:"",
        surname:"",
        username:"",
        email:"",
        password:""
    })


    const handleSubmit = async (e) => {
        e.preventDefault()

        let result = await axios.post('http://localhost:4000/api/user/new', {
            firstname: user.firstname, 
            surname: user.surname, 
            username: user.username, 
            email: user.email, 
            password: user.password
        })

        console.log(result)
    }
  
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
                value={user.firstname}
                onChange={ e => setUser({ ...user, firstname: e.target.value })}
                />

<br></br>
                <br></br>

                <input
                type='text'
                placeholder='surname'
                className={style.modalInput1}
                value={user.surname}
                onChange={ e => setUser({ ...user, surname: e.target.value })}
                />

<br></br>
                <br></br>

                <input
                type='text'
                placeholder='username'
                className={style.modalInput3}
                value={user.username}
                onChange={ e => setUser({ ...user, username: e.target.value })}
                />
            <br></br>
                <br></br>

                <input
                type='email'
                placeholder='email'
                className={style.modalInput4}
                value={user.email}
                onChange={ e => setUser({ ...user, email: e.target.value })}
                />

<br></br>
                <br></br>

                

                <input
                type='password'
                placeholder='password'
                className={style.modalInput5}
                value={user.password}
                onChange={ e => setUser({ ...user, password: e.target.value })}
                />

                <br></br>
                <br></br>


                {/*<input
                type='password'
                placeholder='Confirm password'
                className={style.modalInput6}
                password={user.password}
                />*/}

<br></br>
<br></br>
                <div>
                <button 
                type='submit' 
                onClick = { (e)=>handleSubmit(e) }
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