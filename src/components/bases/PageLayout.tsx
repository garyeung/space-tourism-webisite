interface Props {
    number: number,
    title: string,
    image: React.ReactNode,
    explantion: React.ReactNode
    contentStyle?: string
}

const PageLayout = ({number, title, image, explantion, contentStyle}:Props) => {
    return (
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
    )
}


export default PageLayout;