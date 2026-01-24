import { NavLink } from "react-router-dom"

interface Props {
    path: string,
}

const DisplayButton = ({path}: Props) => {

    return (
        <NavLink to={path}
        className={`
            block
            content-center
            w-36
            h-36
            md:w-[272px]
            md:h-[272px]
            rounded-full
            bg-white
            font-bellefair
            text-blue-900 
            text-center
            text-lg
            md:text-[32px]
            uppercase
            transition-all
            duration-500
            hover:text-opacity-50
            outline
            outline-transparent
            outline-offset-0
            hover:outline-[88px]
            hover:outline-white/10
            animate-outline-pulse
            `}
        >
            explore
        </NavLink>
    )
}

export default DisplayButton; 
