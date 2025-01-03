import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import {Card as MuiCard} from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';

 const Card=({img,heading,des,des1,sub_head,sub_head2})=>{
  const theme = useTheme();
  console.log();

  return (
    <MuiCard sx={{ display: 'flex',flexWrap:'wrap',gap:'20px' ,width:'450px',backgroundColor:'rgb(39, 43, 51)'}}>
      <CardMedia
        component="img"
        sx={{ width: 151,width:{xs:'100%',sm:'151px',md:'151px',lg:'151px'}}}
        image={img}
        alt="Live from space album cover"
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="" sx={{fontWeight:'800',fontSize:'25px',color:'#F5F5F5',width:'200px'}}>
            {heading}
          </Typography>
          <Typography
            variant="subtitle1"
            component="div"
            sx={{ color: 'text.secondary' , fontSize:'13px' , fontWeight:'600',color:'#FFFFFF'}}
          >
          Alive - {des}
          </Typography>
          <Typography
            variant="subtitle1"
            component="div"
            sx={{ color: 'text.secondary' , fontSize:'13px' , fontWeight:'600',paddingTop:'10px',color:'rgb(158, 158, 158)'}}
          >
          Last known Location {des1}
          </Typography>
          <Typography
            variant="subtitle1"
            component="div"
            sx={{ color: 'text.dark' , fontSize:'15px' , fontWeight:'500',lineHeight:'17px',color:'#F5F5F5'}}
          >
           {sub_head}
          </Typography>
          
          <Typography
            variant="subtitle1"
            component="div"
            sx={{ color: 'text.secondary' , fontSize:'13px' , fontWeight:'600',paddingTop:'10px',color:'rgb(158, 158, 158)'}}
          >
          First seen in: 
          </Typography>
          <Typography
            variant="subtitle1"
            component="div"
            sx={{ color: 'text.dark' , fontSize:'15px' , fontWeight:'500',lineHeight:'17px',color:'#F5F5F5'}}
          >
           {sub_head2}
          </Typography>
          
        </CardContent>
  
      </Box>
      
    </MuiCard>
  );
}

export default Card;
