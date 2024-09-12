import {ReactNode, useEffect, useState } from "react";
import PageTitle from "../components/PageTitle";

interface DestItem {
    name: string,
    images: {png: string, webp: string},
    description: string,
    distance: string,
    travel: string
}

interface DestProps {
    destinantions: DestItem[],
}

function Dest(props: DestProps){

    const [destDisplay, setDestDisplay] = useState({...props.destinantions[0]});

    const handleDisplay = (name: string) => {
        const selection = props.destinantions.find((item) => item.name === name); 
        if(selection){
            setDestDisplay(selection);
        }
    };

    return( 
        <DestMain allDests={props.destinantions.map(item => item.name)}
            display={destDisplay}
            handleDisplay={handleDisplay} />
           );
}

function DestMain({display, allDests, handleDisplay}: {allDests: string[], display:DestItem, handleDisplay:(item: string) => void}){

    return(
       <div className="p-6 md:p-10 lg:py-12 lg:px-[165px]">
        <div>
          <PageTitle number={1} title={"pick your destination"} />
          <Gallery image={display.images.webp} tabList={<TabList tabNames={allDests} handleDisplay={handleDisplay} selected={display.name}/>} destName={display.name} description={display.description} distance={display.distance} travelTime={display.travel} />
        </div>
       </div> 

    );
}


interface Gallery{
    image: string,
    tabList: ReactNode,
    destName: string,
    description: string,
    distance: string,
    travelTime: string,
}
function Gallery({image,tabList,destName,description,distance,travelTime}:Gallery){
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(false);
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 500)
        return () => clearTimeout(timer);
    }, [image])

    return (
    <div className="content">
      <div className={`my-8 py-4 md:py-8`}>
        <img src={image} alt="destination" className={`w-[150px] md:w-[300px] lg:w-[480px] max-w-none m-auto transform transition-all duration-500 ${isVisible? 'opacity-100 translate-y-0': 'opacity-0 translate-y-1 lg:translate-y-3'}`}/>
      </div>
      <div className="md:py-3 md:px-[87px] lg:py-16 lg:px-12">
        <div className="flex justify-center gap-8 lg:justify-start">{tabList}</div>
        <div className="my-6 lg:my-10">
            <h1 className="text-white font-serif text-[56px] md:text-[80px] lg:text-[96px] text-center uppercase lg:text-start">{destName}</h1>
            <p className="description">{description}</p>
        </div>
        <hr className="opacity-25"/>
        <div  className="mt-6 lg:mt-10 text-center grid grid-rows-2 md:grid-rows-none md:grid-cols-2 gap-6 lg:text-start">
            <div className="">
                <h3 className="text-BLUE-300 text-preset-7 mb-3 uppercase">avg. distance</h3>
                <p className="text-preset-6 text-white uppercase">{distance}</p>
            </div>
            <div>
                <h3 className="text-BLUE-300 text-preset-7 uppercase mb-3">est. travel time</h3>
                <p className="text-preset-6 text-white uppercase">{travelTime}</p>
            </div>
        </div>
      </div>
    </div>
    );
}

function TabList({tabNames, selected, handleDisplay}:{tabNames: string[], selected: string, handleDisplay:(item:string) => void}){

    return (
        tabNames.map((item,index) => <Tab key={index+item} name={item} handleClick={handleDisplay} selected={selected} />)
    );
}

function Tab({selected, name,handleClick}:{selected: string, name: string, handleClick: (item: string)=> void}){


    return (
        <button onClick={() => handleClick(name)} className={`h-8 flex items-start border-b-[3px] font-sans text-sm md:text-base tracking-[0.15em] md:tracking-[2px] uppercase transition-colors duration-500 ${selected === name? 'border-white text-white':"border-transparent text-BLUE-300 hover:border-[rgba(255,255,255,0.5)] "}`}><span className='pl-[2px]'>{name}</span></button>
    )
}

export default Dest;