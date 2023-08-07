import { Card, CardContent } from '@mui/material';
import React from 'react';
import Image from 'next/image';
import Folder1 from '../../public/images/Folder1.svg'; 

type Props = {}

const Card4: React.FC = (props: Props) => {
  return (
    <Card sx={{width:{xs:'34rem', md:"38rem"}}} className='card4'>
        <CardContent>

        <span className='card11'>
            <span style={{ borderRadius: "7px",padding: "8px", backgroundColor: "#7087f3"}} >
                <Image src={Folder1} alt={""}/>
            </span>
         
          </span>

          <span className='card12'>
            <p>All Products</p>
            <p style={{marginLeft:"9.5rem"}}>Active</p>
          </span>

          <span className='card13'>
            <p>45</p>
            <p style={{marginLeft:"11rem"}}>32</p>
            <p style={{ marginTop: "1rem", marginLeft: "-5rem",color: "white", fontSize:"12px"}} >+24%</p>
          </span>
            
        </CardContent>
    </Card>
  )
}

export default Card4;