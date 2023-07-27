import {React,useState} from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard';
import CRMHeader from './Header';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import AttributionIcon from '@mui/icons-material/Attribution';
import SupportIcon from '@mui/icons-material/Support';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import InventoryIcon from '@mui/icons-material/Inventory';
import PersonIcon from '@mui/icons-material/Person';
import Brand from '../brand';
import Service from '../service';
import Customer from '../customer';
import Inventry from '../inventry';
import Account from '../account';
import Setting from '../setting';
import Support from '../support';
import Dashboard from '../dashboard';
import Complaint from '../complaint';
import Link from 'next/link';

const Sidebar = () => {
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
            <div clas id="wrapper">

                <aside  id="sidebar-wrapper" >
                    <div className="sidebar-brand">
                        <h2>LY3LEY</h2>

                    </div>
                    <ul className="sidebar-nav ">
                        <li >
                        <div className="d-flex anchor align-items-center ps-3">
                                <DashboardIcon />
                                <Link href="/crm/dashboard" className='text-decoration-none sidenav-link'>Dashboard</Link>

                                </div>
                        </li>
                        <li>
                            <div className="d-flex anchor align-items-center ps-3">
                                <AttributionIcon />
                                <Link href="/crm/brand" className='text-decoration-none sidenav-link'>Brand</Link>
                            </div>
                        </li>
                        <li>
                        <div className="d-flex anchor align-items-center ps-3">
                                <PersonIcon />
                               <Link href="/crm/customer" className='text-decoration-none sidenav-link'> Customer</Link>
                            </div>
                        </li>
                        <li>
                        <div className="d-flex anchor align-items-center ps-3">
                                <MiscellaneousServicesIcon />
                                <Link href="/crm/complaint" className='text-decoration-none sidenav-link'>Complaint</Link>
                            </div>
                        </li>
                        <li>
                        <div className="d-flex anchor align-items-center ps-3">
                                <MiscellaneousServicesIcon />
                                <Link href="/crm/service" className='text-decoration-none sidenav-link'>Service</Link>
                            </div>
                        </li><li >
                        <div className="d-flex anchor align-items-center ps-3">
                                <InventoryIcon />
                                <Link href="/crm/inventry" className='text-decoration-none sidenav-link'>Inventory</Link>
                            </div>
                        </li><li >
                        <div className="d-flex anchor align-items-center ps-3">
                                <AccountCircleIcon />
                                <Link href="/crm/account" className='text-decoration-none sidenav-link'>Accounts</Link>
                            </div>
                        </li><li >
                        <div className="d-flex anchor align-items-center ps-3">
                                <SettingsIcon />
                                <Link href="/crm/setting" className='text-decoration-none sidenav-link'>Settings</Link>
                            </div>
                        </li><li>
                        <div className="d-flex anchor align-items-center ps-3">
                                <SupportIcon />
                                <Link href="/crm/support" className='text-decoration-none sidenav-link'>Supports </Link>
                            </div>
                        </li>
                    </ul>
                </aside>

                <div id="navbar-wrapper">
                    <nav className="navbar navbar-inverse">
                        <div className="container-fluid">
                            <div style={{ height: "55px",backgroundColor:"#15939a" }} className='w-100 align-items-center ps-3 pe-3 d-flex justify-content-between'>
                                <div>
                                    <button className="border border-2 rounded-2" type="button" onClick={handleSideBar}
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
                {/* <section id="content-wrapper">
                    <div className="row">
                        <div className="col-lg-12">
                            {view === "" ? <Dashboard /> :view === "Brand" ? <Brand /> : view === "Service" ?
                                <Service /> :view === "Complaint" ? <Complaint /> : view==="Customer"?<Customer />:view==="Inventry"?<Inventry />:view==="Accounts"?<Account />:view==="Setting"?<Setting />:view==="Support"?<Support />: ""}
                        </div>
                    </div>
                </section> */}
            </div>

        </div>
    )
}

export default Sidebar;