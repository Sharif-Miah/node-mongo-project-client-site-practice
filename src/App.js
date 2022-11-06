
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './componet/Home/Home';
import Users from './componet/Users/Users';
import Main from './layout/Main';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main />,
      children: [
        {
          path: '/home',
          element: <Home />
        },
        {
          path: '/users',
          element: <Users />
        }
      ]
    }
  ])

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
