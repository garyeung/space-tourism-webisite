import Navigation, { NavigationProps } from "@/components/combinations/Navigation";
import Background, { BackgroundProps } from "@/components/bases/Background";

interface Props {
    backgroundImages: BackgroundProps
    children: React.ReactNode,
    navigationProps: NavigationProps

}


const Layout = ({
  backgroundImages,
  children,
  navigationProps
}: Props) => {

    
    return (
        <div className="relative min-h-screen">
          <Background {...backgroundImages} />
          <header>
            <Navigation {...navigationProps} />
          </header>
          <main>
            {children}
          </main>
        </div>
    )
}

export default Layout;