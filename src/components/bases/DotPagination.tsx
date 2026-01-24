interface Props {
    handleClick: () => void,
    active: boolean
}


const DotPagination = ({handleClick,active}:Props) => {
    return (
        <button 
        role="pagination"
        onClick={handleClick}
        className={`
            h-[10px]
            w-[10px]
            lg:h-[15px]
            lg:w-[15px]
            bg-white
            rounded-full
            duration-500
            transition-opacity
            hover:opacity-50
            ${active? "opacity-100": "opacity-[17.44%]"}
            `}
        ></button>
    )
}

export default DotPagination;