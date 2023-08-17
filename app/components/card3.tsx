import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Bag from '../../public/images/Bag.svg';
import Image from 'next/image';


type Props = {}

const DashCard2 = (props: Props) => {
  return (
    <Card sx={{ width: {xs:"38rem", md:"42rem", xl: "63rem"}, height:{xs:"18rem"}, mb:{xs:"1.2rem"}}} >
        <CardContent>
        <Box sx={{display: "flex", gap: {xs:"20rem",md:"10rem", lg:"19rem", xl: "29rem"}}}>
            <span style={{ borderRadius: "7px",padding: "8px", backgroundColor: "#fff7ed"}} >
                <Image src={Bag} alt={""}/>
            </span>
            <span>
                <select style={{ marginTop:"14px" ,color: "#BEC0CA", border: 'none'}} name="cars" id="cars">
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="opel">Opel</option>
                    <option value="audi">Audi</option>
                </select>
            </span>
          </Box>

          <Box  sx={{display: "flex",  gap: {xs:"8.5rem", md:"2.3rem", lg:"5.3rem", xl: "16rem"}}} className='card12'>
            <Typography sx={{fontSize:{xs:"1.5rem"}}}>All Orders</Typography>
            <Typography sx={{fontSize:{xs:"1.5rem"}}}>Pending</Typography>
            <Typography sx={{fontSize:{xs:"1.5rem"}}}>Completed</Typography>
          </Box>

          <Box sx={{gap:{xs:"12rem", md:"8rem", lg:"11.3rem", xl:"21rem"}}} className='card13'>
            <Typography sx={{fontSize:{xs:"1.8rem", md: "1.2rem", xl:"2rem"}}}>450</Typography>
            <Typography sx={{fontSize:{xs:"1.8rem", md: "1.2rem", xl:"2rem"}}}>5</Typography>
            <Typography sx={{fontSize:{xs:"1.8rem", md: "1.2rem", xl:"2rem"}}}>445</Typography>
            
          </Box>
        </CardContent>
      </Card>
  )
}

export default DashCard2;