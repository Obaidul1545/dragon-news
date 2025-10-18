import { createBrowserRouter } from 'react-router';
import HomeLayouts from '../layouts/HomeLayouts';
import Home from '../Pages/Home';
import CategoryNews from '../Pages/CategoryNews';

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
]);

export default router;
