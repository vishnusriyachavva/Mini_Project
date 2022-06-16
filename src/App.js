import React from 'react';
import {Routes,Route} from 'react-router-dom';
import Department from './Department.js';
import Home from './Home.js'
import Login from './Login.jsx'
import Adminlogin from './Adminlogin.js'
import Navbar from './Navbar.jsx';
import Pagenotfound from './Pagenotfound.js';
import Signup from './Signup';
import Status from './Status'
import StudentParams from './StudentParams';
import Admin from './Admin.js';
import Fee from './Fee.js';
import StudentNav from './StudentNav.js';
import Hostel_details from './Hostel_details.js';

const App = () => {
    return (
        <div >
            <Navbar/>
            <Routes>
                
                
                <Route path= "Login" element={ <Login />}/>
                
                <Route path= "Adminlogin" element={ <Adminlogin />}/>
                <Route path= "Login/StudentNav" element={ <StudentNav />}/>
                <Route path= "Login/StudentNav/Signup" element={ <Signup />}/>
                <Route path= "Login/StudentNav/Status" element={ <Status />}/>
                <Route path= "Login/StudentNav/Hostel_details" element={ <Hostel_details />}/>
                <Route path= "Adminlogin/Admin" element={ <Admin />}/>
                <Route path="Fee" element={<Fee/>}/>
                {/* <Route path= "Department" element={ <Department />}/>
                <Route path= "Students" element={ <StudentList />}>
                    <Route path=":name" element={<StudentParams/>}/>
                </Route> */} 
                
                <Route path="*" element={<Pagenotfound />}/>
                <Route path="home" element={<Home />}/>
               
            </Routes>
        </div>
    );
};

export default App;