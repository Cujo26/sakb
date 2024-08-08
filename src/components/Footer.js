"use client"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function Footer() {
	const apiUrl = "https://discord.com/api/guilds/783315747283795969/widget.json"
	const [discordData, setDiscordData] = useState(null)

	async function fetchData() {
		try {
			const response = await fetch(apiUrl)
			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`)
			}
			const data = await response.json()
			return data
		} catch (error) {
			console.error("Error fetching data:", error)
		}
	}
	function shuffleArray(array) {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1))
			;[array[i], array[j]] = [array[j], array[i]]
		}
	}

	useEffect(() => {
		fetchData().then((data) => setDiscordData(data.members))
	}, [])
	return (
		<footer className="text-white body-font sticky bottom-0 py-8">
			<div className="discord text-white">
				{/* <marquee> */}
				<div className="flex flex-row gap-2 animate-marquee">
					{discordData &&
						discordData.map((member) => <img src={member.avatar_url} alt={member.username} className="w-6 h-6 rounded-full" />)}
				</div>
				{/* </marquee> */}
			</div>
			<div className="container px-5 mx-auto flex items-center sm:flex-row flex-col py-2">
				<Link className="flex opacity-80 title-font font-medium items-center md:justify-start justify-center" href="/">
					<span className="ml-3 text-xl">Support local</span>
				</Link>
				<span className="inline-flex sm:ml-auto gap-7 sm:mt-0 mt-4 justify-center sm:justify-start">
					<Link href="https://cookieatom.co.za/">
						<Image alt="cookie atom" src="/CookieAtom2.webp" width={300} height={300} className="h-8 w-auto"></Image>
					</Link>
					<Link href="https://www.ctrlshiftesc.co.za/">
						<Image alt="control shift escape" src="/CSEDark.webp" width={300} height={300} className="h-8 w-auto"></Image>
					</Link>
				</span>
			</div>
		</footer>
	)
}

