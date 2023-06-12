
//@ts-ignore
const BlogCategories = ({tags}) => {

    return (
        <span className='block mt-2 space-x-4'>
            {
                
                //@ts-ignore
                tags.map(tag => (
                    <span key={tag.id} className='bg-green-300 text-green-800 px-2 py-1 text-xs rounded-lg'>
                        {tag.name}
                    </span>
                ))
            }
        </span>
    )
}


export {BlogCategories}