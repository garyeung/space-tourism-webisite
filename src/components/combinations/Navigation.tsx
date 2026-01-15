import { useState } from "react"
import Logo from "@/components/bases/Logo"
import IconHambuger from "@/assets/shared/icon-hamburger.svg?react"
import IconClose from "@/assets/shared/icon-close.svg?react"
import Nav, { NavProps } from "@/components/bases/Nav"

interface Props {
    routes: NavProps[]
}

const Navigation = ({routes}: Props) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    }

    const navs = routes.map((route, index) => {
        const pre = index.toFixed(2);
        const label = pre + " " +route.label;
        return <Nav 
        key={label} 
        path={route.path} 
        label={label}
        />
    })

    return (
        <nav>
            <div>
                <Logo/>
            </div>
            <div className="md:hidden">
                <button 
                onClick={handleOpen}
                aria-label="open menu"><IconHambuger /></button>
                <div>
                    <button onClick={handleClose} aria-label="close menu"><IconClose /></button>
                    <div>
                        {navs}
                    </div>
                </div>
            </div>
            <div className="hidden md:block">
                {navs}
            </div>
        </nav>
    )
}

export default Navigation;