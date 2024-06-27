import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
<link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
const Login = () => {
  const navigate=useNavigate()
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  return (
    <div className='idk'>
    <div className='mini-body'>
    <div className='login'>
     <form action="">
        <div>
      <h1>login</h1>
      <div className='input-box'>
        <input type="text"placeholder='username' required />
        <i class='bx bxs-user' ></i>
      </div>
      <div className='input-box'>
        <input type="password"placeholder='password' required />
        <i class='bx bxs-lock-alt' ></i>
      </div>
      <div className='remember-forgot'>
        <label> <input type="checkbox"/>remember me</label>
        <a href="#">forgot password?</a>
      </div>
      
      <button onClick={()=>navigate('/Home')} type='submit' className='btn'>Login</button>
      <div className='register-link'>
      <p>dont have an account?<a href="#">register</a></p>
      </div>
      </div>
      </form>
    </div>
    </div>
    </div>
    
  )
}
export default Login
