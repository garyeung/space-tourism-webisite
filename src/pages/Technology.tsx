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
        <ul className="flex flex-row gap-4 justify-center lg:flex-col lg:gap-8">
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
        className="lg:justify-items-end"
        contentStyle="flex-1 items-center"
        number={3}
        title={"space launch 101"}
        explantion={
        <div className="flex flex-col gap-10 justify-between max-w-[512px] lg:flex-row lg:gap-16 lg:max-w-[635px]">
            <div>
               {numPageList}
            </div>
            <div className="flex flex-col gap-4 text-center lg:gap-6 lg:text-left">
                <div className="font-bellefair text-white uppercase text-lg flex flex-col gap-4">
                    <span className="text-lg opacity-[50.42%] md:text-2xl lg:text-[32px]">this terminology...</span> 
                    <h1 className="text-2xl md:text-[40px] md:leading-normal
                    lg:text-[56px]
                    ">{technology.name}</h1>
                </div>
                <div>
                    <p className="description">{technology.description}</p>
                </div>
            </div>
        </div>
        }

        image={
        <div className="lg:order-2">
            <div className="hidden md:block lg:hidden">
                <ReactiveImg webSrc="" fallbackSrc={technology.images.landscape} alt={technology.name} 
                className="[transform:scale(1.2)]"
                />

            </div>
            <div className="md:hidden lg:block pb-8">
                <ReactiveImg webSrc="" fallbackSrc={technology.images.portrait} alt={technology.name}
                className="
                [transform:scale(1.2)] 
                [clip-path:inset(64px_0_0_0)]
                lg:[clip-path:inset(32px_0_0_0)]
                lg:pb-8
                "
                />
            </div>
        </div>
        }
        />
    )
}

export default Technology;