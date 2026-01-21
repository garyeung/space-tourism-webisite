interface Props {
    handleClick: () => void,
    active: boolean
    num: number
}


const NumPagination = ({handleClick, active, num}: Props) => {
    return (
        <button
            role="pagination"
            onClick={handleClick}
            className={`
                w-10
                h-10
                md:w-14
                md:h-14
                lg:w-20
                lg:h-20
                rounded-full
                bg-white
                border-[1px]
                border-white
                border-opacity-25
                font-bellefair
                text-2xl
                text-center
                transition-colors
                duration-500
                hover:border-opacity-100
                ${active? "bg-opacity-100 text-blue-900": "bg-opacity-0 text-white"}
                `} 
        >{num}
        </button>
    );

}

export default NumPagination;