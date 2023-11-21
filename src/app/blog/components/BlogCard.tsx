import { FunctionComponent } from 'react'
import { BlogCategories } from "./BlogCategories";
import { BlogPost } from "../../../@types/schema";

import Image from 'next/image';
import dayjs from "dayjs"
import Link from 'next/link';

type BlogCardProps = {
    post: BlogPost
}



const localizedFormat = require('dayjs/plugin/localizedFormat');
dayjs.extend(localizedFormat)

const BlogCard: FunctionComponent<BlogCardProps> = ({ post }) => {
    const { cover } = post
    return (
        <Link href={`/blog/${post.slug}`} className="transition duraion-300 hover:scale-105">
            <div className="flex flex-col rounded-xl shadow-lg overflow-hidden">
                {/* Image */}
                <div className='flex-shrink-0'>

                    <Image src={post.cover} width={"100"} height={"100"} className=" w-full object-fit" alt="post cover"/>
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
        </Link>
    )

}

export { BlogCard }