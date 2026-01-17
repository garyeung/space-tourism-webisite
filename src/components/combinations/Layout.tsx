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
        <div className="relative min-h-screen flex flex-col">
          <Background {...backgroundImages} />
          <header className="p-6">
            <Navigation/>
          </header>
          <main className="p-6 flex-1 grid">
            {children}
          </main>
        </div>
    )
}

export default Layout;