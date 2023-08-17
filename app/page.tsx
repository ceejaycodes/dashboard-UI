'use client';
import '../app/styles.scss';
import Image from 'next/image';
import * as React from 'react';
import Link from "next/link";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import GrainIcon from '@mui/icons-material/Grain';
import DashCard from './components/card1';
import { Poppins } from 'next/font/google';
import Graph from '../public/images/Graph.svg';
import Headphones from '../public/images/headphones.svg';
import Gift from '../public/images/Gift.svg';
import Category from '../public/images/Category.svg';
import Bag from '../public/images/Bag.svg';
import Setting from '../public/images/Setting.svg';
import User from '../public/images/User.svg';
import Folder from '../public/images/Folder.svg';
import Chat from '../public/images/Chat.svg';
import Log from '../public/images/logout.svg';
import { NextFont } from 'next/dist/compiled/@next/font';
import Card from './components/card1';
import DashCard2 from './components/card2';
import DashCard3 from './components/card3';
import Bottomchart from './components/bottomchart';
import Piechart from './components/piechart';
import Card4 from './components/card4';
import Card5 from './components/card5';
import Recent from './components/recent';
import NotificationsIcon from '@mui/icons-material/Notifications';
import avatar from '../public/images/avatar.png';



const poppins: NextFont = Poppins({
    weight: ["200","400","600"],
    subsets: ['latin'] ,
})




// function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
//   event.preventDefault();
//   console.info('You clicked a breadcrumb.');
// }


const IconBreadcrumbs: React.FC = ()=> {
  return (
    <div  className='breadcrumb' role="presentation" >
      <Breadcrumbs aria-label="breadcrumb">
        <Link
         
          color="inherit"
          href="/"
        >
          <HomeIcon sx={{ mr: 0.5, color: "#5570f1"}} fontSize="inherit"  />
        </Link>
        <Link
        
          color="inherit"
          href="/messages"
        >
          Conversations
        </Link>
      </Breadcrumbs>
    </div>
  );
}






interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

export default function ResponsiveDrawer(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div className='drawer'>
    
    <div className='logo-cl'>
    <Image
      priority
      src={Graph}
      height={74}
      width={34}
      alt="Metrix Logo"
    />
   
    <span><h3 className={poppins.className}>Metrix</h3></span>
    </div>

      <nav className='navbar'>
          <List>
          <ListItem  disablePadding>
          <Image className='navicn' src={Category} alt={'Dashboard'}/>
          <Link  className='navli' href={"/"}><ListItemText primary="Dashboard" /></Link>
        
      </ListItem>

          <ListItem  disablePadding>
          
          <Image className='navicn' src={Bag} alt={'Orders'}/>
          
          <Link  className='navli' href={"/"}><ListItemText primary="Orders" /></Link>
        
      </ListItem>

          <ListItem  disablePadding>

          <Image className='navicn' src={User} alt={'Customers'}/>

          <Link className='navli' href={"/"}><ListItemText primary="Customers" /></Link>
        
      </ListItem>

          <ListItem  disablePadding>

          <Image className='navicn' src={Folder} alt={'inventory'}/>

          <Link className='navli' href={"/"}><ListItemText primary="Inventory" /></Link>
        
      </ListItem>
          <ListItem  disablePadding>

          <Image className='navicn'  src={Chat} alt={'chats'}/>

          <Link className='navli' href={"/"}><ListItemText primary="Conversations" /></Link>
        
      </ListItem>

          <ListItem  disablePadding>

          <Image className='navicn'   src={Setting} alt={'settings'}/>

          <Link style={{fontSize: '8px'}} className='navli' href={"/"}><ListItemText primary="Settings" /></Link>
        
      </ListItem>
                </List>

      </nav>


      <nav className='helpnav'>
        <List sx={{mt:{lg:"24rem", xl: "37rem"}}} className='helnavlist'>
          <ListItem sx={{backgroundColor: "#efeff0" , height:"3rem", width:"25rem", borderRadius:"3rem", paddingBottom:"3rem", paddingTop:"2rem"}}  disablePadding>

            <Image className='navicn'   src={Headphones} alt={'support'}/>

            <Link style={{fontSize: '1rem'}} className='navli' href={"/"}><ListItemText primary="Contact Support" /></Link>

        </ListItem>

        <ListItem sx={{backgroundColor: "#fff5ea" , height:"7.3rem", width:"25.2rem", borderRadius:"12px", paddingBottom:"3.9rem"}}  disablePadding>

            <Image className='navicn'   src={Gift} alt={'gift'}/>

            <div className="gift-icon">

            <Link style={{fontSize: '8px'}} className='navli' href={"/"}><ListItemText primary="Free Gift Awaits You!" /></Link>

            <p>Upgrade Your Account</p>
            </div>

        </ListItem>

        <ListItem  disablePadding>

            <Image className='navicn'   src={Log} alt={'logout'}/>

            <Link className='navli' href={"/"}><ListItemText primary="Logout" /></Link>

        </ListItem>

          </List>

      </nav>

    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex'}}>
      <CssBaseline />
      <AppBar
        elevation={0}
        position="fixed"
      >
        <Toolbar className="headbar" sx={{ml: { md:"22rem",lg: '29.2rem', xl: '29rem' }}}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{  color: 'black', display: { xs: 'block', md: 'none' } }}
          >
            <MenuIcon sx={{width: '3.8rem', height: '3.2rem'}} />
          </IconButton>
          <span>
            <span className='headclas'>
          <Typography sx={{display:{xs: 'none', md:'block'}, color: 'black'}} variant="h5" noWrap component="h3">
           Dashboard    
          </Typography>


          <Box sx={{ml : {xs: '5rem',sm: '1rem',  md : '34.5rem', lg: '53.2rem', xl: '117.5rem'}}}>
          <span className='secdash'>
          <select style={{ marginTop: '0.5rem', height:"2.8rem" , width:"9.5rem", fontSize: '1.2rem',backgroundColor: "#fef5ea", border: 'none'}} name="cars" id="cars">
                    <option value="volvo">Nannys Shop</option>
                    <option value="saab">Saab</option>
                    <option value="opel">Opel</option>
                    <option value="audi">Audi</option>
                </select>
                <NotificationsIcon fontSize="large" sx={{marginTop:"1rem",color:"#5570f1", marginLeft:"1rem", marginRight:"1rem"}}/>
                <Image src={avatar} alt={"avatar"}/>
          </span>
          </Box>
          </span>
          <IconBreadcrumbs/>
          </span>
        </Toolbar>
      </AppBar>
      
      <Box
        component="nav"
        sx={{ width: { sm: "28rem" } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: "30.2rem" },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', md: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: { sm:"20.2rem", md:"22rem", lg:"30rem",} },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ mt: '2rem', width: { xs:"40rem", md:"78rem", lg:"96rem", xl: "157rem" }, ml:{xs:"1.5rem", sm:"25rem", md:"22rem", lg:"30rem", xl: "32rem"}}}
        // sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidthlg})` } }}
      >

        <Toolbar />
    
          <div className='section1'>
            <DashCard />
            <DashCard2/>
            <DashCard3/>
          </div>

          <div className='section2'>
            <div className='sec2div1'>
              <div className='sec2div1box1'>
                <div>
                  <Piechart/>
                </div>
                <div className='spaninbox'>
                  <span><Card4/></span>
                  <span><Card5/></span>
                </div>
              </div>

              <div className='sec2div1box2'>
                {/* <Bottomchart/> */}
              </div>

              </div> 
{/*  */}
             <div className='sec2div2'>
              <Recent/>
            </div>
          </div>
      </Box>
    </Box>
  );
}
