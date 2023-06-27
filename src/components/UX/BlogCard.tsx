import {FunctionComponent} from 'react'
import { BlogPost } from "../../@types/schema";
import dayjs from "dayjs"
import { BlogCover } from "../../components/UX/BlogCover";
import { BlogCategories } from "../../components/UX/BlogCategories";
import Link from 'next/link';


type BlogCardProps = {
    post: BlogPost
}


const localizedFormat = require('dayjs/plugin/localizedFormat');
dayjs.extend(localizedFormat)

const BlogCard: FunctionComponent<BlogCardProps> = ({post}) => {
    return (
        //<Link href={`/post/${post.slug}`}>
            <Link href={`/blog/${post.slug}`} className="transition duraion-300 hover:scale-105">
                <div className="flex flex-col rounded-xl shadow-lg overflow-hidden">
                    {/* Image */}
                    <div className='flex-shrink-0'>
                        <BlogCover cover={post.cover} customClass=" w-full object-fit"/>
                    </div>

                    {/* Text*/}
                    <div className='flex-1 bg-gray-50 pt-2 pb-6 px-4 flex flex-col justify-between'>
                        <div className="flex-1"> 
                            
                            {/* Title */}
                            <span className='block mt-2'>
                                <h4 className='text-base font-bold text-gray-600'>{post.title}</h4>
                            </span>
                            {/* Dscription */}
                            <span className='block mt-2'>
                                <h4 className='text-xs font medium text-gray-600'>{post.description}</h4>
                            </span>
                            
                            <div className='flex justify-between'>
                                <BlogCategories tags={post.tags}/>
                                {/* Date */}
                                <span className='block mt-2'>
                                    <h4 className='text-xs font medium text-gray-600 px-2 py-1'>{dayjs(post.date).format('LL')}</h4>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        //</Link>

    )

}

export {BlogCard}