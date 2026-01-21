import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import Root from '@/pages/Root';
import Home from '@/pages/Home';
import { appConfig } from '@/app.config';
import Destination from '@/pages/Destination';
import { fetchData, IData } from '@/services/fetchData';
import { useEffect, useState } from 'react';
import Crew from '@/pages/Crew';
import Technology from '@/pages/Technology';

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
        },
        {
          path: appConfig.crew.path,
          element: <Crew crews={data.crew} />
        },
        {
          path: appConfig.technology.path,
          element: <Technology technologies={data.technology} />
        }
      ]
    }
  ])

  return (
    <RouterProvider router={router}/>
  )
}

export default App
