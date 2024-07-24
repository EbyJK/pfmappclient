import React,{useState,useEffect} from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import {message} from 'antd'
const Header = () => {
      const [loginUser,setLoginUser]=useState("");
      const navigate=useNavigate();

    useEffect(()=>{
        const user=JSON.parse(localStorage.getItem("user"));
        if(user){
          setLoginUser(user);
        }

    },[]);
 const logoutHandler=()=>{
  localStorage.removeItem('user')
  message.success('logout success')
   navigate('/login')
 }
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon">
      </span></button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      <Link className="navbar-brand" to="/"><h1>Personal Finance Manager</h1></Link>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
      <li className="nav-item">
        <button  style={{ backgroundColor: 'beige', color: 'white', padding: '2px', border: 'none', borderRadius: '5px' }}> <Link className="nav-link active" aria-current="page" to="/login"><h5>Login</h5></Link></button>
        </li>
        &nbsp;&nbsp;
      <li className="nav-item">
         <button  style={{ backgroundColor: 'beige', color: 'white', padding: '2px', border: 'none', borderRadius: '5px' }}><Link className="nav-link active" aria-current="page" to="/register"><h5>Sign UP</h5></Link></button> 
        </li>
        &nbsp;&nbsp;
        {/* <li className="nav-item">
          <button  style={{ backgroundColor: 'beige', color: 'white', padding: '2px', border: 'none', borderRadius: '5px' }}><Link className="nav-link active" aria-current="page" to="/user"><h5>USER</h5></Link></button>
        </li> */}
        &nbsp;&nbsp;
        <li className="nav-item">
        <button  style={{ backgroundColor: 'beige', color: 'white', padding: '2px', border: 'none', borderRadius: '5px' }}><Link className="nav-link active" aria-current="page" to="/admin"><h5>ADMIN</h5></Link></button>
        </li>
        &nbsp;&nbsp;
        <li className="nav-item">
        <button  className='btn btn-primary' onClick={logoutHandler}
        style={{ backgroundColor: 'beige', color: 'white', padding: '2px', border: 'none', borderRadius: '5px' }}>
          <Link className="nav-link active" aria-current="page" to="/admin">
          <h5>Logout</h5>
          </Link>
          </button>
        </li>
        &nbsp;&nbsp;
        <img src="https://thebudgeting.app/static/media/logo.0af2e749811b23dbc318.webp" alt='App logo' height={100}/>
      </ul>
    </div>
  </div>
</nav>


</>
  )
}

export default Header
