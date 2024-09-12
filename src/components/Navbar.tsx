import { useState } from "react";
import  IconClose from '../assets/shared/icon-close.svg';
import  IconMenu  from '../assets/shared/icon-hamburger.svg';
import  Logo from '../assets/shared/logo.svg';
import {Link} from 'react-router-dom';
import { RouterName } from "../App";


export interface NavbarProps {
    links:{path:string,lable:string}[], 
    handleBg: (lable: string) => void,

}
function Navbar({links, handleBg}: NavbarProps){

   const [opened, setOpened] = useState(false);

   const handleOpen = () => {setOpened(true)};
   const handleClose  = () => {
    setOpened(false)
   };

   const linkList = links.map((link, index) => {
        return (<div key={index+link.lable} className="md:h-24 flex items-center text-preset-8 uppercase text-white border-r-[3px] md:border-r-0 md:border-b-[3px]  border-transparent hover:border-white hover:border-opacity-50 active:border-white smooth-border" >
                 <Link className="flex gap-3 h-full w-full items-center" to={(link.lable==RouterName.Home)?'/':link.path} onClick={() => handleBg(link.lable)}>
                    <span className="font-bold">{String(index).padStart(2, "0")}</span>
                    <span className="">{" "+link.lable}</span>
                 </Link>
                </div>);
   })
    
    return(
        <nav className=" py-6 md:py-0 lg:pt-10 grid grid-flow-col lg:grid-cols-2 ">
           <div className="flex items-center md:-mr-8 z-10">
               <div className="w-fit pl-6 md:pl-10 lg:px-16">
                <img src={Logo} alt="logo" className="w-[40px] md:w-full"/>
               </div>
               <div className="hidden lg:block h-[1px] w-full bg-LOGO-LINE"></div>
           </div>

           <div className="hidden md:flex justify-end lg:justify-center gap-12 px-10 lg:px-16 bg-white bg-opacity-5 backdrop-blur">
               {linkList}
           </div>

           <div className="md:hidden pr-6 flex items-center justify-end">
            <button className="" onClick={() => handleOpen()}>
              <img src={IconMenu} alt="menu" className=""/>
            </button>
           </div>

            <div className={" md:hidden h-full w-64 right-0 fixed z-10 top-0 pl-8 flex flex-col gap-12 bg-BLUE-900 bg-opacity-15 backdrop-blur transform transition-transform duration-500 " + `${opened?'translate-x-0' : "translate-x-full"}`}>
                <div className="py-8"><button className="w-full pr-6 h-full" onClick={() => handleClose()}><img src={IconClose} alt="close"  className="float-right"/></button>
                </div>
                <div className="flex flex-col gap-8">
                    {linkList}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;