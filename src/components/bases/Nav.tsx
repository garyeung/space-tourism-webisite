import { NavLink } from "react-router-dom"

export interface NavProps {
    path: string,
    label: string
}

const Nav = ({path, label}: NavProps) => {
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
                md:border-b-4
                ${isActive? "border-opacity-100": "border-opacity-0"}
                `
        }>
            {label}
        </NavLink>
    )
}

export default Nav;