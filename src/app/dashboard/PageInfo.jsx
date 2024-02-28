export default function PageInfo({title, children}){
    return(
        <div className="relative w-full flex flex-col px-[50px] py-[30px] sidebar-height overflow-scroll">
            <h1 className='text-4xl '>{title}</h1>
            <div class="w-full border-t border-gray-200 mt-2 mb-8"></div>
            {children}
        </div>
    )
}