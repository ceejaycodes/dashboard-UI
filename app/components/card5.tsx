import { Card, CardContent } from '@mui/material';
import Image from 'next/image';
import Cart from '../../public/images/cart.svg';
import React from 'react';

type Props = {}

const Card5 = (props: Props) => {
  return (
    <Card sx={{width:{xs:'34rem', md:"38rem"}}} className='card5'>
        <CardContent>   
            <span className='card11'>
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
          </span>

          <span className='card12'>
            <p style={{color:'red'}}>Abandoned Cart</p>
            <p style={{marginLeft:"9.5rem"}}>Customers</p>
          </span>

          <span className='card13'>
            <p>20%</p> <p style={{ marginTop: "2px", marginLeft: "-5rem",color: "green", fontSize:"12px"}} >+0.00%</p>
            <p style={{marginLeft:"87px"}}>30</p>
            
          </span>
            
        </CardContent>
    </Card>
  )
}

export default Card5;