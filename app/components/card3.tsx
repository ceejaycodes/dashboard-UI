import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Bag from '../../public/images/Bag.svg';
import Image from 'next/image';


type Props = {}

const DashCard2 = (props: Props) => {
  return (
    <Card sx={{width:{xs:'34rem', md: "45rem"}, height:{xs:"18rem"}, mb:{xs:"1.2rem"}}}  className='card3'>
        <CardContent>
          <span className='card11'>
            <span style={{ borderRadius: "7px",padding: "8px", backgroundColor: "#fff7ed"}} >
                <Image src={Bag} alt={""}/>
            </span>
            <span>
                <select style={{ marginTop:"14px" ,color: "#BEC0CA", border: 'none'}} name="cars" id="cars">
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="opel">Opel</option>
                    <option value="audi">Audi</option>
                </select>
            </span>
          </span>

          <span className='card12'>
            <p>All Orders</p>
            <p style={{marginLeft:"5.5rem"}}>Pending</p>
            <p style={{marginLeft:"5.2rem"}}>Completed</p>
          </span>

          <span className='card13'>
            <p>450</p>
            <p style={{marginLeft:"4.1rem"}}>5</p>
            <p style={{marginLeft:"6rem"}}>445</p>
            
          </span>
        </CardContent>
      </Card>
  )
}

export default DashCard2;