import React from 'react'
import {Box, Button, Container, Typography} from "@mui/material"
import SendIcon from '@mui/icons-material/Send';
import DeleteIcon from '@mui/icons-material/Delete';
const TypoButtons = () => {
  return (
    <div>
        <Container>
            <Typography variant='h3' component='h1' align='center' gutterBottom color="red" sx={{background:"#eee", mt:4, border:"1px solid red"}}>Typography Container Box Button</Typography>
            <Typography variant='button' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, delectus.</Typography>
            <Typography variant='body1' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, delectus.</Typography>
            <Typography variant='body2' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, delectus.</Typography>
        </Container>
        <Box sx={{display:"flex", flexDirection:"column", marginTop:4, gap:2}}>
        <Button variant="contained" color='error' endIcon={<SendIcon/>}>SEND</Button>
        <Button variant="outlined" color='success' endIcon={<DeleteIcon/>}>Delete</Button> 
        </Box>
    </div>
  )
}

export default TypoButtons