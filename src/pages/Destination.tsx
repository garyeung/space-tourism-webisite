import Line from "@/components/bases/Line";
import PageLayout from "@/components/bases/PageLayout";
import ReactiveImg from "@/components/bases/ReactiveImg";
import Statistic from "@/components/bases/Statistic";
import Tab from "@/components/bases/Tab";
import { useState } from "react";

interface IDesctination {
    name: string,
    images: {
        png: string,
        webp: string
    },
    description: string,
    distance: string,
    travel: string

}

interface Props {
    destinations: IDesctination[]
}
const Destination = ({destinations}:Props) => {
    const [destination, setDestination] = useState(destinations[0]);

    const handleTab = (name:string) => {
        const selection = destinations.find((item) => item.name === name);
        if(selection){
            setDestination(selection);
        }
    }

 
    return (
        <PageLayout 
        number={1}
        title={"pick your destination"}
        explantion= {
          <div className="flex flex-col gap-y-6">
            <div>
                <ul className="flex flex-row gap-x-8 justify-center">
                    {
                        destinations.map((item) => {
                            return (
                                <li key={item.name}>
                                    <Tab label={item.name} handleClick={() => handleTab(item.name)} 
                                    active={destination.name === item.name}
                                        />
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            <div className="text-center">
                <h1 className="text-white text-[56px] font-bellefair uppercase">{destination.name}</h1>
                <p className="text-blue-300 text-[15px] leading-[1.8] font-barlow">{destination.description}</p>
            </div>
            <Line />
            <div className="flex flex-col gap-y-6 justify-center">
              <Statistic title="avg. distance" value={destination.distance} />
              <Statistic title="est. travel time" value={destination.travel} />
            </div>
          </div>
            
        }

        image={
          <div className="m-auto">
              <ReactiveImg webSrc={destination.images.webp} fallbackSrc={destination.images.png} alt={destination.name}
              className="w-[150px]"
               />
          </div>
        }
        />
    )
}

export default Destination;