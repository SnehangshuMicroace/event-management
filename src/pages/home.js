import React, { useState } from 'react';
import { Button } from '@mui/joy';
import { Box } from '@mui/joy';
import { QRCode } from 'react-qr-code'; 
import { useAuth } from '../context/AuthContext';


const Home = () => {
    const {user} = useAuth()
    const [showQRCode, setShowQRCode] = useState(false);
    console.log(user, 'currentuser');

    return (
        <Box
            sx={{
                width:'100%',
                height:'100vh',
                bgcolor: 'background.body',
                padding:'15px'
            }}
        >
            <Box>
                <h2>Check Your Tickets</h2>
                {!showQRCode && <Button onClick={() => setShowQRCode(true)}>QR Code</Button>}
                {showQRCode && (
                    <>
                        <QRCode value="52565524###" />
                        <Button onClick={() => setShowQRCode(false)}>Close QR Code</Button>
                    </>
                )}
            </Box>
        </Box>
    );
};

export default Home;
