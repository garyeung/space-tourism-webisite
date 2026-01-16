import { routes } from "@/routes"
import Nav from "../bases/Nav";

const NavLinks = () => {
    return (
        <ul className="flex flex-col md:flex-row md:gap-x-12 gap-y-8">
            {
                routes.map((route,index) => {

                const number = index.toString().padStart(2, "0");
                const label = number + " " +route.name;
                return (
                    <li key={route.path}>
                        <Nav path={route.path} label={label} />
                    </li>
                )
               
                })
            }
        </ul>
    )
}

export default NavLinks;