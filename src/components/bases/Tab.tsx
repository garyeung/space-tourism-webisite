
interface Props {
    label: string,
    handleClick: () => void,
    active: boolean 

}
const Tab = ({label, handleClick, active}: Props) => {
    return (
        <button 
        onClick={handleClick}
        className={`
        text-base
        font-barlow
        tracking-[15%]
        text-blue-300
        uppercase
        border-white
        pb-[10px]
        border-b-[3px]
        hover:border-opacity-50
        ${active? "border-opacity-100": "border-opacity-0"}
        `}>
            {label}
        </button>
    )
}

export default Tab;