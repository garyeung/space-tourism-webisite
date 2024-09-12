function PageTitle({number,title}:{number:number, title:string})
{
    return (
        <h2 className="mb-6 text-center text-white tracking-[0.15em] font-sans uppercase md:text-xl md:text-left md:text-[28px]"><span className="pr-6 font-bold opacity-25 lg:tracking-[4.72px]">{number.toString().padStart(2,'0')}</span><span  className="lg:tracking-[4px]">{title}
</span></h2>
    );
}

export default PageTitle;