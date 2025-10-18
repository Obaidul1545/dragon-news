import { createBrowserRouter } from 'react-router';
import HomeLayouts from '../layouts/HomeLayouts';
import Home from '../Pages/Home';
import CategoryNews from '../Pages/CategoryNews';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import AuthLayout from '../layouts/AuthLayout';
import NewsDetailPage from '../Pages/NewsDetailPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayouts />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/category/:id',
        element: <CategoryNews />,
        loader: () => fetch('/news.json'),
      },
    ],
  },
  {
    path: '/auth',
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: '/auth/login',
        element: <Login></Login>,
      },
      {
        path: '/auth/register',
        element: <Register></Register>,
      },
    ],
  },
  {
    path: '/newsDetails/:id',
    element: <NewsDetailPage></NewsDetailPage>,
    loader: () => fetch('/news.json'),
  },
  {
    path: '/*',
    element: <h1>Error 404</h1>,
  },
]);

export default router;
