import Head from "next/head"
import Header from "../components/Header"
import Main from "../components/Main"
import Footer from "../components/Footer"

export default function Home() {
	return (
		<div className="text-white bg-black overflow-x-hidden flex flex-col justify-between min-h-screen">
			<Head>
				<title>SAKB</title>
			</Head>
			<Header />
			<Main />
			<Footer />
		</div>
	)
}
