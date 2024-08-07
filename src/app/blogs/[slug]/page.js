// "use client"
import Head from "next/head"
import Header from "@/components/Header"
import Main from "./Main"
import Footer from "@/components/Footer"
import { getPostData } from "/lib/getPostData"

export default async function Home({ params }) {
	const postData = await getPostData(params.slug)
	return (
		<div className="text-white bg-black overflow-x-hidden flex flex-col justify-between min-h-screen">
			<Head>
				<title>SAKB</title>
			</Head>
			<Header />
			<Main data={postData} />
			<Footer />
		</div>
	)
}
