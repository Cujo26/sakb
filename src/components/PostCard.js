import React from "react"
import Image from "next/image"
import { getPostData } from "../../lib/getPostData"

export default function PostCard({ slug, title, image, blurb }) {
	return (
		<div className="card block w-full h-28 my-4 bg-white bg-opacity-10 p-2 rounded-lg">
			<a href={`/blogs/${slug}`} className="flex flex-row w-full h-full justify-between">
				<div className="p-2 flex flex-col justify-start">
					<p key={slug} className="text-l md:text-2xl text-white font-bold tracking-tighter">
						{title}
					</p>
					<p key="a" className="text-xs md:text-lg text-white text-ellipsis">
						{blurb}
					</p>
				</div>
				<div className="aspect-video">
					<Image src={"/" + image} width={600} height={600} className="object-cover h-full w-auto rounded-md"></Image>
				</div>
			</a>
		</div>
	)
}
