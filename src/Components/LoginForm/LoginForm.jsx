import React from 'react'
import { Link } from 'react-router-dom'

const LoginForm = () => {
  return (
    
        <div className='loginpage'>
      

      <div className='loginpage-container'>
         <div class="form__group field">
             <input type="input" className="form__field" placeholder="Name" name="name" id='name' required />
             <label for="name" className="form__label">Username</label>
         </div>
         <div className="form__group field">
             <input type="password" className="form__field" placeholder="Password" name="name" id='name' required />
             <label for="name" className="form__label">Password</label>
         </div>

         <Link to='/admin'> 
         <button className="custom-button" >
          Login
      
          </button>
          </Link>
          <p>Haven't Registered yet? </p> <Link to='/register'>SignUp</Link>
      </div>
     
     </div>
    
  )
}

export default LoginForm