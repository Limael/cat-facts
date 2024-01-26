
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react';
import Home from './pages/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  
)
