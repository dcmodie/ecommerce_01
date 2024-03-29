import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Product } from '../types';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addItem } from '../apis/cart';
import { Unstable_NumberInput as NumberInput } from '@mui/base/Unstable_NumberInput';

//could add a property in here that is only needed in the UI
export interface CartProductCardProps {
  item: Product;
  quantity: number;
}
//q: add to cart on bottom
//q: flex , or css grid
export default function CartProductCard({ cardProps }: CartProductCardProps) {
  const { item, quantity } = cardProps;
  console.log('item: ', item);
  console.log('quantity: ', quantity);
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: addItem,
    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: ['cart'] });
    },
  });
  const { id, name, image, cost, description } = item;
  return (
    <Card sx={{ width: 400 }} className="mr-6 mb-6">
      <CardContent onClick={() => console.log('ckick')}>
        <Typography>
          <img src={image} style={{ width: '50px' }} />
        </Typography>
        <Typography variant="h5" component="div">
          {name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          ${cost}.00
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          <input
            type="number"
            min="0"
            max="100"
            value={quantity}
            onChange={() => mutation.mutate(id)}
          />
        </Typography>
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
