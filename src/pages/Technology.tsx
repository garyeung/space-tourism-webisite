import NumPagination from "@/components/bases/NumPagination"
import PageLayout from "@/components/bases/PageLayout"
import ReactiveImg from "@/components/bases/ReactiveImg"
import { useState } from "react"

interface ITechnology {
    name: string,
    images: {
        portrait: string,
        landscape: string
    },
    description: string
}

interface Props {
    technologies: ITechnology[]
}


const Technology = ({technologies}:Props) => {
    const [technology, setTechnology] = useState(technologies[0]);

    const handlePage = (name:string) => {
        const selection = technologies.find((item) => item.name === name);
        if(selection){
            setTechnology(selection);
        }
    }

    const numPageList = (
        <ul className="flex flex-row gap-x-4 justify-center">
            {
                technologies.map((item, index) => {
                    return (
                        <li key={item.name}>
                            <NumPagination handleClick={() => handlePage(item.name)} active={technology.name === item.name} 
                            num={index+1}
                            />



                        </li>)
                    })
            }
        </ul>
    )


    return (
        <PageLayout 
        number={3}
        title={"space launch 101"}
        explantion={
        <div className="flex flex-col gap-y-10">
            <div>
               {numPageList}
            </div>
            <div className="flex flex-col gap-y-4 text-center">
                <div className="font-bellefair text-white uppercase text-lg flex flex-col gap-y-4">
                    <span className="text-lg opacity-[50.42%]">this terminology...</span> 
                    <h1 className="text-2xl">{technology.name}</h1>
                </div>
                <div>
                    <p className="description">{technology.description}</p>
                </div>
            </div>
        </div>
        }

        image={
        <div>
            <div className="hidden md:block lg:hidden">
                <ReactiveImg webSrc="" fallbackSrc={technology.images.landscape} alt={technology.name} 
                />

            </div>
            <div className="md:hidden lg:block pb-8">
                <ReactiveImg webSrc="" fallbackSrc={technology.images.portrait} alt={technology.name}
                className="
                [transform:scale(1.2)] 
                [clip-path:inset(64px_0_0_0)]"
                />
            </div>
        </div>
        }
        />
    )
}

export default Technology;