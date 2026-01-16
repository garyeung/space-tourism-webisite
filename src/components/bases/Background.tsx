export interface BackgroundProps {
    mobile: string,   // Path to mobile image (PNG/JPG)
    tablet: string,    // Path to tablet image (PNG/JPG)
    desktop: string    // Path to desktop image (PNG/JPG)
}


const Background = ({mobile: mobileImg,tablet: tabletImg,desktop: desktopImg}: BackgroundProps) => {

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