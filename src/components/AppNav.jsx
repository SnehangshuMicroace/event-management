import * as React from 'react';
import Box from '@mui/joy/Box';
import { Link } from '@mui/material';
import { Button, Typography, useColorScheme } from '@mui/joy';
import IconButton from '@mui/joy/IconButton';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import { useNavigate } from 'react-router-dom';
import { RiMenuFill } from "react-icons/ri";
 
import logo from '../assets/icons/logo.png';

function ColorSchemeToggle() {
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <IconButton
      id="toggle-mode"
      size="lg"
      variant="soft"
      color="neutral"
      onClick={() => {
        if (mode === 'light') {
          setMode('dark');
        } else {
          setMode('light');
        }
      }}
      sx={{
        zIndex: 999,
        boxShadow: 'sm',
      }}
    >
      {mode === 'light' ? <DarkModeRoundedIcon /> : <LightModeRoundedIcon />}
    </IconButton>
  );
}

export default function AppNav() {
  const [showDropDown, setShowDropDown] = React.useState(false)
  const navigate = useNavigate();

  return (
    <div className='w-full shadow'>
      <div className='flex justify-between p-4 items-center flex-row'>
        <div className='flex items-center'>
          <div className='me-4 md:hidden' onClick={()=>setShowDropDown(!showDropDown)}>
            <RiMenuFill />
          </div>
          <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
            {/* <img className='w-10 me-2' src={logo} /> */}
            <Typography variant="h6">Event Manage</Typography>
          </Box>
        </div>
        <div className='md:flex hidden items-center'>
          <Button sx={{ mx: 2 }} color="inherit" underline="none" onClick={()=>navigate('/')}>
            Home
          </Button>
          <Button sx={{ mx: 2 }} color="inherit" underline="none" onClick={()=>navigate('/album')}>
            Event
          </Button>
          <Button sx={{ mx: 2 }} color="inherit" underline="none" onClick={()=>navigate('/pricing')}>
            Pricing
          </Button>
          <Button
            onClick={() => navigate('/login')}
            variant="outlined"
            color="primary"
            href="#"
          >
            Login
          </Button>
        </div>
        <div className='flex items-center mx-2'>
          <ColorSchemeToggle />
        </div>
      </div>
      {showDropDown &&
      <div className='md:hidden'>
        <div className='w-36'>
          <div className='flex flex-col p-4'>
            <div className='py-2 shadow'>
              <Link sx={{ mx: 2 }} color="inherit" underline="none" onClick={() => navigate('/')}>
                Home
              </Link>
            </div>
            <div className='py-2 shadow'>
              <Link sx={{ mx: 2 }} color="inherit" underline="none" onClick={() => navigate('/event')} >
               Event
              </Link>
            </div>
            {/* <div className='py-2 shadow'>
              <Link sx={{ mx: 2 }} color="inherit" underline="none" href="#">
                my passes
              </Link>
            </div> */}
            <Button
              onClick={() => navigate('/login')}
              variant="outlined"
              color="primary"
              href="#"
            >
              Login
            </Button>
          </div>
        </div>
      </div>}
    </div>
  );
}
