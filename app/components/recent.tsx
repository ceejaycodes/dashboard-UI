import * as React from 'react';

import Divider from '@mui/material/Divider';
import Image from 'next/image';
import Biphone from '../../public/images/blackiphone.png';

import { Card } from '@mui/material';


type Props = {}

const Recent: React.FC = (props: Props) => {
  return (
      <Card sx={{width:{xs:'34rem', md: "43.5rem"}}} className='ordercard'>
          <p style={{marginTop: "13px", marginLeft: "9px", fontSize:"12px" }}>Recent Orders</p>
        <div className='orders'>
            <div><Image src={Biphone} alt ={""}/></div>
            <div>
                <span><p>Iphone 13</p></span>
                <span><p>₦730,000,000.00 x 1</p></span>
            </div>
            <div>

            <span><p>12 Sept 2022</p></span>
            <span><p>Pending</p></span>

            </div>
        </div>
    <Divider />
        <div className='orders'>
            <div><Image src={Biphone} alt ={""}/></div>
            <div>
                <span><p>Iphone 13</p></span>
                <span><p>₦730,000,000.00 x 1</p></span>
            </div>
            <div>

            <span><p>12 Sept 2022</p></span>
            <span><p>Pending</p></span>

            </div>
        </div>
    <Divider />
        <div className='orders'>
            <div><Image src={Biphone} alt ={""}/></div>
            <div>
                <span><p>Iphone 13</p></span>
                <span><p>₦730,000,000.00 x 1</p></span>
            </div>
            <div>

            <span><p>12 Sept 2022</p></span>
            <span><p>Pending</p></span>

            </div>
        </div>
    <Divider />
        <div className='orders'>
            <div><Image src={Biphone} alt ={""}/></div>
            <div>
                <span><p>Iphone 13</p></span>
                <span><p>₦730,000,000.00 x 1</p></span>
            </div>
            <div>

            <span><p>12 Sept 2022</p></span>
            <span><p>Pending</p></span>

            </div>
        </div>
    <Divider />
        <div className='orders'>
            <div><Image src={Biphone} alt ={""}/></div>
            <div>
                <span><p>Iphone 13</p></span>
                <span><p>₦730,000,000.00 x 1</p></span>
            </div>
            <div>

            <span><p>12 Sept 2022</p></span>
            <span><p>Pending</p></span>

            </div>
        </div>
    <Divider/>
        <div className='orders'>
            <div><Image src={Biphone} alt ={""}/></div>
            <div>
                <span><p>Iphone 13</p></span>
                <span><p>₦730,000,000.00 x 1</p></span>
            </div>
            <div>

            <span><p>12 Sept 2022</p></span>
            <span><p>Pending</p></span>

            </div>
        </div>
    <Divider/>
        <div className='orders'>
            <div><Image src={Biphone} alt ={""}/></div>
            <div>
                <span><p>Iphone 13</p></span>
                <span><p>₦730,000,000.00 x 1</p></span>
            </div>
            <div>

            <span><p>12 Sept 2022</p></span>
            <span><p>Pending</p></span>

            </div>
        </div>
    <Divider/>


    </Card>
   
  )
}

export default Recent;