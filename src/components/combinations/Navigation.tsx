import { useState } from "react"
import Logo from "@/components/bases/Logo"
import IconHambuger from "@/assets/shared/icon-hamburger.svg?react"
import IconClose from "@/assets/shared/icon-close.svg?react"
import NavLinks from "@/components/combinations/NavLinks"

const Navigation = () => {
    const [open, setOpen] = useState(false);

    const toggleMenu = () => setOpen((pre) => !pre);

    return (
        <nav>
            <div>
                <Logo/>
            </div>
            <div className="md:hidden" id="mobile-menu">
                <button 
                onClick={toggleMenu}
                aria-label="Toggle menu"
                aria-expanded={open}
                aria-controls="mobile-menu"
                ><IconHambuger /></button>
                <div className={`${open? "block fixed z-10": "hidden"}`}>
                    <button onClick={toggleMenu} aria-label="Toggle menu"
                    aria-expanded={open}
                    aria-controls="mobile-menu"
                    ><IconClose /></button>
                    <div>
                        <NavLinks/> 
                    </div>
                </div>
            </div>
            <div className="hidden md:block">
                <NavLinks/>
            </div>
        </nav>
    )
}

export default Navigation;