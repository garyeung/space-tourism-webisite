import DotPagination from "@/components/bases/DotPagination"
import PageLayout from "@/components/bases/PageLayout"
import ReactiveImg from "@/components/bases/ReactiveImg"
import { useState } from "react"

interface ICrew {
    name: string,
    role: string,
    bio: string,
    images: {
        png: string,
        webp: string
    }
}

interface Props {
    crews: ICrew[]
}

const Crew = ({crews}:Props) => {
    const [crew, setCrews] = useState(crews[0]);

    const handlePage = (name:string) => {
        const selection = crews.find((item) => item.name === name);
        if(selection){
            setCrews(selection);
        }
    }

    const dotPageList = (
        <ul className="flex flex-row gap-4 justify-center lg:justify-start lg:gap-10">
            {
                crews.map((item) => {
                    return (
                        <li key={item.name}>
                            <DotPagination handleClick={() => handlePage(item.name)} active={crew.name === item.name} />    
                        </li>
                    )
                })
            }
        </ul>
    )
    return (
        <PageLayout
            className="lg:justify-center"
            contentStyle="md:grid-rows-[1fr,auto] flex-1"
            number={2}
            title={"meet your crew"}
            explantion={
                <div className="flex flex-col gap-6 lg:gap-10 text-center max-w-[512px] lg:max-w-[539px]">
                    <div className="flex flex-col gap-y-6 flex-1 justify-center">
                        <div className="text-white uppercase font-bellefair pt-10 flex flex-col gap-2 md:gap-4 lg:text-left">
                            <span className="opacity-50 text-lg md:text-2xl lg:text-[32px] lg:opacity-[50.42%]">{crew.role}</span>
                            <h1 className="text-2xl md:text-[40px]
                            md:leading-normal lg:text-[56px]">{crew.name}</h1>
                        </div>
                        <div className="pb-10">
                          <p className="description
                          md:text-[18px] lg:text-left">{crew.bio}</p>

                        </div>
                    </div>
                    <div className="lg:pb-12">{dotPageList}</div>
                </div>
            }

            image={
              <div className="order-2 max-w-[539px]">
                <ReactiveImg webSrc={crew.images.webp} fallbackSrc={crew.images.png} alt={crew.name} 
                className="masking w-4/5" />
              </div>
            }
        />
    )
}

export default Crew;