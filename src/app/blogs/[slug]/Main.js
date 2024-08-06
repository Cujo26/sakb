import { withRouter } from "next/navigation"
import { getPostNames, getPostData } from "/lib/getPostData"
import PostCard from "@/components/PostCard"

// export async function getStaticProps({ params }) {
// 	const postData = await getPostData(params.slug)
// 	return {
// 		props: {
// 			postData,
// 		},
// 	}
// }

async function Main({ router }) {
	const slug = router
	console.log(router)
	// const postData = await getPostData(slug)
	return (
		<section className="text-black body-font lg:pt-20 mb-auto">
			<div className="flex mx-auto justify-center items-center w-full flex-col px-24 max-w-screen-lg">
				<h1 className="mb-2 text-6xl font-bold tracking-tighter text-white lg:text-8xl md:text-7xl">
					<span>Blogs</span>
				</h1>
				<h2 className="mb-2 mt-4 text-2xl tracking-tighter text-white text-center">
					<span>Chronicling the works of the community.</span>
				</h2>
				<div className="flex justify-start items-start w-full">
					{/* {postData.map(({ slug, title }) => (
						<PostCard key={slug} slug={slug} title={title} />
					))} */}
				</div>
			</div>
		</section>
	)
}

export default withRouter(Main)

