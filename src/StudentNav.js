import React from 'react';
import {Navigate, NavLink,Outlet} from 'react-router-dom';

const StudentNav = () => {
    return (
        <div className='ui tabular menu'>
            <NavLink to="/Login/StudentNav/Signup"  className="item" >Register</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <NavLink to="/Login/StudentNav/Status" className="item">Status</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             <NavLink to="/Login/StudentNav/Hostel_details" className="item">HostelFee Details</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             <NavLink to="*" className="item" style={{paddingLeft:900}}>Logout</NavLink>
             <Outlet/>
        </div>
    );
};

export default StudentNav;