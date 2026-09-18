import React, { useState } from 'react';
import { Fab, Popover, IconButton, Tooltip } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import { MdContentCopy } from 'react-icons/md';
import toast from 'react-hot-toast';

const GlobalHelp = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'help-popover' : undefined;

  const testAccounts = [
    { role: 'Admin', username: 'ADMIN', password: 'passadmin' },
    { role: 'Seller', username: 'SELLER', password: 'passseller' },
    { role: 'User', username: 'USER', password: 'passuser' },
  ];

  const handleCopy = (text, label) => {
    navigator.clipboard.writeText(text);
    toast.success(`${label} copied!`, {
      style: {
        fontSize: '14px',
        padding: '8px 16px',
      },
    });
  };

  return (
    <>
      <Tooltip title="Test Accounts" placement="right">
        <Fab
          color="warning" 
          aria-label="help"
          onClick={handleClick}
          className="fixed! bottom-10! left-6! z-1000!" 
        >
          {open ? <CloseIcon /> : <SupportAgentIcon fontSize="medium" />}
        </Fab>
      </Tooltip>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right', 
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        
        PaperProps={{
          className: "ml-4 -mb-4 w-80 rounded-lg shadow-lg"
        }}
      >
        
        <div className="bg-orange-500 text-white px-4 py-3 flex justify-between items-center">
          <h3 className="font-semibold text-sm flex items-center gap-1.5">
            <DeveloperModeIcon fontSize="small" /> Development Mode 
          </h3>
          <IconButton size="small" onClick={handleClose} color="inherit">
            <CloseIcon fontSize="small" />
          </IconButton>
        </div>

        <div className="p-4">
          <h4 className="font-bold text-sm mb-1 text-gray-800">
            Test Credentials
          </h4>
          <p className="text-sm text-gray-500 mb-4">
            Use these accounts to explore the different features of the application:
          </p>

          <ul className="flex flex-col">
            {testAccounts.map((account, index) => (
              <li 
                key={index} 
                
                className="flex flex-col items-start py-3 border-b border-gray-200 last:border-b-0"
              >
                <span className="font-bold text-sm text-gray-800 mb-1">
                  {account.role} Account
                </span>

                <div className="flex items-center w-full mb-1">
                  <span className="font-mono text-sm text-gray-600 grow">
                    Username: {account.username}
                  </span>
                  <Tooltip title="Copy Username">
                    <IconButton size="small" onClick={() => handleCopy(account.username, 'Username')}>
                      <MdContentCopy size={16} className="text-gray-500 hover:text-gray-800" />
                    </IconButton>
                  </Tooltip>
                </div>

                <div className="flex items-center w-full">
                  <span className="font-mono text-sm text-gray-600 grow">
                    Password: {account.password}
                  </span>
                  <Tooltip title="Copy Password">
                    <IconButton size="small" onClick={() => handleCopy(account.password, 'Password')}>
                      <MdContentCopy size={16} className="text-gray-500 hover:text-gray-800" />
                    </IconButton>
                  </Tooltip>
                </div>

              </li>
            ))}
          </ul>
        </div>
      </Popover>
    </>
  );
};

export default GlobalHelp;