import React, { useState } from 'react';
import {Navigate, NavLink,useNavigate} from 'react-router-dom';
import Admin from './Admin.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
const Adminlogin = () => {
   const nav=useNavigate()
   const [name, setName] = useState('');
   const [pwd, setPwd] = useState('');

   const handle = () => {
      localStorage.setItem('Name', name);
      localStorage.setItem('Password', pwd);
      nav('Admin')
   };
   const remove = () => {
      localStorage.removeItem('Name');
      localStorage.removeItem('Password');
   };
   return (
      <center>
         <br></br><br></br><br></br><br></br><br></br>
         <div className="App">
         <h2>Admin Username :</h2><br></br>
         <input
            placeholder="Name"
            value={name}
            className="form-control-lg"
            onChange={(e) => setName(e.target.value)}
         /><br></br><br></br><br></br>
         <h2>Password :</h2><br></br>
         <input
            type="password"
            placeholder="Password"
            value={pwd}
            className="form-control-lg"
            onChange={(e) => setPwd(e.target.value)}
         />
         <div><br>
         </br><br></br>
            <button onClick={handle} className="btn-dark">Submit</button>
         </div>
      </div>
      </center>
   );
};
export default Adminlogin;