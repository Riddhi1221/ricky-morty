import React from 'react';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';

const Support_us = () => {
  return (
    <div>
      <Navbar/>
            <Box sx={{width:{xs:'70%',sx:'80%',sm:'70%',lg:'50%'},margin:'auto',padding:'80px 0px'}}>
                    <Typography sx={{fontSize:'28px',fontWeight:'800',padding:'0px 0px 16px 0px'}}>Support The Rick and Morty API</Typography>
                    <Typography sx={{fontSize:'15px'}}>Help to maintain The Rick and Morty API's infrastructure!</Typography>
                    <Typography sx={{fontSize:'15px',color:'#000000CC', padding:'12px 0px'}}>If you are using the API for your app, your online tutorials or your coding challenges, please consider supporting us to help keep the project alive.</Typography>
                    <Typography sx={{fontSize:'15px',color:'#000000CC', padding:'12px 0px'}}>We are not getting any money from this and we use our free time to keep the API running and the data up to date. Every contribution, however big or small, is super valuable for our future.</Typography>
                    <Typography sx={{fontSize:'15px',color:'#000000CC', padding:'12px 0px'}}>Thanks!</Typography>

                    <Box sx={{display:'flex',width:'300px',gap:'20px',margin:'auto'}}>
                        <Box><img src="https://cdn.ko-fi.com/cdn/kofi3.png?v=3" alt="" /></Box>
                        <Box><img src="https://cdn.buymeacoffee.com/buttons/v2/default-orange.png" alt="" /></Box>
                    </Box>
            </Box>
      <Footer/>
    </div>
  )
}

export default Support_us
