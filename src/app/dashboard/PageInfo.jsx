export default function PageInfo({title, children}){
    return(
        <div className="relative w-full flex flex-col px-[50px] py-[30px] sidebar-height overflow-scroll">
            <h1 className='text-white text-4xl mb-4'>{title}</h1>
            {children}
        </div>
    )
}