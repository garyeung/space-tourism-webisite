import { NavLink } from "react-router-dom"

interface Props {
    path: string,
}

const DisplayButton = ({path}: Props) => {

    return (
        <NavLink to={path}
        className={`
            w-36
            h-36
            md:w-[272px]
            md:h-[272px]
            rounded-full
            bg-white
            text-blue-900 
            text-center
            text-lg
            uppercase
            md:text-[32px]
            font-bellefair
            hover:text-opacity-50
            outline-[88px]
            outline-transparent
            outline-offset-0
            transition-all
            duration-500
            hover:outline-white/10]
            `}
        >
            explore
        </NavLink>
    )
}

export default DisplayButton; 
