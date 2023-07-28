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
import Link from 'next/link';
import { useRouter } from 'next/router';

const Sidebar = () => {
    const router=useRouter();
    const handleSideBar = () => {
        let sideBar = document.getElementById("wrapper");
        let sideBar1 = document.getElementById("wrapper1");
        sideBar.classList.toggle('toggled');
        sideBar1.classList.toggle('toggled');
    }
    const currentPath=router.pathname;
    return (
        <div>
            <div clas id="wrapper">

                <aside  id="sidebar-wrapper" >
                    <div className="sidebar-brand">
                        <h2>LY3LEY</h2>

                    </div>
                    <ul className="sidebar-nav ">
                        <li className={currentPath.startsWith("/crm/dashboard") ? "active" : ""}>
                       
                        <Link href="/crm/dashboard" className='d-flex anchor align-items-center ps-3 text-decoration-none'>
                                <DashboardIcon />
                             Dashboard
                               </Link>

                        </li>
                        <li className={currentPath.startsWith("/crm/brand") ? "active" : ""}>
                        <Link href="/crm/brand" className='text-decoration-none d-flex anchor align-items-center ps-3'>
                                <AttributionIcon />
                                Brand
                                </Link>
                            
                        </li>
                        <li className={currentPath.startsWith("/crm/customer") ? "active" : ""}>
                        <Link href="/crm/customer" className='text-decoration-none d-flex anchor align-items-center ps-3'>
                                <PersonIcon />
                               Customer</Link>
                            
                        </li>
                        <li className={currentPath.startsWith("/crm/complaint") ? "active" : ""}>
                        <Link href="/crm/complaint" className='text-decoration-none d-flex anchor align-items-center ps-3'>
                                <MiscellaneousServicesIcon />
                                Complaint</Link>
                        
                        </li>
                        <li className={currentPath.startsWith("/crm/service") ? "active" : ""}>
                        <Link href="/crm/service" className='text-decoration-none d-flex anchor align-items-center ps-3'>
                                <MiscellaneousServicesIcon />
                        Service</Link>
                        
                        </li><li className={currentPath.startsWith("/crm/inventry") ? "active" : ""}>
                        <Link href="/crm/inventry" className='text-decoration-none d-flex anchor align-items-center ps-3'>
                                <InventoryIcon />
                            Inventory</Link>
                        
                        </li><li className={currentPath.startsWith("/crm/account") ? "active" : ""}>
                        <Link href="/crm/account" className='text-decoration-none d-flex anchor align-items-center ps-3'>
                                <AccountCircleIcon />
                        Accounts</Link>
                        
                        </li><li className={currentPath.startsWith("/crm/setting") ? "active" : ""}>
                        <Link href="/crm/setting" className='text-decoration-none d-flex anchor align-items-center ps-3'>
                                <SettingsIcon />
                        Settings</Link>
                        
                        </li><li className={currentPath.startsWith("/crm/support") ? "active" : ""}>
                        <Link href="/crm/support" className='text-decoration-none d-flex anchor align-items-center ps-3'>
                                <SupportIcon />
                        Supports </Link>
                        
                        </li>
                    </ul>
                </aside>

                <div id="navbar-wrapper">
                    <nav className="navbar navbar-inverse">
                        <div className="container-fluid">
                            <div style={{ height: "55px",backgroundColor:"black" }} className='w-100 align-items-center ps-3 pe-3 d-flex justify-content-between'>
                                <div>
                                    <button className="border border-2 rounded-2" type="button" onClick={handleSideBar}
                                    >
                                        <span className="navbar-toggler-icon"></span>
                                    </button>
                                </div>
                                <CRMHeader />
                            </div>
                        </div>
                    </nav>
                </div>
            </div>

        </div>
    )
}

export default Sidebar;