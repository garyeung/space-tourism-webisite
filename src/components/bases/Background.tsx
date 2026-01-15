export interface BackgroundProps {
    mobileImg: string,
    tabletImg: string,
    desktopImg: string
}


const Background = ({mobileImg,tabletImg,desktopImg}: BackgroundProps) => {

    return (
        <picture aria-label="background">
            <source srcSet={tabletImg} media="(min-width: 768px)" />
            <source srcSet={desktopImg} media="(min-width: 1024px)" />            
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