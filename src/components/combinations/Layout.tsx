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
        <div className="">
          <Background {...backgroundImages} />
          <header>
            <Navigation {...navigations} />
          </header>
          <main>
            {children}
          </main>
        </div>
    )
}

export default Layout;