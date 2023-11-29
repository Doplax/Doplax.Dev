import { FunctionComponent } from 'react'
import { BlogPost } from "../../@types/schema";
import dayjs from "dayjs"
import { BlogCategories } from "./BlogCategories";
import Link from 'next/link';
import { BlogCover } from './BlogCover';


type BlogCardProps = {
    post: BlogPost
}


const localizedFormat = require('dayjs/plugin/localizedFormat');
dayjs.extend(localizedFormat)

const BlogCard: FunctionComponent<BlogCardProps> = ({ post }) => {
    return (

        <Link href={`/blog/${post.slug}`} className="transition duraion-300 hover:scale-105">
            {/* Desktop */}
            <div className="hidden md:flex space-y-2">
                <div className='flex items-end w-1/5 mx-10 ' >
                    <BlogCover coverUrl={post.cover} />
                </div>
                
                <div className="flex w-4/5">
                    <div className="space-y-6">

                        <div>
                            <h2 className="text-2xl font-bold leading-8 tracking-tight">
                                {post.title}

                            </h2>
                            <BlogCategories tags={post.tags} />

                        </div>
                        <h4 className='text-base  text-zinc-200'>{post.description}</h4>
                        <h4 className='text-xs font medium text-gray-400 px-2 py-1'>{dayjs(post.date).format('LL')}</h4>

                    </div>
  
                </div>
            </div >

            {/* Movile */}
            <div className="flex md:hidden flex-col rounded-xl shadow-lg overflow-hidden">
                {/* Image */}
                <div className='flex-shrink-0'>
                    <BlogCover coverUrl={post.cover}></BlogCover>
                    {/*<img src={post.cover} className=" w-full object-fit"/>*/}
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
                            <BlogCategories tags={post.tags} />
                            {/* Date */}
                            <span className='block mt-2'>
                                <h4 className='text-xs font medium text-gray-600 px-2 py-1'>{dayjs(post.date).format('LL')}</h4>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </Link >
    )

}

export { BlogCard }