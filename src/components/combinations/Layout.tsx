import Navigation, { NavigationProps } from "@/components/combinations/Navigation";
import Background, { BackgroundProps } from "../bases/Background";

interface Props {
    backgroundImages: BackgroundProps
    slot: React.ReactNode,
    navigations: NavigationProps

}


const Layout = ({
  backgroundImages,
  slot: children,
  navigations
}: Props) => {

    
    return (
        <div className="relative w-full">
          <div>
            <Background {...backgroundImages} />
          </div>
          <div 
          className="
          absolute
          w-full
          h-full
          top-0
          left-0
          ">
            <header>
              <Navigation {...navigations} />
            </header>
            <main>
              {children}
            </main>
          </div>
        </div>
    )
}

export default Layout;