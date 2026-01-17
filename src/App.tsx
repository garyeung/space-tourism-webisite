import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import Root from './components/combinations/Root';
import HomePage from './pages/HomePage';
import { appConfig } from './app.config';

function App() {
    
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root/>,
      children: [
        {
          index: true,
          element: <HomePage title={appConfig.home.title} subTitle={appConfig.home.subtitle} description={appConfig.home.description}/>,
        },
      ]
    }
  ])

  return (
    <RouterProvider router={router}/>
  )
}

export default App
