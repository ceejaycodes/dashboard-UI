import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Image from 'next/image';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import dashcard1img from '../../public/images/dashcard1img.svg'
import { fontSize } from '@mui/system';


  
  export default function DashCard() {
    return (
      <Card sx={{width:{xs:'34rem', md:"38rem"}, height:{xs:"18rem"}, mb:{xs:"1.2rem"}}}  className='card1'>
        <CardContent>
          <span className='card11'>
            <span style={{ borderRadius: "7px",padding: "8px", backgroundColor: "#eaedfd"}} >
                <Image src={dashcard1img} alt={""}/>
            </span>
            <span>
                <select style={{ marginTop:"14px", color: "#BEC0CA", border: 'none'}} name="cars" id="cars">
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="opel">Opel</option>
                    <option value="audi">Audi</option>
                </select>
            </span>
          </span>

          <span className='card12'>
            <p>Sales</p>
            <p style={{marginLeft:"16.5rem"}}>Volume</p>
          </span>

          <span className='card13'>
            <p>₦4,000,000.00</p>
            <p>450</p>
            <p style={{ marginTop: "1rem", marginLeft: "-5.3rem",color: "green", fontSize:"1rem"}} >+20.00%</p>
          </span>
        </CardContent>
      </Card>
    );
  }