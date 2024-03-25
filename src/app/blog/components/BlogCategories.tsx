import { Chip } from "@nextui-org/react"

//@ts-ignore
const BlogCategories = ({ tags }) => {

    return (
        <span className='block mt-2 space-x-4'>
            {
                //@ts-ignore
                tags.map(tag => (

                    <Chip key={tag.id} color="warning" variant="shadow">{tag.name}</Chip>

                    //<span key={tag.id} className='bg-green-300 text-green-800 px-2 py-1 text-xs rounded-lg'>
                    //    {tag.name}
                    //</span>
                ))
            }
        </span>
    )
}


export { BlogCategories }