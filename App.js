import React from 'react'
import { useState } from 'react'
function App() {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [confirm,setConfirm] = useState('')
    const [ok,setOk] = useState({email: false, password: false, confirm: false})
    const submitHandler = (e) =>{
        e.preventDefault()
        setOk(current => {
            return {...current,email: !(email.includes('@') && email.includes('.')) ,confirm: password === confirm}
        })

    }
  return (
    <div>
        <form onSubmit={submitHandler}>
        <input value={email} placeholder='email' onChange={e => setEmail(e.target.value)}/><br/>
        {ok.email && <small>Incorrect email</small>}
        <br/><input value={password} placeholder='password' onChange={e => setPassword(e.target.value)}/><br/>
        {ok.password && <small>Incorrect password</small>}
        <br/>
        <input value={confirm} placeholder='confirm' onChange={e => setConfirm(e.target.value)}/><br/>
        {ok.confirm && <small>Passwords Do Not Match</small>}
        <button onClick={submitHandler}>Submit</button>
        </form>
    </div>
  )
}

export default App