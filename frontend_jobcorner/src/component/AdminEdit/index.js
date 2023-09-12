import React, {useState} from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css'

const adminData = {
    username:'mahijobs',
    password: 'mahi@jobs'
}

function AdminEdit(){
    const [username, setUsername] = useState('')
    const [password,setPassword] = useState('')
    const [errMsg, setErrMsg] = useState('')
    
    const changeUsername = (event) => {
        setUsername(event.target.value)
    }

    const changePassword = (event) => {
        setPassword(event.target.value)
    }

    const clickAdminLogin = (event) => {
        event.preventDefault()
        if (adminData.username === username && adminData.password === password){
            setErrMsg('correct')
        }
        else{
            setErrMsg('wrong')
        }
    }

    return(
        <form className="form" onClick={clickAdminLogin}>
            <div className="form-container d-flex flex-column align-items-center">
               <div>
                    <label htmlFor="username" className="label">ADMIN USERNAME</label><br/>
                    <input type="text" className='input-box' id="username" onChange={changeUsername}/><br/>
                    <label htmlFor="password" className="label">ADMIN USERNAME</label><br/>
                    <input type="password" className='input-box' id="password" onChange={changePassword}/><br/>
                    </div>
                    <button className='btn btn-primary' type="submit">Login</button>
                    <p>{errMsg}</p>
            </div>
        </form>
    )
}

export default AdminEdit