import Home from '../../layouts/Home';
import Orders from '../../layouts/Orders';
import Products from '../../layouts/Products';
import Support from '../../layouts/Support';
import Login from '../../layouts/Login'

export const authenticatedPaths = [
  {
    name: <Home />,
    path: '/home',
  },
  {
    name: <Orders />,
    path: '/orders',
  },
  {
    name: <Products />,
    path: '/products',
  },
  {
    name: <Support />,
    path: '/support',
  },
  {
    name: <Login />,
    path: '/login',
  },
];
