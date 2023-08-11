import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import User from '../../public/images/User.svg';
import Image from 'next/image';


type Props = {}

const DashCard2 = (props: Props) => {
  return (
    <Card sx={{width:{ xs:"38rem", md:"35rem", lg:"35rem", xl: "49rem"}, height:{xs:"18rem"}, mb:{xs:"1.2rem"}}}   className='card1'>
        <CardContent>
          <Box sx={{display: "flex", gap: {xs:"20rem",md:"10rem", lg:"15rem", xl: "29rem"}}}>
            <span style={{ borderRadius: "7px",padding: "8px", backgroundColor: "#fff7ed"}} >
                <Image src={User} alt={""}/>
            </span>
            <span>
                <select style={{  marginTop:"14px", color: "#BEC0CA", border: 'none'}} name="cars" id="cars">
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="opel">Opel</option>
                    <option value="audi">Audi</option>
                </select>
            </span>
          </Box>

          <Box  sx={{display: "flex",  gap: {xs:"13.5rem", md:"5.4rem", xl: "21rem"}}} className='card12'>
            <Typography sx={{fontSize:{xs:"1.5rem"}}}>Customers</Typography>
            <Typography sx={{fontSize:{xs:"1.5rem"}}} >Active</Typography>
          </Box>

          <Box sx={{gap:{xs:"17rem", md:"10rem", xl:"23rem"}}} className='card13'>
            <Typography sx={{fontSize:{xs:"1.8rem", md: "1.2rem", xl:"2rem"}}}>1,250</Typography>
            <Typography sx={{fontSize:{xs:"1.8rem", md: "1.2rem", xl:"2rem"}}}>1,180</Typography>
            <Typography sx={{ mt: {xs:"0.8rem", md:"0.2rem", xl:"1rem"}, ml:{ xs: "-16.3rem", md:"-9.3rem", xl:"-22rem"},color: "green", fontSize:"1rem"}} >+20.00%</Typography>
           
          </Box>
        </CardContent>
      </Card>
  )
}

export default DashCard2;