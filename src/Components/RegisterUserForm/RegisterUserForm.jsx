import React from 'react';
import { Link } from 'react-router-dom';


const RegisterUserForm = () => {
  return (
    <div className='loginpage-container'>
            <div class="form__group field">
                <input type="input" class="form__field" placeholder="Name" name="name" id='name' required />
                <label for="name" class="form__label">FirstName</label>
            </div>
            <div class="form__group field">
                <input type="input" class="form__field" placeholder="Name" name="name" id='name' required />
                <label for="name" class="form__label">LastName</label>
            </div>
            <div class="form__group field">
                <input type="input" class="form__field" placeholder="Name" name="name" id='name' required />
                <label for="name" class="form__label">Username</label>
            </div>
            <div class="form__group field">
                <input type="email" class="form__field" placeholder="Name" name="name" id='name' required />
                <label for="name" class="form__label">Email</label>
            </div>
            <div class="form__group field">
                <input type="password" class="form__field" placeholder="Password" name="name" id='name' required />
                <label for="name" class="form__label">Password</label>
            </div>
            <div class="form__group field">
                <input type="password" class="form__field" placeholder="Password" name="name" id='name' required />
                <label for="name" class="form__label">ReEnter password</label>
            </div>

            
            <button className="custom-button" >
         Register
             </button>
             <p>Already registred? <Link to='/'>Login</Link></p>
         </div>
  )
}

export default RegisterUserForm