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
        className="lg:justify-center"
        number={1}
        title={"pick your destination"}
        explantion= {
        <div className="md:min-w-[688px] lg:min-w-[549px]">
          <div className="flex flex-col gap-6 lg:gap-10 max-w-[514px] lg:max-w-[445px] m-auto">
            <div>
                <ul className="flex flex-row gap-x-8 justify-center lg:justify-start">
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
            <div className="text-center lg:text-left flex flex-col gap-y-4">
                <h1 className="text-white text-[56px] md:text-[80px] lg:text-8xl font-bellefair uppercase">{destination.name}</h1>
                <p className="description">{destination.description}</p>
            </div>
            <Line />
            <div className="flex flex-col md:flex-row gap-6 justify-center md:justify-around lg:justify-start">
              <Statistic title="avg. distance" value={destination.distance} />
              <Statistic title="est. travel time" value={destination.travel} />
            </div>
          </div>
        </div>
        }

        image={
          <div>
              <ReactiveImg webSrc={destination.images.webp} fallbackSrc={destination.images.png} alt={destination.name}
              className="max-w-[150px] md:max-w-[300px] lg:max-w-full lg:w-[480px]"
               />
          </div>
        }
        />
    )
}

export default Destination;