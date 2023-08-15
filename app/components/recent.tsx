import * as React from 'react';


import Divider from '@mui/material/Divider';
import Image from 'next/image';
import Biphone from '../../public/images/blackiphone.png';

import { Box, Card, Typography } from '@mui/material';


type Props = {
  
}

const Recent: React.FC = (props: Props) => {
  return (
    <Card className='ordercard' sx={{ width: {xs:"38rem", md:"42rem", lg:"34rem", xl: "60rem" }}} >
          <p style={{marginTop: "13px", marginLeft: "9px", fontSize:"2rem" }}>Recent Orders</p>
        <Box  className='orders'>
            <div><Image src={Biphone} alt ={""}/></div>
            <div>
                <span><Typography>Iphone 13</Typography></span>
                <span><Typography>₦730,000,000.00 x 1</Typography></span>
            </div>
            <div>
            <span><Typography>12 Sept 2022</Typography></span>
            <span><Typography>Pending</Typography></span>

            </div>
        </Box>
    <Divider />
        <Box  className='orders'>
            <div><Image src={Biphone} alt ={""}/></div>
            <div>
                <span><Typography>Iphone 13</Typography></span>
                <span><Typography>₦730,000,000.00 x 1</Typography></span>
            </div>
            <div>
            <span><Typography>12 Sept 2022</Typography></span>
            <span><Typography>Pending</Typography></span>

            </div>
        </Box>
    <Divider />
        <Box  className='orders'>
            <div><Image src={Biphone} alt ={""}/></div>
            <div>
                <span><Typography>Iphone 13</Typography></span>
                <span><Typography>₦730,000,000.00 x 1</Typography></span>
            </div>
            <div>
            <span><Typography>12 Sept 2022</Typography></span>
            <span><Typography>Pending</Typography></span>

            </div>
        </Box>
    <Divider />
        <Box  className='orders'>
            <div><Image src={Biphone} alt ={""}/></div>
            <div>
                <span><Typography>Iphone 13</Typography></span>
                <span><Typography>₦730,000,000.00 x 1</Typography></span>
            </div>
            <div>
            <span><Typography>12 Sept 2022</Typography></span>
            <span><Typography>Pending</Typography></span>

            </div>
        </Box>
    <Divider />
        <Box  className='orders'>
            <div><Image src={Biphone} alt ={""}/></div>
            <div>
                <span><Typography>Iphone 13</Typography></span>
                <span><Typography>₦730,000,000.00 x 1</Typography></span>
            </div>
            <div>
            <span><Typography>12 Sept 2022</Typography></span>
            <span><Typography>Pending</Typography></span>

            </div>
        </Box>
    <Divider />
       

    </Card>
   
  )
}

export default Recent;