import { useState } from "react";
import PageTitle from "../components/PageTitle";

interface TechItem{
    name: string,
    images: {
        portrait: string,
        landscape: string,
    },
    description: string,
}

interface TechProps{
    technology: TechItem[],
}

function Tech(props: TechProps){

    const [display, setDisplay] = useState({...props.technology[0]})

    const handleDisplay = (name:string) => {
        const selection = props.technology.find((item) => item.name === name);
        if(selection){
            setDisplay(selection);
        }
    }

    return (
        <TechMain nameList={props.technology.map((item) => item.name)} handleDisplay={handleDisplay} name={display.name} images={display.images} description={display.description} />
    );
}

function TechMain(props: ContentProps){

    return (
        <div className="pt-6 pb-12 md:py-10 lg:py-12 lg:container lg:ml-auto">
            <div>
                <div className="md:mx-10 lg:mx-0">
                  <PageTitle number={3} title={"space launch 101"} />
                </div>
                <Content {...props} />
            </div>
        </div>
    );
}

interface ContentProps extends TechItem {
    nameList: string[],
    handleDisplay: (id:string) => void,

}
function Content(props:ContentProps){

    return (
        <div className="content lg:flex-row-reverse">
            <div className="">
                <Image landscape={props.images.landscape} portrait={props.images.portrait} />
            </div>
            <div className="mx-6 md:mx-10 flex flex-col lg:flex-row lg:gap-16 lg:mx-0">
                <Pagination data={props.nameList} active={props.name} handleClick={props.handleDisplay} />
                <div className='explanation lg:m-0 lg:p-0'>
                    <div className='explanation-text'>
                      <p className='explanation-rank'>{"This Terminology..."}</p>
                      <h1 className='explanation-name'>{props.name}</h1>
                    </div>
                    <div>
                        <p className='description'>{props.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );

}

function Pagination({data, active, handleClick}:{data:string[], active: string, handleClick:(id: string)=> void}){
    return (
        <ul className="flex gap-4 justify-center lg:flex-col lg:gap-8">
        {
            data.map((item, index) => <li><Dot handleClick={handleClick} active={active} id={item} num={index+1}/></li>)
        }
        </ul>
    );
}

function Dot({id,active, num, handleClick}:{
    num: number
    id: string,
    active: string,
    handleClick:(id:string) => void
}){
    return (<button className={`h-10 w-10 lg:h-20 lg:w-20 rounded-full text-lg lg:text-[32px] font-serif border border-white border-opacity-25 transition-colors duration-500 ${(active === id?'bg-white text-BLUE-900':'text-white bg-none hover:border-opacity-100')}`} onClick={() => handleClick(id)}>{num}</button>)
}

function Image({landscape, portrait}:{landscape:string, portrait:string}){
    return (
        <div className="mt-16 lg:mt-0">
            <div className="overflow-hidden md:hidden lg:block lg:w-full lg:h-[600px]">
              <img src={portrait} alt='technology' className="-mt-16 lg:m-auto h-full lg:max-w-none"/>
            </div>
            <div className="overflow-hidden hidden md:block lg:hidden">
              <img src={landscape} alt='technology' className="w-full"/>
            </div>
        </div>
    );
}

export default Tech;
