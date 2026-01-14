import { Link } from "react-router-dom"

interface Props {
    path: string,
    label: string
}

const Nav = ({path, label}: Props) => {
    return (
        <Link to={path} className="
          text-preset-8
          text-white
          uppercase 
          h-full
          w-full
          border-white
          boerder-opacity-0
          hover:border-opacity-50
          active:border-opacity-100
          border-r-[3px]
          md:border-b-[3px]
          ">
            {label}
        </Link>
    )
}

export default Nav;