import React, { useState } from 'react';
import {Navigate, NavLink,useNavigate} from 'react-router-dom';
import Signup from './Signup.js'
import StudentNav from './StudentNav';
import Axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
const Login = () => {
   const nav=useNavigate()
   
  
   const [stid, setstid] = useState('');
   const [stname, setstname] = useState('');
  
   const handle = (event) => {

      localStorage.setItem('Name', stid);
      localStorage.setItem('Password', stname);
      event.preventDefault();
      Axios.post("http://localhost:8080/insert",{stid,stname})
      .then(()=>
         {
            alert("SuccessFull");
         }
      )
      nav('StudentNav')
   };
   
   
   return (
      <center>
         <div className="App">
            <br></br><br></br><br></br><br></br><br></br>
         <h2>Student Username :</h2><br></br>
         <input
            placeholder="Name"
            value={stid}
            className="form-control-lg"
            onChange={(e) => setstid(e.target.value)}
         /><br></br><br></br><br></br>
         <h2>Password :</h2><br></br>
         <input
            type="password"
            placeholder="Password"
            value={stname}
            className="form-control-lg"
            onChange={(e) => setstname(e.target.value)}
         />
         <div><br>
         </br><br></br>
            <button onClick={handle} className="btn-dark">Submit</button>
         </div>
      </div>
      </center>
   );
};
export default Login;