  import * as React from "react";
  import Box from "@mui/joy/Box";
  import {
    AspectRatio,
    Button,
    Card,
    CardActions,
    CardContent,
    CardOverflow,
    Chip,
    Divider,
    FormControl,
    FormLabel,
    Input,
    Link,
    Option,
    Select,
    Stack,
    Textarea,
    Typography,
  } from "@mui/joy";
  import { CardMedia } from "@mui/material";
  import { useForm } from "react-hook-form";
  import { useNavigate } from "react-router-dom";
  import {create as CreateMember} from '../context/memberUtils'
import { useAuth } from "../context/AuthContext";
import { ViewSidebar } from "@mui/icons-material";

  export default function Register({EventId}) {

    const navigate = useNavigate();
    const { user } = useAuth();
    const {
      register,
      handleSubmit,
      formState: { isSubmitting, isDirty, isValid, errors },
    } = useForm({ mode: 'onChange' });
    const onSubmit = async ({
      MemberName,
      MobileNumber,
      Email,
    }) => {
      try {
        if (isValid) {
        await CreateMember({
          MemberName,
          MobileNumber:user.phoneNumber,
          Email,
          userId: user.uid,
          EventId:"VS7ExY0IJjovzEdc48g1"
        });
        navigate('/home');
      }} catch (err) {
        console.error(err);
      }
    };
    return (
      <Box sx={{ flex: 1, width: "100%", marginTop: "3vh", padding: "5%" }}>
        <Card>
        <form onSubmit={handleSubmit(onSubmit)}>

          <Box sx={{ mb: 1 }}>
            <Typography level="title-md">Event Name</Typography>
            {/* <Typography level="body-sm">
                Customize how your ClassMaster information will apper to the networks.
              </Typography> */}
          </Box>
          <Divider />
          <div>
            <CardMedia
              component="div"
              sx={{
                pt: "56.25%",
              }}
              image="https://www.pcma.org/wp-content/uploads/2018/10/trillion-main.jpg"
            />
            </div>
            <div>
            <CardContent sx={{ flexGrow: 1 , display:"flex", flexDirection:"column", justifyContent:"center",alignItems:"center"}}>
              <Typography gutterBottom variant="h5" component="h2">
                Event Name
              </Typography>
              <Typography>Date - 10/10/2024</Typography>
              <Typography>Time - 05:00 P.M to 08:00 P.M</Typography>
              <Typography>Venue - kanchrapara</Typography>
            </CardContent>
          </div>
          <Stack
            direction="column"
            spacing={2}
            sx={{ display: { xs: "flex", md: "flex" }, my: 1 }}
          >
            <Stack direction="column" spacing={1}></Stack>
            <Stack spacing={2} sx={{ flexGrow: 1 }}>
              <Stack spacing={1}></Stack>
              <FormControl sx={{ flexGrow: 1 }}>
                <FormLabel>Name*</FormLabel>
                <Input
                  size="sm"
                  // startDecorator={<EmailRoundedIcon />}
                  placeholder="Enter your Name"
                  {...register('MemberName', { required: true })}
                />
              </FormControl>
              {/* <FormControl sx={{ flexGrow: 1 }}>
                <FormLabel>Number*</FormLabel>
                <Input
                  size="sm"
                  // startDecorator={<EmailRoundedIcon />}
                  placeholder="Eenter Number"
                  {...register('MobileNumber', { required: true })}
                />
              </FormControl> */}
              <FormControl sx={{ flexGrow: 1 }}>
                <FormLabel>Email</FormLabel>
                <Input
                  size="sm"
                  type="email"
                  minRows={3}
                  // startDecorator={<EmailRoundedIcon />}
                  placeholder="Enter Email"
                  sx={{ flexGrow: 1 }}
                  {...register('Email')}
                />
              </FormControl>
              {/* <FormControl>
                  <FormLabel>Sample</FormLabel>
                  <Select placeholder=" Select Samnple type">
                    <Option value="Yes">Yes</Option>
                    <Option value="No">No</Option>
                  </Select>
                </FormControl> */}
            </Stack>
          </Stack>
          <CardOverflow sx={{ borderTop: "1px solid", borderColor: "divider" }}>
            <CardActions sx={{ alignSelf: "flex-end", pt: 2 }}>
              <Button size="sm" variant="outlined" color="neutral">
                Cancel
              </Button>
              <Button type="submit" size="sm" variant="solid">
                Save
              </Button>
            </CardActions>
          </CardOverflow>
        </form>
        </Card>
      </Box>
    );
  }
