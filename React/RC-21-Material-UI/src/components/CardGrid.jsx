import { Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

const CardGrid = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  return (
    <Container sx={{marginTop:4}}>
      <Typography variant="h4" align="center" color="error">CARDS & GRID</Typography>
      <Grid container spacing={2}>
        {products.map((a)=>{
            return <Grid item xs={6} md={4} key={a.id}>
          <Card sx={{ maxWidth: 400, height:450 }}>
            <CardMedia
              sx={{ height: 200, width:350 }}
              image={a.images[0]}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {a.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
               {a.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" variant="contained">Share</Button>
              <Button size="small" variant="contained" color="error">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
        })}
        
      </Grid>
    </Container>
  );
};

export default CardGrid;
