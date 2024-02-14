export default function TableTab({name, selected, value, changeTab}){
    const handleClick = () => {
        changeTab(value)
    }
    return (
        <button onClick={handleClick} className={`border-t border-l border-r border-white rounded-t-md p-2 ${selected && "bg-gray-600"}`}>{name}</button>
    )
}