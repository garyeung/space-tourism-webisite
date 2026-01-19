import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import Root from '@/components/combinations/Root';
import Home from '@/pages/Home';
import { appConfig } from '@/app.config';
import Destination from '@/pages/Destination';
import { fetchData, IData } from '@/services/fetchData';
import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState<IData|null>(null);

  useEffect(() => {
    const fetching = async () => {
      const response = await fetchData()
      setData(response);
    }
    fetching();
  }, [])

  if (!data) {
    return <div>Loading...</div>
  }
  
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root/>,
      children: [
        {
          index: true,
          element: <Home title={appConfig.home.title} subTitle={appConfig.home.subtitle} description={appConfig.home.description}/>,
        },
        {
          path: appConfig.destination.path,
          element: <Destination destinations={data.destinations} /> 
        }
      ]
    }
  ])

  return (
    <RouterProvider router={router}/>
  )
}

export default App
