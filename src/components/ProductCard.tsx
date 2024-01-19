import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Product } from '../utilities/Types';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addItem } from '../apis/cart';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

//could add a property in here that is only needed in the UI
export interface ProductCardProps {
  item: Product;
}
//q: add to cart on bottom
//q: flex , or css grid
export default function ProductCard({ item }: ProductCardProps) {
  //console.log('hello ', id, name, cost, image);
  const queryClient = useQueryClient();
  // const { refetch } = useQuery({
  //   queryKey: ['cart'],
  //   queryFn: fetchCart,
  //   enabled: false,
  // });
  const mutation = useMutation({
    mutationFn: addItem,
    onSuccess: async () => {
      //refetch();
      // queryClient.invalidateQueries({ queryKey: ['cart'] });
    },
  });
  const { id, name, image, cost, description } = item;
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
          onClick={() => mutation.mutate(id)}
        >
          Add To Cart
        </Button>
      </CardActions>
    </Card>
  );
}
