import * as React from 'react';
import { Avatar, Box, Divider, Typography } from '@mui/material';
import Image from 'next/image';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import { Key } from 'react';


 export interface singProps{
        id: any;
        src: any;
        name: String;
        price: String;
        date: String;
        status: String;
}

const Singleordercard = (props: singProps) => {
  return (
      <>
    <Box sx={{gap:{xs:"3.5rem"}}}  className='orders'>
    <Box><Avatar  src={props.src} alt ={""}/></Box>
    <Box>
        <span><Typography>{props.name}</Typography></span>
        <span><Typography>₦{props.price}</Typography></span>
    </Box>
    <Box>
    <span><Typography>{props.date}</Typography></span>
    <span>{ props.status == "Pending" ? <Typography sx={{ color:"white", padding: "0.4rem", backgroundColor:"red", borderRadius:"0.8rem"}}>{props.status}</Typography> : <Typography sx={{color:"white", padding: "0.4rem", backgroundColor:"green", borderRadius:"0.8rem"}}>{props.status}</Typography>}</span>
    </Box>
</Box>
<Divider />
</>
  )
}

export default Singleordercard;