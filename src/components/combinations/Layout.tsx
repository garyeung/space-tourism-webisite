import Navigation from "@/components/combinations/Navigation";
import Background, { BackgroundProps } from "@/components/bases/Background";

interface Props {
    backgroundImages: BackgroundProps
    children: React.ReactNode,

}


const Layout = ({
  backgroundImages,
  children,
}: Props) => {

    
    return (
        <div className="relative min-h-screen">
          <Background {...backgroundImages} />
          <header>
            <Navigation/>
          </header>
          <main>
            {children}
          </main>
        </div>
    )
}

export default Layout;