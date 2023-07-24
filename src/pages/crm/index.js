import React, { useState } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import PrivateRoute from '../privateRoute';
import Sidebar from './common/Sidebar';

const CRM = () => {
   
    return (
        <div>
           <Sidebar />
        </div>
    )
}

export default () => (
    <PrivateRoute >
        <CRM />
    </PrivateRoute>
  );