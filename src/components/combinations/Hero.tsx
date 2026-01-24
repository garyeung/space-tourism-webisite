interface HeroProps {
    subtitle: string,
    title: string,
    descrition: string,
    children: React.ReactNode
}
const Hero = (props:HeroProps) => {

    return (
      <div className="
        p-6 
        flex-1 
        grid 
        md:px-10 
        md:py-32
        lg:px-0
        lg:py-32
        justify-items-center
        lg:items-end
      ">
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
              animate-fade-in-1 
              ">{props.subtitle}</p>
              <h1 className="
                font-bellefair
              text-white
                text-[80px]
                uppercase
                md:text-[144px]
                animate-fade-in-2
              ">{props.title}</h1>
              <p className="
                description 
                animate-fade-in-3
              "
              >{props.descrition}</p>
            </article>
            <div>
                {props.children}
            </div>
        </section>
      </div>
    )
}

export default Hero;