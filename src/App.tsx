import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import Dest from './pages/Dest'
import data from './data.json'
import Crew from './pages/Crew';
import Tech from './pages/Tech';
import Home from './pages/Home';
import Root from './components/Root';

import bgDestMobi from './assets/destination/background-destination-mobile.jpg';
import bgDestDesk from './assets/destination/background-destination-desktop.jpg';
import bgDestTabl from './assets/destination/background-destination-tablet.jpg';

import bgHomeMobi from './assets/home/background-home-mobile.jpg';
import bgHomeDesk from './assets/home/background-home-desktop.jpg';
import bgHomeTabl from './assets/home/background-home-tablet.jpg';

import bgTechMobi from './assets/technology/background-technology-mobile.jpg';
import bgTechTabl from './assets/technology/background-technology-tablet.jpg';
import bgTechDesk from './assets/technology/background-technology-desktop.jpg';

import bgCrewMobi from './assets/crew/background-crew-mobile.jpg'
import bgCrewTabl from './assets/crew/background-crew-tablet.jpg';
import bgCrewDesk from './assets/crew/background-crew-desktop.jpg';
import { useState } from 'react';

export enum RouterName {
  Home = 'home',
  Crew = 'crew',
  Tech = 'technology',
  Dest = 'destination',

}
export interface BGImage  {
  mobile: string,
  desktop: string,
  tablet: string
}

function App() {
  const {destinations, crew, technology} = data;
    
 const allBGimage= new Map<string,BGImage>(); 
       allBGimage.set(RouterName.Home,{

      mobile: bgHomeMobi,
      tablet: bgHomeTabl,
      desktop: bgHomeDesk
       })
      allBGimage.set(RouterName.Dest, {
        mobile: bgDestMobi,
        tablet: bgDestTabl,
        desktop: bgDestDesk,

 })
     allBGimage.set(RouterName.Crew,{
      mobile: bgCrewMobi,
      tablet: bgCrewTabl,
      desktop: bgCrewDesk

     })
     allBGimage.set(RouterName.Tech,{
      mobile: bgTechMobi,
      tablet: bgTechTabl,
      desktop: bgTechDesk

     })
  const [bgImage, setBgImage] = useState(allBGimage.get(RouterName.Home)!);

  const handleBgImage = (name: string) => {
    if(allBGimage.has(name)){
           setBgImage(allBGimage.get(name)!)
    }
  }
    const links = Array.from(allBGimage.entries()).map(([key]) => ({
      path: key,
      lable: key
    }));

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root {...bgImage} handleBg={handleBgImage} links={[...links]}  />,
      children: [
        {
          index: true,
          element: <Home/>,
        },

        {
          path: RouterName.Crew,
          element: <Crew crew={[...crew]}/>
        },
        {
          path: RouterName.Dest,
          element: <Dest destinantions={[...destinations]}/>,
        },
        {
          path: RouterName.Tech,
          element: <Tech technology={[...technology]}/>,
        },
        
      ]
    }
  ])

  return (
    <RouterProvider router={router}/>
  )
}

export default App
