import React, { useState } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SignIn from './sign-in';
import SignUp from './sign-up';
import CRMHeader from './common/Header';

const CRM = () => {
    const [view, setView] = useState("");
    const handlePage = (val) => {
        setView(val);
    }
    const handleSideBar = () => {
        let sideBar = document.getElementById("wrapper");
        sideBar.classList.toggle('toggled');
    }
    return (
        <div>
            <div id="wrapper">

                <aside id="sidebar-wrapper" >
                    <div className="sidebar-brand">
                        <h2>LY3LEY</h2>
                    </div>
                    <ul className="sidebar-nav">
                        <li className={view === "" && "active"}>
                            <a href="#" className='d-flex align-items-center ps-3' onClick={() => handlePage("")}>
                                <DashboardIcon />
                                <span className=''> Home</span>
                            </a>
                        </li>
                        <li className={view === "Brand" && "active"}>
                            <a href="#" className="d-flex align-items-center ps-3" onClick={() => handlePage("Brand")}>
                                <DashboardIcon />
                                <span className=''>Brand</span>
                            </a>
                        </li>
                        <li className={view === "Service" && "active"}>
                            <a href="#" className="d-flex align-items-center ps-3" onClick={() => handlePage("Service")}>
                                <DashboardIcon />
                                <span className=''>Service</span>
                            </a>
                        </li>
                    </ul>
                </aside>

                <div id="navbar-wrapper">
                    <nav className="navbar navbar-inverse">
                        <div className="container-fluid">
                            <div className='w-100 ps-3 pe-3 d-flex justify-content-between'>
                                <div>
                            <button  className="border border-2 rounded-2" type="button" onClick={handleSideBar}
                            >
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            </div>
                             <CRMHeader />
                            </div>
                        </div>
                        {/* <div class="container-fluid">
                            <div class="navbar-header">
                                <a href="#" class="navbar-brand" id="sidebar-toggle"><i class="fa fa-bars"></i></a>
                            </div>
                        </div> */}
                    </nav>
                </div>
                <section id="content-wrapper">
                    <div className="row">
                        <div className="col-lg-12">
                            {view === "Brand" ? <SignIn /> : view === "Service" ?
                                <SignUp /> : ""}
                        </div>
                    </div>
                </section>
            </div>

        </div>
    )
}

export default CRM