interface HeroProps {
    subtitle: string,
    title: string,
    descrition: string,
    children: React.ReactNode
}
const Hero = (props:HeroProps) => {

    return (
        <section className="grid grid-rows-[auto,1fr]">
            <article className="text-blue-300 text-center">
              <p className="font-barlow text-base uppercase tracking-[15%]">{props.subtitle}</p>
              <h1 className="
                font-bellefair
              text-white
                text-[80px]
                uppercase
              ">{props.title}</h1>
              <p className="
                font-barlow
                text-[15px]
                leading-[1.8]
              "
              >{props.descrition}</p>
            </article>
            <div className="m-auto">
                {props.children}
            </div>
        </section>
    )
}

export default Hero;