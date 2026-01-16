import DisplayButton from "@/components/bases/DisplayButton"
import Hero from "@/components/combinations/Hero"
import Layout from "@/components/combinations/Layout"

interface Props {
    backgroundDesktop: string,
    backgroundMobile: string,
    backgroundTablet: string
    title: string,
    subTitle: string,
    description: string
}

const HomePage = ({backgroundDesktop,backgroundMobile,backgroundTablet,title,subTitle,description}:Props) => {

    return (
        <Layout
        backgroundImages={{
            desktop: backgroundDesktop,
            mobile: backgroundMobile,
            tablet: backgroundTablet
        }}
        >
            <Hero 
                subtitle={subTitle}
                title={title}
                descrition={description}
            >
                <DisplayButton path='/destination' />
            </Hero>
        </Layout>
    )
}

export default HomePage;