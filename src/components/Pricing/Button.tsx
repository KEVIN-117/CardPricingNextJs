
export function Button({changePlain, value = 'Subscribe'}:{changePlain: any, value?: string}){
    return (
        <button className='bg-[#404040] border border-indigo-500 w-full py-4 rounded-xl px-4 hover:shadow-lg hover:shadow-indigo-500'>
            {value}
        </button>
    )
}