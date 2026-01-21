import { routes } from "@/routes"
import Nav from "../bases/Nav";

const NavLinks = () => {
    return (
        <ul className="flex flex-col md:flex-row md:gap-x-12 gap-y-8 md:justify-end
        ">
            {
                routes.map((route,index) => {

                const number = index;
                const label = route.name;
                return (
                    <li key={route.path}>
                        <Nav path={route.path} label={label} 
                        number={number}
                        />
                    </li>
                )
               
                })
            }
        </ul>
    )
}

export default NavLinks;