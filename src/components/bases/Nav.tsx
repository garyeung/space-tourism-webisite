import { NavLink } from "react-router-dom"

interface Props {
    path: string,
    label: string
}

const Nav = ({path, label}: Props) => {
    return (
        <NavLink to={path} className={
            ({isActive})=> ` 
                text-base
                font-barlow
                tracking-[2px]
                text-white
                uppercase 
                h-full
                w-full
                border-white
                hover:border-opacity-50
                border-r-[3px]
                md:border-b-[3px]
                ${isActive? "border-opacity-100": "border-opacity-0"}
                `
        }>
            {label}
        </NavLink>
    )
}

export default Nav;