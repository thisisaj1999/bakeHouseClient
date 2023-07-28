import Home from '../../layouts/Home/Home';
import Orders from '../../layouts/Orders/Orders';
import Products from '../../layouts/Products/Products';
import Support from '../../layouts/Support/Support';
import Login from '../Login/Login'
import Dashboard from '../../layouts/Dashboard/Dashboard'
import Register from 'components/Register/Register';

export const authenticatedPaths = [
  {
    name: <Home />,
    path: '/',
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
  {
    name: <Register />,
    path: '/register',
  },
  {
    name: <Dashboard />,
    path: '/dashboard',
  },
];
