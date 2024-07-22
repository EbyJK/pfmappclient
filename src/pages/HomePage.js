import React,{useEffect,useState} from 'react'

import Layout1 from '../components/layout1/Layout1'




const HomePage = () => {
    const[loginUser,setLoginUser]= useState('')
    useEffect(()=>{
        
          const user= JSON.parse(localStorage.getItem('user'))
          if(user){
            setLoginUser(user)
          }
      },[])
  return (
    <Layout1 >
        &nbsp;
        <br/>
        <div className="home-page">
        <h1>Home Page</h1>
        <h2> Welcome {loginUser && loginUser.name}..!</h2>
        <h3>Access Our Facilities Using the Navbar above</h3>


        </div>
    </Layout1>
      
     
  )
}

export default HomePage
