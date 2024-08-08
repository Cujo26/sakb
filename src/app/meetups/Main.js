import Footer from "@/components/Footer"
import Header from "@/components/Header"
import React from "react"

export default function page() {
	return (
		<section className="text-black body-font lg:pt-20 mb-auto px-4 ">
			<h1 className="lg:px-24 mb-2 text-6xl font-bold tracking-tighter text-center text-white lg:text-8xl md:text-7xl">
				<span>Meetups</span>
			</h1>
			<h2 className="mb-2 mt-4 text-2xl tracking-tighter text-white text-center">
				<span>
					Meetups for various provinces are organized on Discord. We choose a date and location that works for all, so be sure to make a
					suggestion.
				</span>
			</h2>
		</section>
	)
}
