import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);
//this is actually a product, it may be used a lot of places, so put in types dir import as needed
//here we could extend it for this one

//move this to a types dir
export interface Product {
  id: string;
  name: string;
  cost: number;
  image: string;
  description: string;
}
//so if we had a propety in here that only needed for UI
export interface ProductCardProps {
  item: Product;
}
//q: add to cart on bottom
//q: flex , or css grid
export default function ProductCard({ item }: ProductCardProps) {
  //console.log('hello ', id, name, cost, image);
  const { name, image, cost, description } = item;
  return (
    <Card sx={{ width: 200 }} className="mr-6 mb-6">
      <CardContent onClick={() => console.log('ckick')}>
        <Typography>
          <img src={image} />
        </Typography>
        <Typography variant="h5" component="div">
          {name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          ${cost}.00
        </Typography>
        <Typography variant="body2">{description} </Typography>
      </CardContent>
      <CardActions className="relative">
        <Button
          size="small"
          color="warning"
          onClick={(e) => {
            console.log('a t c');
          }}
        >
          Add To Cart
        </Button>
      </CardActions>
    </Card>
  );
}
