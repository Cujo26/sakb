import Header from "@/components/Header"
import React from "react"

export default function page() {
	return (
		<>
			<Header />
			<div className="flex mx-auto justify-center items-center w-full flex-col px-24 max-w-screen-lg">
				<h1 class="mb-2 text-6xl font-bold tracking-tighter text-white lg:text-8xl md:text-7xl">
					<span>Meetups</span>
				</h1>
				<h2 class="mb-2 mt-4 text-2xl tracking-tighter text-white text-center">
					<span>
						Meetups for various provinces are organized on Discord. We choose a date and location that works for all, so be sure to make a
						suggestion.
					</span>
				</h2>
			</div>
		</>
	)
}
