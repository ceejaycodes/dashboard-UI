import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import User from '../../public/images/User.svg';
import Image from 'next/image';


type Props = {}

const DashCard2 = (props: Props) => {
  return (
    <Card sx={{width:{xs:'34rem', md: "38rem"}, height:{xs:"18rem"}, mb:{xs:"1.2rem"}}}   className='card1'>
        <CardContent>
          <span className='card11'>
            <span style={{ borderRadius: "7px",padding: "8px", backgroundColor: "#fff7ed"}} >
                <Image src={User} alt={""}/>
            </span>
            <span>
                <select style={{  marginTop:"14px", color: "#BEC0CA", border: 'none'}} name="cars" id="cars">
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="opel">Opel</option>
                    <option value="audi">Audi</option>
                </select>
            </span>
          </span>

          <span className='card12'>
            <p>Customers</p>
            <p style={{marginLeft:"12.5rem"}}>Active</p>
          </span>

          <span className='card13'>
            <p>1,250</p>
            <p style={{marginLeft:"10.7rem"}}>1,180</p>
            <p style={{ marginTop: "0.8rem", marginLeft: "-5.5rem",color: "green", fontSize:"1rem"}} >+20.00%</p>
          </span>
        </CardContent>
      </Card>
  )
}

export default DashCard2;