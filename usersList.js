import React from 'react';

import './IngredientList.css';
import { connect } from 'react-redux';

  const user =[{
  "id":1,
  "name":"test1",
  "age" : "11",
  "gender":"male",
  "email" : "test1@gmail.com",
  "phoneNo" : "9415346313"
  },
  {
  "id" : 2,
  "name":"test2",
  "age" : "12",
  "gender":"male",
  "email" : "test2@gmail.com",
  "phoneNo" : "9415346314"
  },
  {
  "id":3,
  "name":"test3",
  "age" : "13",
  "gender":"male",
  "email" : "test3@gmail.com",
  "phoneNo" : "9415346315"
  },
  {
  "id":4,
  "name":"test4",
  "age" : "14",
  "gender":"male",
  "email" : "test4@gmail.com",
  "phoneNo" : "9415346316"
  },
  {
  "id":5,
  "name":"test5",
  "age" : "15",
  "gender":"male",
  "email" : "test5@gmail.com",
  "phoneNo" : "9415346317"
  },
  {
  "id":6,
  "name":"test6",
  "age" : "16",
  "gender":"male",
  "email" : "test6@gmail.com",
  "phoneNo" : "9415346318"
  }
 ]
 
const userList = props => {
if(!props.auth){
  props.history.push('/')
}
  return (
    <section className="ingredient-list">
      <h2>Employees</h2>
      <ul>
      <li>
            <span>{'Name'}</span>
            <span>{'Age'}</span>
            <span>{'Gender'}</span>
            <span>{'Email'}</span>
            <span>{'Phone No'}</span>
          </li>
        {user.map(data => (
          <li>
            <span>{data.name}</span>
            <span>{data.age}</span>

            <span>{data.gender}</span>
            <span>{data.email}</span>

            <span>{data.phoneNo}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};



const mapStateToProps = state => {
  return {
    auth: state.authenticated,
    login:state.userLogin
  };
};

export default connect(
  mapStateToProps
)(userList)
