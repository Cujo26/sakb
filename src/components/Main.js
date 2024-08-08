"use client"
import React, { useEffect, useState } from "react"
import Link from "next/link"

export default function Main() {
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
		<section className="text-black body-font lg:pt-20 mb-auto">
			<div className="container px-5 pt-32 mx-auto lg:px-4 lg:py-4">
				<div className="flex flex-col w-full mb-2 text-center">
					<h1 className="mb-2 text-6xl font-bold tracking-tighter text-white lg:text-8xl md:text-7xl">
						<span>SAKB</span>
					</h1>
					<br></br>
					<p className="mx-auto text-xl font-normal leading-relaxed text-gray-600 dark:text-gray-300 lg:w-2/3">
						Join the{" "}
						<Link href="https://discord.gg/VARz8sQ6Sd" className="hover:underline">
							Discord server
						</Link>
						!
					</p>
					<div className="flex flex-col w-full mb-2 text-center items-center py-4">
						<iframe
							src="https://discord.com/widget?id=783315747283795969&theme=dark"
							width="350"
							height="300"
							allowtransparency="true"
							sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
						/>
					</div>
				</div>
			</div>
		</section>
	)
}
