import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Bag from '../../public/images/Bag.svg';
import Image from 'next/image';
import { BarChart } from '@mui/x-charts/BarChart';

type Props = {}

const Bottomchart: React.FC = (props: Props) => {
  return (
    <Card sx={{mt:{xs:"2rem", md:"0.2rem"},width:{xs:'38rem', md:"48rem", lg:"58rem", xl:"92rem"}, ml:{md:"1rem"}}}  className='bottomchart'>
    <CardContent>
        <span className='summary'><Typography sx={{fontSize:{xs:"1.4rem", md:"1.5rem",lg:"1.7rem", xl:"2.5rem"},ml:{xs:"1rem", md:"-0.2rem"}}}>Summary</Typography> 
        <Box sx={{mt:{xs:"-0.7rem",md:"-0.8rem",lg:"-0.5rem",xl:"0.2rem"}}}>
         <select style={{ paddingRight:'1rem', paddingBottom:'1.2px', borderRadius:"1rem", marginLeft:"1rem" ,backgroundColor: "#eaedfd", border: 'none'}} name="cars" id="cars">
                    <option value="volvo">Sales</option>
                    <option value="saab">Saab</option>
                    <option value="opel">Opel</option>
                    <option value="audi">Audi</option>
                </select>
                </Box>

                <Box sx={{ml: {xs:"10rem", md:"21rem", lg:"30rem", xl:"60rem"}}}>
                  <select style={{  color: "black", border: 'none'}} name="cars" id="cars">
                    <option value="volvo">Last 7 Days</option>
                    <option value="saab">Saab</option>
                    <option value="opel">Opel</option>
                    <option value="audi">Audi</option>
                </select>
                </Box>
                </span>

        <BarChart
      series={[
        // { data: [3, 4, 1, 6, 5], stack: 'A', label: 'series A1' },
        // { data: [4, 3, 1, 5, 8], stack: 'A', label: 'series A2' },
        // { data: [4, 2, 5, 4, 1], stack: 'B', label: 'series B1' },
        // { data: [2, 8, 1, 3, 1], stack: 'B', label: 'series B2' },
        { data: [10, 6, 5, 8, 9, 2, 1]},
      ]}
      width={420}
      height={330}

    />
    </CardContent>
  </Card>
  )
}

export default Bottomchart;