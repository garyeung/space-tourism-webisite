import DisplayButton from "@/components/bases/DisplayButton"
import Hero from "@/components/combinations/Hero"

interface Props {
    title: string,
    subTitle: string,
    description: string
}

const HomePage = ({title,subTitle,description}:Props) => {

    return (
        <Hero 
            subtitle={subTitle}
            title={title}
            descrition={description}
        >
            <DisplayButton path='/destination' />
        </Hero>
    )
}

export default HomePage;