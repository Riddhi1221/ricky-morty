import React from 'react';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

const Content = ({question,answer,a}) => {
  return (
    <div>
        <Box sx={{padding:'20px 0px'}}>
            <Typography sx={{ fontSize:'20px',fontWeight:'800'}}>
                {question}
            </Typography>
            <Typography sx={{fontSize:'15px',color:'#000000CC', padding:'10px 0px'}}>
                {answer}
            </Typography>
            <Typography>
                {a}
            </Typography>
        </Box>
    </div>
  )
}

export default Content
