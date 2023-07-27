import React, { useState } from 'react'
import Sidebar from '../common/Sidebar';
import { useRouter } from 'next/router';
import CRMHeader from '../common/Header';

const AdminLayout = ({ children }) => {
    const router=useRouter();
    const showSidebar = router.pathname.startsWith('/crm');
    return (
      <div>
        {showSidebar && <Sidebar />} {/* Render the sidebar if showSidebar is true */}
      {showSidebar ?
      <div id="wrapper">
      <section id="content-wrapper">
                    <div className="row">
                        <div className="col-lg-12">
                           {children}
                        </div>
                    </div>
                </section></div> :
        <div>
          {children} {/* Render the content of the specific page */}
        </div>}
      </div>
    );
  };

export default AdminLayout;