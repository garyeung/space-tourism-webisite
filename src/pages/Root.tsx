import Navigation from "@/components/combinations/Navigation";
import Background, { BackgroundProps } from "@/components/bases/Background";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { appConfig } from "@/app.config";


const Root = () => {
    const [background, setBackground] = useState<BackgroundProps>(appConfig.home.background)
    const location = useLocation();

    useEffect(() =>{
        const currentPath = location.pathname;
        const configKey = Object.keys(appConfig).find(key => {
          return appConfig[key as keyof typeof appConfig].path === currentPath;
        }) 

        if(configKey) {
          setBackground(appConfig[configKey as keyof typeof appConfig].background);
        }
    },[location.pathname])

    
    return (
        <div className="relative min-h-screen flex flex-col">
          <Background {...background} />
          <header className="p-6 md:p-0 lg:pt-10">
            <Navigation/>
          </header>
          <main>
            <Outlet />
          </main>
        </div>
    )
}

export default Root;