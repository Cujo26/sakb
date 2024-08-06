import React from "react"

export default function PostCard({ slug, title, description }) {
	return (
		<div className="card block bg-gray-500 w-full h-8">
			<a href={`/blogs/${slug}`} className="block w-full h-full">
				<p key={slug} className="text-2xl text-white">
					{title}
				</p>
			</a>
		</div>
	)
}
