
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
          path: '/',
          element: <Home />
        },
        {
          path: '/users',
          element: <Users />,
          loader: () => fetch('http://localhost:5000/users')
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
