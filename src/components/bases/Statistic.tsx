
interface Props {
    title: string,
    value: string
}
const Statistic = ({title, value}:Props) => {
        return (
            <div className="flex flex-col gap-y-3 uppercase text-center">
                <h2 className="text-blue-300 text-sm font-barlow tracking-[2px]">{title}</h2>
                <p className="text-white text-[28px] font-bellefair">{value}</p>
            </div>
        )
}

export default Statistic;