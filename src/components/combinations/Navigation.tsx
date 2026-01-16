import { useState } from "react"
import Logo from "@/components/bases/Logo"
import IconHambuger from "@/assets/shared/icon-hamburger.svg?react"
import IconClose from "@/assets/shared/icon-close.svg?react"
import NavLinks from "@/components/combinations/NavLinks"

const Navigation = () => {
    const [open, setOpen] = useState(false);

    const toggleMenu = () => setOpen((pre) => !pre);

    return (
        <nav className="flex justify-between items-center">
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
                <div className={`${open? "translate-x-0": "translate-x-full"} 
                fixed z-10
                w-full h-full top-0 right-0
                transition-transform
                duration-300
                `}>
                    <div className="
                    flex 
                    flex-col 
                    gap-y-12
                    w-3/4 
                    h-full 
                    blur-bg
                    ms-auto
                    items-start
                    pl-8
                    ">
                      <div className="p-8 w-full">
                        <button 
                        className="block ms-auto"
                        onClick={toggleMenu} aria-label="Toggle menu"
                        aria-expanded={open}
                        aria-controls="mobile-menu"
                        ><IconClose /></button>
                      </div>
                      <div className="w-full">
                          <NavLinks/> 
                      </div>
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