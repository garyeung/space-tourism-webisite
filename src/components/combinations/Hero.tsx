interface HeroProps {
    subtitle: string,
    title: string,
    descrition: string,
    children: React.ReactNode
}
const Hero = (props:HeroProps) => {

    return (
        <section className="
        grid 
        grid-rows-[auto,1fr]
        lg:grid-cols-2
        lg:grid-rows-[1fr,auto]
        items-center
        justify-items-center
        md:items-end
        lg:items-center
        lg:justify-items-end  
        ">
            <article className="
            text-blue-300 
            text-center
            flex flex-col gap-y-6
            max-w-lg
            lg:max-w-[540px]
            m-auto
            lg:mb-0
            lg:text-left
            ">
              <p className="
              font-barlow text-base uppercase tracking-[15%]
              md:text-[28px]
              md:tracking-[4px]
              ">{props.subtitle}</p>
              <h1 className="
                font-bellefair
              text-white
                text-[80px]
                uppercase
                md:text-[144px]
              ">{props.title}</h1>
              <p className="
                font-barlow
                description 
              "
              >{props.descrition}</p>
            </article>
            <div>
                {props.children}
            </div>
        </section>
    )
}

export default Hero;