import React, { useState } from 'react';
import {loginAction} from '../store/action';
import Card from '../UI/Card';
import './IngredientForm.css';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import usersList from './usersList';
import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

const LoginForm = React.memo(props => {
  const [username, setusername] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = async (event) => {
    event.preventDefault();
  if(username.length === 0){
    alert('enter user name')
    return
  }
  if(password.length === 0){
    alert('enter password')
    return
  }
   const { auth, login } = props;
   if(login.username === username && login.password === password ){
    await props.isUserAuthenticated({'auth':true});
    props.history.push('/users')
   }else{
    alert('invalid username or password')
   }
  };

  return (
    <section className="ingredient-form">
      <Card>
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="title">User Name</label>
            <input
              type="text"
              value={username}
              onChange={event => {
                setusername(event.target.value);
              }}
            />
          </div>
          <div className="form-control">
            <label htmlFor="amount">Password</label>
            <input
              type="password"
              value={password}
              onChange={event => {
                setPassword(event.target.value);
              }}
            />
          </div>
          <div className="ingredient-form__actions">
            <button type="submit">Login</button>
          </div>
        </form>
      </Card>
    </section>
  );
});
const mapStateToProps = state => {
  return {
    auth: state.authenticated,
    login:state.userLogin
  };
};

const mapDispatchToProps = dispatch => {
  return {
      isUserAuthenticated: ( token) =>
      dispatch(loginAction( token))
     
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm)
