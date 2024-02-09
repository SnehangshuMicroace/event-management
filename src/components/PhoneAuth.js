import { useState } from 'react';
import Button from '@mui/joy/Button';
import FormControl from '@mui/joy/FormControl';
import FormLabel, { formLabelClasses } from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Stack from '@mui/joy/Stack';
import Box from '@mui/joy/Box';
import FormHelperText from '@mui/joy/FormHelperText';
import PhoneIcon from '@mui/icons-material/Phone';
import Typography from '@mui/joy/Typography';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import ModalDialog from '@mui/joy/ModalDialog';
import DialogContent from '@mui/joy/DialogContent';
import AspectRatio from '@mui/joy/AspectRatio';

import { useForm } from 'react-hook-form';
import OtpInput from 'react-otp-input';
import SendToMobileIcon from '@mui/icons-material/SendToMobile';

import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function PhoneAuth() {
    const navigate = useNavigate()
  const [otp, setOtp] = useState("")
  const [otpError, setOtpError] = useState(false)
  const [loading, setLoading] = useState(false)
  const [showOTP, setShowOTP] = useState(false)
  const [confirmObj, setConfirmObj] = useState(false)
  const [countryCode, setCountryCode] = useState('+91')

  const { signInWithPhone } = useAuth()

  const {
    register,
    handleSubmit,
    setError,
    getValues,
    clearErrors,
    formState: { errors },
  } = useForm({ mode: 'onSubmit' });

  const onSubmit = async ({ phone }) => {
    setLoading(true)
    try {
      const response = await signInWithPhone(countryCode + phone)
      setConfirmObj(response)
      setShowOTP(true)
    } catch (err) {
      console.log(err)
      setError('phone', {
        type: "api",
        message: "Oops! something went wrong",
      })
    }
    setLoading(false)
    return

  }

  const verifyOtp = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await confirmObj.confirm(otp)
      navigate('/register');
        } catch (err) {
      setOtpError({
        type: "api",
        message: "Invalid OTP entered",
      })
    }
    setLoading(false)
    return
  }

  const resendOtp = (e) => {
    return onSubmit({ phone: getValues('phone') })

  }

  const closeOtp = () => {
    setShowOTP(false)
    clearErrors()
  }

  return (
    <Stack gap={4} sx={{ mt: 2 }}>
      <div id="recaptcha-container" style={{ visibility: 'hidden', overflow: 'hidden' }}></div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl required error={errors.phone}>
          <FormLabel sx={(theme) => ({
            '--FormLabel-color': theme.vars.palette.neutral.plainColor,
          })}>Phone Number</FormLabel>
          <Input
            {...register('phone', {
              required: true,
              maxLength: 10,
              pattern: /^[0-9]{10}$/
            })}
            type="tel"
            name="phone"
            size="md"
            variant="soft"
            startDecorator={
              <Button variant="soft" color="neutral" startDecorator={<PhoneIcon />}>{countryCode}</Button>
            }
          />
          {errors.phone && <FormHelperText>{errors?.phone?.message || 'Enter valid phone number'}</FormHelperText>}
        </FormControl >
        <Stack gap={4} sx={{ mt: 2 }}>
          <Button type="submit" fullWidth loading={loading}>
            Check In
          </Button>
        </Stack>
      </form>
      <Modal open={showOTP} onClose={closeOtp}>
        <ModalDialog layout="fullscreen">
          <ModalClose sx={{ zIndex: 10 }} />
          <DialogContent>
            <Box
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
              <Box sx={{ mb: 1, textAlign: 'center' }}>
                <AspectRatio
                  variant="soft"
                  ratio="1"
                  sx={{
                    m: 'auto',
                    mb: 8,
                    borderRadius: '50%',
                    width: '8rem',
                    position: 'relative',
                  }}
                >
                  <div>
                    <SendToMobileIcon color="primary" sx={{ fontSize: '4rem' }} />
                  </div>
                </AspectRatio>
                <Typography level="h4" sx={{ mb: 1 }}>
                  OTP Verification
                </Typography>
                <Typography level="body-xs">
                  Enter the OTP sent to {countryCode} {getValues('phone')}
                </Typography>
              </Box>
              <Stack gap={4} sx={{ mt: 2 }}>
                {otpError && <Typography level="body-xs" color="danger" sx={{ mx: 'auto' }}>{otpError?.message}</Typography>}

                <OtpInput
                  value={otp}
                  onChange={setOtp}
                  numInputs={6}
                  renderSeparator={false}
                  containerStyle={{ margin: '0 auto' }}
                  renderInput={(props) => <Input sx={{ mx: 1, px: 1 }} slotProps={{ input: { ...props } }} />}
                />

                <Button type="button" onClick={resendOtp} variant="plain" color="neutral">
                  Resend OTP
                </Button>
                <Button type="button" onClick={verifyOtp} fullWidth loading={loading} variant="solid" color="primary" disabled={otp.length < 6}>
                  Verify OTP
                </Button>
              </Stack>
            </Box>
          </DialogContent>
        </ModalDialog>
      </Modal>
    </Stack>
  )
}