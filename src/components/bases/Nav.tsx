import { NavLink } from "react-router-dom"

export interface NavProps {
    path: string,
    label: string,
    number: number
}

const Nav = ({path, label, number}: NavProps) => {
    return (
        <NavLink to={path} className={
            ({isActive})=> ` 
                inline-block
                text-base
                font-barlow
                tracking-[2px]
                text-white
                uppercase 
                h-full
                w-full
                border-white
                hover:border-opacity-50
                border-r-4
                md:border-r-0
                md:border-b-4
                md:h-24
                content-center
                duration-500
                transition-color
                ${isActive? "border-opacity-100": "border-opacity-0"}
                `
        }>
        <span className="tracking-[2.7px] font-bold pr-3">{number.toString().padStart(2, "0")}</span>    
        {label}
        </NavLink>
    )
}

export default Nav;