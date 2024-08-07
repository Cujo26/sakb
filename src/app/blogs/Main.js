import { getPostNames, getPostData } from "../../../lib/getPostData"
import PostCard from "@/components/PostCard"

export default async function Main() {
	const allPostsData = await getPostNames()

	return (
		<section className="text-black body-font lg:pt-20 mb-auto">
			<div className="flex mx-auto justify-center items-center w-full flex-col px-4 lg:px-24 lg:max-w-screen-lg">
				<h1 className="mb-2 text-6xl font-bold tracking-tighter text-white lg:text-8xl md:text-7xl">
					<span>Blogs</span>
				</h1>
				<h2 className="mb-4 mt-4 text-2xl tracking-tighter text-white text-center">
					<span>Chronicling the works of the community.</span>
				</h2>
				<div className="flex justify-start items-start w-full">
					{allPostsData.map(
						({ slug, title, image, blurb, on }) => on && <PostCard key={slug} slug={slug} title={title} image={image} blurb={blurb} />
					)}
				</div>
			</div>
		</section>
	)
}
