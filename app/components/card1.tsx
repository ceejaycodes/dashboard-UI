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
      <Card sx={{width:{ xs:"38rem", md:"35rem", lg:"35rem", xl: "49rem" }, height:{xs:"18rem"}, mb:{xs:"1.2rem"}}}  className='card1'>
        <CardContent>
          <Box sx={{display: "flex", gap: {xs:"20rem",md:"10rem", lg:"15rem", xl: "29rem"}}}>
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
          </Box>

          <Box className="card12" sx={{display: "flex",  gap: {xs:"17.5rem", md:"9rem", lg:"13rem",xl: "24rem"}}}>
            <Typography sx={{fontSize:{xs:"1.5rem"}}}>Sales</Typography>
            <Typography sx={{fontSize:{xs:"1.5rem", }}}>Volume</Typography>
          </Box>

          <Box className='card13' sx={{gap:{xs:"10rem", md:"5rem", lg:"11rem", xl:"15rem"}}}>
            <Typography sx={{fontSize:{xs:"1.8rem", md: "1.2rem", lg: "1rem", xl:"2rem"}}}>₦4,000,000.00</Typography>
            <Typography sx={{fontSize:{xs:"1.8rem", md: "1.2rem", xl:"2rem"}}}>450</Typography>
            <Typography sx={{ mt: {xs:"0.7rem", md:"0.2rem", lg: "0.5rem", xl:"1rem"}, ml:{ xs: "-9.3rem", md:"-4.3rem", xl:"-14rem"},color: "green", fontSize:"0.7rem"}} >+20.00%</Typography>
          </Box>
        </CardContent>
      </Card>
    );
  }