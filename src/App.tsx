import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { Provider } from './context/Books.tsx';
import Routes from './Routes.tsx';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import './App.css';
import { ShoppingCartProvider } from './context/ShoppingCartContext.tsx';
const queryClient = new QueryClient();
const App = () => {
  return (
    <Provider>
      <ShoppingCartProvider>
        <QueryClientProvider client={queryClient}>
          <Routes />
        </QueryClientProvider>
      </ShoppingCartProvider>
    </Provider>
  );
};

export default App;

// TODO break it up, maybe Routes.tsx, but def break up components
