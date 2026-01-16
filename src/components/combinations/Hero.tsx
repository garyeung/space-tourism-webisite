interface HeroProps {
    subtitle: string,
    title: string,
    descrition: string,
    children: React.ReactNode
}
const Hero = (props:HeroProps) => {

    return (
        <section>
            <article className="text-blue-300 text-center">
              <p className="font-barlow text-base tracking-[15%] uppercase">{props.subtitle}</p>
              <h1 className="text-white">{props.title}</h1>
              <p>{props.descrition}</p>
            </article>
            <div>
                {props.children}
            </div>
        </section>
    )
}

export default Hero;