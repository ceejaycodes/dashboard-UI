import { Box, Card, CardContent, Typography } from '@mui/material';
import React from 'react';
import Image from 'next/image';
import Folder1 from '../../public/images/Folder1.svg'; 

type Props = {} 

const Card4: React.FC = (props: Props) => {
  return (
    <Card sx={{mt:{xs:"2rem", md:"0.2rem"},width:{xs:'38rem', md:"24rem", lg:"29rem", xl:"46rem"}, ml:{md:"1rem"}}} className='card4'>
        <CardContent>

         <Box sx={{display: "flex", gap: {xs:"2rem",md:"10rem", lg:"15rem", xl: "29rem"}}}>
            <span style={{ borderRadius: "7px",padding: "8px", backgroundColor: "#7087f3"}} >
                <Image src={Folder1} alt={""}/>
            </span>
         
          </Box>

          <Box sx={{display: "flex",  gap: {xs:"13.5rem", md:"3.4rem", lg:"5.5rem", xl: "19rem"}}} className='card12'>
            <Typography sx={{fontSize:{xs:"1.5rem"}}}>All Products</Typography>
            <Typography sx={{fontSize:{xs:"1.5rem"},marginLeft:"4.5rem"}}>Active</Typography>
          </Box>

          <Box sx={{gap:{xs:"17rem", md:"10rem", lg: "9rem", xl:"23rem"}}} className='card13'>
            <Typography sx={{fontSize:{xs:"1.5rem"}}}>45</Typography>
            <Typography  sx={{fontSize:{xs:"1.5rem"}, ml:{xs:"8rem",md:"4rem", lg:"7rem"}}}>32</Typography>
            <Typography  sx={{ marginTop: "0.3rem", ml: {xs:"-16.5rem",  md:"-9.5rem", lg:"-9.3rem", xl:"-22rem"},color: "white", fontSize:"12px"}} >+24%</Typography>
          </Box>
            
        </CardContent>
    </Card>
  )
}

export default Card4;