import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Footer = () => {
  return (
    <div>
      <Box sx={{backgroundColor:'rgb(32, 35, 41)',padding:'100px 0px'}}>
            <Box sx={{display:{xs:'block',sm:'flex',lg:'flex'},textAlign:'center',gap:'20px',justifyContent:'center',color:'rgb(158, 158, 158)'}}>
                <Typography>CHARACTERS: 826</Typography>
                <Typography>LOCATIONS: 126</Typography>
                <Typography>EPISODES: 51</Typography>
            </Box>
            <Box>
                <Typography sx={{textAlign:'center',color:'rgb(158, 158, 158)'}}>SERVER STATUS</Typography>
            </Box>
            <Box>
            
            </Box>
            <Box>
                <Typography sx={{textAlign:'center',color:'rgb(158, 158, 158)'}}>❮❯ by <b>Axel Fuhrmann</b> 2024</Typography>
            </Box>
      </Box>
    </div>
  )
}

export default Footer
