
import { useParams } from 'react-router-dom';

import React from 'react';


const StudentParams = () => {
    const stddetails = useParams();
    const studentid = stddetails.name;
    
    return (
        
        <div>
            
            <h3>{studentid}</h3>
          
        </div>
        
    );
};

export default StudentParams;