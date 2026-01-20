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
        <ul className="flex flex-row gap-x-4 justify-center">
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
            number={2}
            title={"meet your crew"}
            explantion={
                <div className="flex flex-col gap-y-6 text-center">
                    <div className="flex flex-col gap-y-6">
                        <div className="text-white uppercase font-bellefair pt-10">
                            <span className="opacity-50 text-lg">{crew.role}</span>
                            <h1 className="text-2xl">{crew.name}</h1>
                        </div>
                        <div className="pb-10">
                          <p className="description">{crew.bio}</p>

                        </div>
                    </div>
                    <div>{dotPageList}</div>
                </div>
            }

            image={
              <div>
                <ReactiveImg webSrc={crew.images.webp} fallbackSrc={crew.images.png} alt={crew.name} 
                className="masking w-4/5" />
              </div>
            }

            className="flex-col-reverse"
        />
    )
}

export default Crew;