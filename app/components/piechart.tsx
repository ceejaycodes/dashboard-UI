import { Box, Card, CardContent, Typography } from '@mui/material';
import React from 'react';
import Image from'next/image';
import Graphical from '../../public/images/Graphical.svg';

type Props = {}

const Piechart = (props: Props) => {
  return (
    <Card sx={{ height:{xs:"30.3rem",md: "36.5rem", lg: "34.6rem", xl:"34.4rem"},width:{ xs:"38rem", md:"23rem", lg:"29rem", xl: "47rem" }}} >
        <CardContent>
        <Box sx={{mt: "1rem", display: "flex", gap: {xs:"9rem",md:"0.5rem", lg:"3rem", xl: "21rem"}}}><Typography sx={{fontSize:{xs:"1.4rem", md:"1rem"},ml:{xs:"1rem", md:"-0.2rem"}}}>Marketing</Typography> 
        
                <select style={{ fontSize:"1rem",marginLeft:"8rem", color: "#BEC0CA", border: 'none'}} name="cars" id="cars">
                    <option value="volvo">This Week</option>
                    <option value="saab">Saab</option>
                    <option value="opel">Opel</option>
                    <option value="audi">Audi</option>
                </select>
                </Box>

                <span className='pietexts'>
                    <Typography sx={{fontSize:{xs:"1.5rem"}}}>Acquisition</Typography>
                    <Typography sx={{fontSize:{xs:"1.5rem"}}}>Purchase</Typography>
                    <Typography sx={{fontSize:{xs:"1.5rem"}}}>Rentention</Typography>
                </span>


                <Box sx={{
                  mt:"5rem", display:"flex", justifyContent:"center"}}>
                    <Image height={170} src={Graphical} alt={"piechart"}/>
                </Box>



        </CardContent>
    </Card>
  )
}

export default Piechart;