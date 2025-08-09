import React from 'react'
import { Card, CardContent } from './ui/card'
import { Badge } from "@/components/ui/badge"
import { Avatar } from './ui/avatar'
import { AvatarImage } from '@radix-ui/react-avatar'
import { FaRegCalendarAlt } from "react-icons/fa"
import usericon from '@/assets/images/user.png'
import moment from 'moment'
import { Link } from 'react-router-dom'
import { RouteBlogDetails } from '@/helpers/RouteName'

const BlogCard = ({ props }) => {
    return (
        <Link to={RouteBlogDetails(props?.category?.slug, props?.slug)}>
            <Card className="group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white">
                <div className="relative overflow-hidden">
                    <img
                        src={props.featuredImage}
                        alt={props.title}
                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {props.category && (
                        <Badge
                            variant="secondary"
                            className="absolute top-3 left-3 bg-violet-600 text-white"
                        >
                            {props.category.name}
                        </Badge>
                    )}
                </div>
                <CardContent className="p-4">
                    {/* Author & Role */}
                    <div className='flex items-center justify-between mb-3'>
                        <div className='flex items-center gap-2'>
                            <Avatar className="w-8 h-8">
                                <AvatarImage src={props.author.avatar || usericon} />
                            </Avatar>
                            <span className="text-sm font-medium">{props.author.name}</span>
                        </div>
                        {props.author.role === 'admin' && (
                            <Badge variant="outline" className="bg-violet-500 text-white">
                                Admin
                            </Badge>
                        )}
                    </div>

                    {/* Date */}
                    <p className='flex items-center gap-2 text-xs text-gray-500 mb-2'>
                        <FaRegCalendarAlt className="text-violet-500" />
                        <span>{moment(props.createdAt).format('DD-MM-YYYY')}</span>
                    </p>

                    {/* Title */}
                    <h2 className='text-lg font-bold line-clamp-2 group-hover:text-violet-600 transition-colors duration-300'>
                        {props.title}
                    </h2>
                </CardContent>
            </Card>
        </Link>
    )
}

export default BlogCard
