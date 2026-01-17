interface HomeConfig {
    subtitle: string,
    title: string,
    description: string
    background: {
        mobile: string,
        desktop: string,
        tablet: string
    } 
}

import homebackgroundMobile from "@/assets/home/background-home-mobile.jpg"
import homebackgroundDesktop from "@/assets/home/background-home-desktop.jpg"
import homebackgroundTablet from "@/assets/home/background-home-tablet.jpg"


export interface AppConfig {
    home: HomeConfig
}
export const appConfig = {
    home: {
        subtitle: "so, you want to travel to",
        title: "space",
        description: "Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!" ,
        background: {
            mobile: homebackgroundMobile,
            desktop: homebackgroundDesktop,
            tablet: homebackgroundTablet 
        } 
    }
}
