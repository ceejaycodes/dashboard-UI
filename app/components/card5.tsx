import { Box, Card, CardContent, Typography } from '@mui/material';
import Image from 'next/image';
import Cart from '../../public/images/cart.svg';
import React from 'react';

type Props = {}

const Card5 = (props: Props) => {
  return (
    <Card sx={{mt:{xs:"2rem", md:"0.2rem"},width:{xs:'38rem', md:"24rem", lg:"29rem", xl:"46rem"}, ml:{md:"1rem"}}} className='card5'>
        <CardContent>   
        <Box sx={{display: "flex", gap: {xs:"19rem",md:"10rem", lg:"12rem", xl: "29rem"}}}>
            <span style={{ borderRadius: "7px",padding: "8px", backgroundColor: "#fff7ed"}} >
                <Image src={Cart} alt={""}/>
            </span>
            <span>
                <select style={{ marginTop:"14px", color: "#BEC0CA", border: 'none'}} name="cars" id="cars">
                    <option value="volvo">This Week</option>
                    <option value="saab">Saab</option>
                    <option value="opel">Opel</option>
                    <option value="audi">Audi</option>
                </select>
            </span>
          </Box>

          <Box sx={{display: "flex",  gap: {xs:"13.5rem", md:"5.4rem", xl: "18rem"}}} className='card12'>
            <Typography sx={{fontSize:{xs:"1.5rem"}, color:'red'}}>Abandoned Cart</Typography>
            <Typography sx={{fontSize:{xs:"1.5rem"}}}>Customers</Typography>
          </Box>

          <Box sx={{gap:{xs:"19rem", md:"9.6rem", xl:"23rem"}}} className='card13'>
            <Typography sx={{fontSize:{xs:"1.5rem"}}}>20%</Typography> <Typography sx={{ marginTop: {xs: "0.7rem", md:"0.5rem"}, marginLeft: {xs:"-18rem", md:"-9rem", xl:"-22rem"},color: "green"}} >+0.00%</Typography>
            <Typography sx={{fontSize:{xs:"1.5rem"}}}>30</Typography>
            
          </Box>
            
        </CardContent>
    </Card>
  )
}

export default Card5;