interface Props {
    number: number,
    title: string,
    image: React.ReactNode,
    explantion: React.ReactNode
    contentStyle?: string,
    className?: string
}

const PageLayout = ({number, title, image, explantion, contentStyle, className}:Props) => {
    return (
        <main
        className={`
        p-6 
        flex-1 
        grid 
        md:p-10 
        lg:px-0
        lg:py-12
        ${className||""}`}
        >
          <section className="flex flex-col gap-y-6 justify-between">
              <div>
                  <h2 className="font-barlow text-base
                  text-center
                  uppercase
                  tracking-[15%]
                  lg:tracking-[4px]
                 text-white
                 md:text-left
                 md:text-xl
                 lg:text-[28px]
                 "
                  ><span className="opacity-25 pr-6 font-bold lg:tracking-[4.72px]">{number.toString().padStart(2,'0')}</span>{title} 
                  </h2>
              </div>
              <div className={`grid grid-rows-[auto,1fr] justify-items-center gap-8 md:grid-rows-2 lg:grid-rows-none lg:grid-cols-2 ${contentStyle || ''}`}>
                  {image}
                  {explantion}
              </div>
          </section>
        </main>
    )
}


export default PageLayout;