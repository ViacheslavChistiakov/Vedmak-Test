import './App.css';
import './style/app.scss'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import FirstPage from './pages/FirstPage';
import SecondPage from './pages/SecondPage';
import store from './store/store';





function App() {

  const router = createBrowserRouter([
    {
      path: "/Vedmak-Test",
      element: <FirstPage />,
    },
    {
      path: "/form",
      element: <SecondPage />,
    },
  ]);

  return (
    <div className="App">  
      <Provider store={store}>
      <RouterProvider router={router} />
      </Provider>
    </div>
  );
}

export default App;
