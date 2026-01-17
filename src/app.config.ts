interface BaseConfig {
    path: string,
    background: {
        mobile: string,
        desktop: string,
        tablet: string
    } 
}

interface HomeConfig extends BaseConfig{
    subtitle: string,
    title: string,
    description: string
}


import homebackgroundMobile from "@/assets/home/background-home-mobile.jpg"
import homebackgroundDesktop from "@/assets/home/background-home-desktop.jpg"
import homebackgroundTablet from "@/assets/home/background-home-tablet.jpg"

import destinationbackgroundMobile from "@/assets/destination/background-destination-mobile.jpg"
import destinationbackgroundDesktop from "@/assets/destination/background-destination-desktop.jpg"
import destinationbackgroundTablet from "@/assets/destination/background-destination-tablet.jpg"

import crewbackgroundMobile from "@/assets/crew/background-crew-mobile.jpg"
import crewbackgroundDesktop from "@/assets/crew/background-crew-desktop.jpg"
import crewbackgroundTablet from "@/assets/crew/background-crew-tablet.jpg"

import technologybackgroundMobile from "@/assets/technology/background-technology-mobile.jpg"
import technologybackgroundDesktop from "@/assets/technology/background-technology-desktop.jpg"
import technologybackgroundTablet from "@/assets/technology/background-technology-tablet.jpg"

export interface AppConfig {
    home: HomeConfig,
    destination: BaseConfig,
    crew: BaseConfig,
    technology: BaseConfig
}

export const appConfig:AppConfig = {
    home: {
        path: "/",
        subtitle: "so, you want to travel to",
        title: "space",
        description: "Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!" ,
        background: {
            mobile: homebackgroundMobile,
            desktop: homebackgroundDesktop,
            tablet: homebackgroundTablet 
        } 
    },
    destination: {
        path: "/destination",
        background: {
            mobile: destinationbackgroundMobile,
            desktop: destinationbackgroundDesktop,
            tablet: destinationbackgroundTablet 
        } 
    },
    crew: {
        path: "/crew",
        background: {
            mobile: crewbackgroundMobile,
            desktop: crewbackgroundDesktop,
            tablet: crewbackgroundTablet 
        } 
    },
    technology: {
        path: "/technology",
        background: {
            mobile: technologybackgroundMobile,
            desktop: technologybackgroundDesktop,
            tablet: technologybackgroundTablet 
        } 
    }
}
