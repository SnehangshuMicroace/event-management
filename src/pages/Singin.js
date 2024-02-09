import * as React from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Checkbox from '@mui/joy/Checkbox';
import Divider from '@mui/joy/Divider';
import FormControl from '@mui/joy/FormControl';
import FormLabel, { formLabelClasses } from '@mui/joy/FormLabel';
import Link from '@mui/joy/Link';
import Input from '@mui/joy/Input';
import Stack from '@mui/joy/Stack';

import PhoneAuth from '../components/PhoneAuth'
// import GoogleIcon from '../components/GoogleIcon';
import AppleIcon from '@mui/icons-material/Apple';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

// import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '../context/AuthContext';
import Typography from '@mui/joy/Typography';

export default function Singin() {

  return (
    <Box
      component="main"
      sx={{
        mt: 'auto',
        py: 2,
        pb: 5,
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        width: 400,
        maxWidth: '100%',
        mx: 'auto',
        borderRadius: 'sm',
        '& form': {
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
        },
        [`& .${formLabelClasses.asterisk}`]: {
          visibility: 'hidden',
        },
      }}
    >
      <Box sx={{ mb: 2 , padding:"7%"}}>
        <Typography sx={(theme) => ({
          textTransform: 'uppercase',
          fontFamily: 'Josefin Sans'
        })} level="h1">
          <br /> Book <br />your  <br />tickets  <br />now <br />
        </Typography>
      </Box>
      <div style={{padding:"7%"}}>
      <PhoneAuth />
      </div>
      {/* <Divider
        sx={(theme) => ({
          [theme.getColorSchemeSelector('light')]: {
            color: { xs: '#ddd', md: 'text.tertiary' },
            '--Divider-lineColor': {
              xs: '#eee',
              md: 'var(--joy-palette-divider)',
            },
          },
        })}
      >
        or
      </Divider>
      <Stack gap={4} sx={{ my: 2 }}>
        <Button
          variant="soft"
          color="neutral"
          fullWidth
          // startDecorator={<GoogleIcon />}
        >
          Continue with Google
        </Button>
        <Button
          variant="soft"
          color="neutral"
          invertedColors
          fullWidth
          startDecorator={<AppleIcon sx={{ width: '1.4em', height: '1.4em' }} />}
        >
          Continue with Apple
        </Button>
      </Stack> */}


    </Box>
  );
}