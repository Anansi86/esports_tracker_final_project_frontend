import React, { useState } from "react"
import AuthService from "../../services/auth.service";
import { useNavigate } from 'react-router-dom';
import { useGlobalState } from "../../context/GlobalState";
import jwtDecode from "jwt-decode";

const Register = () => {
  let navigate = useNavigate();

  const [ state, dispatch ] = useGlobalState();

  const [user, setUser] = useState({
    username: "",
    password: "",
    passwordConf: "",
    firstName: "",
    lastName: "",
    email: "",
  })

  const [errors, setErrors] = useState({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
  })

  const handleChange = (key, value) => {
    setUser({
      ...user,
      [key]: value
    })
  }

  const handleRegister = (e) => {
    e.preventDefault();
    AuthService.register(user)
      .then(async (resp) => {
        console.log(resp);
        let data = jwtDecode(resp.access)
        await dispatch({
          currentUserToken: resp.access,
          currentUser: data
        })
        navigate('/Home')
      }).catch(function(resp) {
            console.log("setErrors was called");
            console.log(resp);
            setErrors(resp.data)
      });
  }

  return (
    <div className="c-form">
      <form onSubmit={handleRegister}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            onChange={(e) => handleChange('username', e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            onChange={(e) => handleChange('email', e.target.value)}
            required
          />
          <p id="email-error">
{errors ? errors.email : ""}
          </p>
        </div>
        <div>
          <label htmlFor="pass">Password (8 characters minimum):</label>
          <input
            type="password"
            id="pass"
            name="password"
            minLength="8"
            required
            onChange={(e) => handleChange('password', e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="passConf">Confirm Password:</label>
          <input
            type="password"
            id="passConf"
            name="password"
            minLength="8"
            required
            onChange={(e) => handleChange('passwordConf', e.target.value)} />
        </div>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="fname"
          
            required
            onChange={(e) => handleChange('firstName', e.target.value)} />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lname"
            required
            onChange={(e) => handleChange('lastName', e.target.value)} />
        </div>
        <input
          type="submit"
          value="Register"
          disabled={(
            user.password &&
            user.password.length >= 8 &&
            user.password === user.passwordConf &&
            user.firstName &&
            user.lastName &&
            user.email
          ) ? false : true}
        />
      </form>
    </div>
  )

}

export default Register