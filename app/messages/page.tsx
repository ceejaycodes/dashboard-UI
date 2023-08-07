'use client';
import '../../app/styles.scss'
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
import { Poppins } from 'next/font/google';
import Graph from '../../public/images/Graph.svg';
import Headphones from '../../public/images/headphones.svg';
import Gift from '../../public/images/Gift.svg';
import Category from '../../public/images/Category.svg';
import Bag from '../../public/images/Bag.svg';
import Setting from '../../public/images/Setting.svg';
import User from '../../public/images/User.svg';
import Folder from '../../public/images/Folder.svg';
import Chat from '../../public/images/Chat.svg';
import Log from '../../public/images/logout.svg';
import { NextFont } from 'next/dist/compiled/@next/font';
import NotificationsIcon from '@mui/icons-material/Notifications';
import avatar from '../../public/images/avatar.png';






const poppins: NextFont = Poppins({
  weight: ["200","400","600"],
  subsets: ['latin'] ,
})


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

const drawerWidth = '6%';

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
      height={27}
      width={27}
      alt="Metrix Logo"
    />
   
    
    </div>

      <nav className='navbar'>
          <List>
          <ListItem  disablePadding>
          <Image className='navicn' src={Category} alt={'Dashboard'}/>
          <Link className='navli' href={"/"}></Link>
        
      </ListItem>

          <ListItem  disablePadding>
          
          <Image className='navicn' src={Bag} alt={'Orders'}/>
          
          <Link className='navli' href={"/"}></Link>
        
      </ListItem>

          <ListItem  disablePadding>

          <Image className='navicn' src={User} alt={'Customers'}/>

          <Link className='navli' href={"/"}></Link>
        
      </ListItem>

          <ListItem  disablePadding>

          <Image className='navicn' src={Folder} alt={'inventory'}/>

          <Link className='navli' href={"/"}></Link>
        
      </ListItem>
          <ListItem  disablePadding>

          <Image className='navicn'  src={Chat} alt={'chats'}/>
         
        

          <Link className='navli' href={"/"}></Link>
          
        
      </ListItem>

          <ListItem  disablePadding>

          <Image className='navicn'   src={Setting} alt={'settings'}/>

          <Link style={{fontSize: '8px'}} className='navli' href={"/"}></Link>
        
      </ListItem>
                </List>

      </nav>


      <nav className='helpnav'>
        <List className='helnavlist'>
          <ListItem sx={{paddingRight:"",backgroundColor: "#efeff0" , paddingBottom:"9px",borderRadius:"12px"}}  disablePadding>

            <Image className='navicn'   src={Headphones} alt={'support'}/>

            <Link style={{fontSize: '8px'}} className='navli' href={"/"}></Link>

        </ListItem>

        <ListItem sx={{backgroundColor: "#fff5ea" , borderRadius:"12px", paddingBottom:"9px"}}  disablePadding>

            <Image className='navicn'   src={Gift} alt={'gift'}/>

            <div className="gift-icon">

            <Link style={{fontSize: '8px'}} className='navli' href={"/"}></Link>
            </div>

        </ListItem>

        <ListItem  disablePadding>

            <Image className='navicn'   src={Log} alt={'logout'}/>

            <Link style={{fontSize: '8px'}} className='navli' href={"/"}></Link>

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

        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar className="headbar" style={{marginLeft: "75px"}}>
          {/* <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton> */}
          <span>
            <span className='headclas'>
          <Typography sx={{color: 'black'}} variant="h5" noWrap component="div">
           Dashboard    
          </Typography>

          <span style={{marginRight:"-8.9rem"}}className='secdash'>
          <select style={{padding:"12px", width:"155px" ,backgroundColor: "#fef5ea", borderRadius:"12px", border: 'none', marginTop:"-25px"}} name="cars" id="cars">
                    <option value="volvo">Nannys Shop</option>
                    <option value="saab">Saab</option>
                    <option value="opel">Opel</option>
                    <option value="audi">Audi</option>
                </select>
                <NotificationsIcon sx={{color:"#5570f1"}}/>
                <Image src={avatar} alt={"avatar"}/>
          </span>
          </span>
          <IconBreadcrumbs/>
          </span>
        </Toolbar>
      </AppBar>
      
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
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
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >

        <Toolbar />
    
         
      </Box>
    </Box>
  );
}
