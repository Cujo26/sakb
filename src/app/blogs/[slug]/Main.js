import { getPostNames, getPostData } from "/lib/getPostData"
import PostCard from "@/components/PostCard"
import SAKBMarkdown from "@/components/SAKBMarkdown"
export default async function Main({ data }) {
	const post = data.data
	return (
		<section className="text-black body-font lg:pt-20 mb-auto">
			<div className="flex mx-auto justify-center items-center w-full flex-col px-24 max-w-screen-lg">
				<h1 className="mb-2 text-6xl font-bold tracking-tighter text-white lg:text-8xl md:text-7xl">
					<span>{post.title}</span>
				</h1>

				<div className="flex justify-start items-start w-full text-white">
					<SAKBMarkdown markdown={data.content} />
				</div>
			</div>
		</section>
	)
}

