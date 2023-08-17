import * as React from 'react';
import data from '../orderdata.json';
import { Card, List, ListItem, Typography } from '@mui/material';
import Singleordercard, { singProps } from './singleordercard';
type Props = {
      
}

const Recent: React.FC = (props: Props) => {

    
  return (
    <Card className='ordercard' sx={{ width: {xs:"38rem", md:"42rem", lg:"34rem", xl: "60rem" }}} >
          <p style={{marginTop: "13px", marginLeft: "9px", fontSize:"2rem" }}>Recent Orders</p>
          <List>
          {data? data.map((dat:singProps)=> (<ListItem key={dat.id}  > <Singleordercard src={dat.src}  name={dat.name} price={dat.price} date={dat.date} status={dat.status} id={dat.id}/></ListItem>
           ))
           : 
          <Typography> No Data Available</Typography>}
          </List>

   
        
       

    </Card>
   
  )
}

export default Recent;