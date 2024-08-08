"use client"
import React from "react"
import Image from "next/image"
import Link from "next/link"

export default function Header() {
	const [navbarOpen, setNavbarOpen] = React.useState(false)

	return (
		<header className="text-white body-font backdrop-blur-md top-0 sticky w-screen pl-3">
			<div className="container mx-auto flex flex-wrap p-5 md:flex-row">
				<Link className="flex title-font font-medium text-white mb-4 md:mb-0 pr-4 items-center" href="/">
					<Image src="/sakb.png" width={150} height={150} className="p-2 aspect-square h-12 w-12"></Image>
					<span className="text-3xl">SAKB</span>
				</Link>
				<button
					className="text-white cursor-pointer text-xl leading-none py-1 border border-solid border-transparent rounded bg-transparent block md:hidden outline-none focus:outline-none ml-auto pb-3"
					type="button"
					onClick={() => setNavbarOpen(!navbarOpen)}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="white"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
						className="feather feather-menu"
					>
						<line x1="3" y1="12" x2="21" y2="12"></line>
						<line x1="3" y1="6" x2="21" y2="6"></line>
						<line x1="3" y1="18" x2="21" y2="18"></line>
					</svg>
				</button>
				<div className={"md:flex flex-grow items-center" + (navbarOpen ? " flex" : " hidden")} id="example-navbar-danger">
					<nav className="md:ml-auto flex flex-wrap items-center text-base justify-center font-semibold pl-7">
						<Link className="mr-6 hover:text-white" href="/">
							Home
						</Link>
						<Link className="mr-6 hover:text-white" href="/blogs">
							Blogs
						</Link>
						<Link className="mr-6 hover:text-white" href="/meetups">
							Meetups
						</Link>
					</nav>
				</div>
			</div>
		</header>
	)
}

