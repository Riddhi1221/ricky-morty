import React from 'react'
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import Content from '../component/Content';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';

const About = () => {
  return (
    <div>
        <Navbar/>
        <Box sx={{width:{xs:'80%',sm:'70%',lg:'50%'},margin:'auto',padding:'50px 0px'}}>
                <Typography sx={{fontSize:'30px',fontWeight:'800'}}>About</Typography>
                <Box>
                        <Content question="What is this?" answer="The Rick and Morty API is a REST(ish) and GraphQL API based on the television show . You will have access to about hundreds of characters, images, locations and episodes. The Rick and Morty API is filled with canonical information as seen on the TV show." />

                        <Content question="Who are you?" answer='We are Axel Fuhrmann, a guy who likes to develop things and Talita, the "Rick and Morty data scientist" and hardcore fan.'/>

                        <Content question="Why did you build this?" answer="Because we were really interested in the idea of writing an open source project and also because Rick and Morty is our favorite show at that moment, so why not?"/>

                        <Content question="Technical stuff?" answer="The entire project is hosted on Digital Ocean and Netlify. GraphQL cache is handled through Stellate. We use Node and MongoDB to serve the API."/>

                        <Content question="How can I contribute to the project?" answer="You can help us to keep the project alive and you can also contribute on GitHub."/>

                        <Content question="Copyright?" answer="Rick and Morty is created by Justin Roiland and Dan Harmon for Adult Swim. The data and images are used without claim of ownership and belong to their respective owners."/>

                </Box>
                
        </Box>
        <Footer/>
    </div>
  )
}

export default About
