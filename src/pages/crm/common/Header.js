import React from 'react'
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';
import InfoIcon from '@mui/icons-material/Info';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const CRMHeader = () => {
  return (
    <div>
      <div className="d-flex align-items-center p-2">
        <div className="px-2 ">
      <InfoIcon fontSize='large' />
      </div>
      <div className="px-2">
      <NotificationsIcon fontSize='large' />
      </div>
      <div className="px-2">
      <AccountCircleIcon fontSize='large' />
      </div>
      <div className="px-2">
      <SettingsIcon fontSize='large' />
      </div>
      </div>
      </div>
  )
}

export default CRMHeader