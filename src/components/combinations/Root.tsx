import Navigation from "@/components/combinations/Navigation";
import Background, { BackgroundProps } from "@/components/bases/Background";
import { Outlet } from "react-router-dom";

interface Props {
    backgroundImages: BackgroundProps

}


const Root = ({
  backgroundImages,
}: Props) => {

    
    return (
        <div className="relative min-h-screen flex flex-col">
          <Background {...backgroundImages} />
          <header className="p-6">
            <Navigation/>
          </header>
          <main className="p-6 flex-1 grid">
            <Outlet />
          </main>
        </div>
    )
}

export default Root;