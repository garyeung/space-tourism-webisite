interface Props {
    number: number,
    title: string,
    image: React.ReactNode,
    explantion: React.ReactNode
    className?: string
}

const PageLayout = ({number, title, image, explantion, className: contentStyle}:Props) => {
    return (
        <div
        className="
        p-6 
        flex-1 
        grid 
        md:px-10 
        md:py-32
        lg:px-0
        lg:py-32
        justify-items-center
        lg:items-end
        "
        >
          <section className="flex flex-col gap-y-6">
              <div>
                  <h2 className="font-barlow text-base
                  text-center
                  uppercase
                  tracking-[15%]
                 text-white"
                  ><span className="opacity-25 pr-6">{number.toString().padStart(2,'0')}</span> {title} 
                  </h2>
              </div>
              <div className={`flex flex-col gap-y-8 ${contentStyle || ''}`}>
                  {image}
                  {explantion}
              </div>
          </section>
        </div>
    )
}


export default PageLayout;