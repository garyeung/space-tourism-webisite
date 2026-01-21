import { useRef, useState } from "react"
import Logo from "@/components/bases/Logo"
import IconHambuger from "@/assets/shared/icon-hamburger.svg?react"
import IconClose from "@/assets/shared/icon-close.svg?react"
import NavLinks from "@/components/combinations/NavLinks"
import Line from "../bases/Line"
import { useClickOutside } from "@/utils/useClickOutside"

const Navigation = () => {
    const [open, setOpen] = useState(false);
    const closeMenuRef = useRef<HTMLDivElement>(null);
  
    useClickOutside(closeMenuRef, () => setOpen(false))

    const toggleMenu = () => setOpen((pre) => !pre);

    return (
        <nav className="grid grid-cols-[auto,1fr] justify-items-end items-center
        lg:grid-cols-2
        lg:justify-items-start
        ">
            <div className="
            w-full
            md:pl-10
            lg:pl-16
            grid
            grid-cols-[auto,1fr]
            items-center
            gap-x-8
            ">
                <Logo/>
                <div className="relative z-[2] -right-8">
                  <Line/>
                </div>
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
                    <div 
                    className="
                    flex 
                    flex-col 
                    gap-y-12
                    w-3/4 
                    h-full 
                    bg-blur
                    backdrop-blur
                    ms-auto
                    items-start
                    pl-8
                    ">
                      <div className="p-8 w-full"
                      ref={closeMenuRef}
                      >
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
            <div className="hidden md:block flex-1 w-full md:px-10 bg-white/5 backdrop-blur
            lg:px-16">
                <NavLinks/>
            </div>
        </nav>
    )
}

export default Navigation;