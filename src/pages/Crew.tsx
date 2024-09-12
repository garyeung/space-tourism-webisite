import { useState } from 'react';
import PageTitle from '../components/PageTitle';
import Explanation from '../components/Explan';

interface CrewItem {
        name: string,
        images: {png: string, webp: string},
        role: string,
        bio: string,
}

interface CrewProps{
    crew: CrewItem[],
}

function Crew (props: CrewProps){

    const [display, setDisplay] = useState({...props.crew[0]});

    const handleDisplay = (name:string) => {
        const selection = props.crew.find((item) => item.name === name);
        if(selection){
            setDisplay(selection);
        }
    }

    return ( 
            <CrewMain crewRank={display.role} crewName={display.name} crewDescrip={display.bio} nameList={props.crew.map((item) => item.name)} crewPicture={display.images.webp} handleDisplay={handleDisplay} />)
}

function CrewMain(props: ContentProps){
    return (
    <div className='p-6 lg:p-12 container mx-auto'>
      <div>
        <PageTitle number={2} title='meet your crew'/>
        <CrewContent {...props} />
      </div>
    </div>);
}

interface ContentProps {
    crewRank: string,
    crewName: string,
    crewDescrip: string,
    nameList: string[],
    crewPicture: string,
    handleDisplay: (id: string) => void,
}

function CrewContent({crewRank,crewName,crewDescrip,nameList,handleDisplay,crewPicture}:ContentProps){
    return (
        <div className='content'>
          <div className='flex flex-col justify-between lg:max-w-[540px]'>
            <Explanation rank={crewRank} name={crewName} description={crewDescrip} /> 
            <CrewPagination data={nameList} handleClick={handleDisplay} active={crewName} />
          </div>
          <div className='w-full h-full'>
          <div className='w-[271.24px] masking md:masking-none overflow-hidden md:relative top-6 md:h-[560px] md:w-[446.74px] lg:masking lg:static lg:w-[539.28px] lg:h-[676px] flex mx-auto'>
            <img className='mt-auto mx-auto'  src={crewPicture} alt='crew picture'/> 
          </div>
          </div>
        </div>
    );
}



function CrewPagination({data, active, handleClick}:{active: string, data:string[], handleClick:(id: string) => void}){
    return (
        <ul className='flex gap-4 justify-center lg:pb-12 lg:gap-10 lg:justify-start'>
        {data.map((item ) => <li><PaginationButton id={item} handleClick={handleClick} active={active} /></li>)}
        </ul>);
}

function PaginationButton({id,active, handleClick}:{ active: string, id: string, handleClick:(id:string) => void})
{
    return(
        <button className={`w-[10px] h-[10px] lg:w-[15px] lg:h-[15px] bg-white rounded-full transition-opacity duration-500 ${active===id? 'opaciti-100': 'opacity-[17.44%] hover:opacity-50'}`} onClick={() => handleClick(id)}></button>
    );
}


export default Crew;