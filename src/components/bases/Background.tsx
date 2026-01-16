export interface BackgroundProps {
    mobileImg: string,
    tabletImg: string,
    desktopImg: string
}


const Background = ({mobileImg,tabletImg,desktopImg}: BackgroundProps) => {

    return (
        <picture className="absolute inset-0 -z-10">
            <source srcSet={desktopImg} media="min-width: 1024px" />            
            <source srcSet={tabletImg} media="min-width: 768px" />
            <img src={mobileImg} alt=""
            className="
            w-full
            h-full
            object-cover
            "
            />
        </picture>
    )
}

export default Background;