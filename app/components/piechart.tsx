import { Card, CardContent } from '@mui/material';
import React from 'react';
import Image from'next/image';
// import Piecharts from '../../public/piecharts.svg';
import Graphical from '../../public/images/Graphical.svg'

type Props = {}

const Piechart = (props: Props) => {
  return (
    <Card sx={{ height:{xs:"37.3rem"},width:{xs:'34rem', md:"38rem"}}} className='piechar'>
        <CardContent>
        <span className='summary'><p style={{fontSize:"1.7rem",marginLeft:"1rem"}}>Marketing</p> 
        
                <select style={{ fontSize:"1.5rem",marginLeft:"12rem", color: "#BEC0CA", border: 'none'}} name="cars" id="cars">
                    <option value="volvo">This Week</option>
                    <option value="saab">Saab</option>
                    <option value="opel">Opel</option>
                    <option value="audi">Audi</option>
                </select>
                </span>

                <span className='pietexts'>
                    <p>Acquisition</p>
                    <p>Purchase</p>
                    <p>Rentention</p>
                </span>


                <span style={{marginLeft:"41px"}}>
                    <Image src={Graphical} alt={"piechart"}/>
                </span>



        </CardContent>
    </Card>
  )
}

export default Piechart;