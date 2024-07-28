import './App.css';
import './style/app.scss'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import FirstPage from './pages/FirstPage';
import SecondPage from './pages/SecondPage';





function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <FirstPage />,
    },
    {
      path: "/form",
      element: <SecondPage />,
    },
  ]);

  return (
    <div className="App">  
          <RouterProvider router={router} />
    </div>
  );
}

export default App;
