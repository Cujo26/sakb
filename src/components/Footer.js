import Image from "next/image"
export default function Footer() {
	return (
		<footer class="text-white body-font sticky bottom-0">
			<div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
				<a class="flex opacity-80 title-font font-medium items-center md:justify-start justify-center" href="/">
					<span class="ml-3 text-xl">Support local</span>
				</a>
				<span class="inline-flex sm:ml-auto gap-7 sm:mt-0 mt-4 justify-center sm:justify-start">
					<a href="https://cookieatom.co.za/">
						<Image alt="cookie atom" src="/CookieAtom2.webp" width={300} height={300} className="h-8 w-auto"></Image>
					</a>
					<a href="https://www.ctrlshiftesc.co.za/">
						<Image alt="control shift escape" src="/CSEDark.webp" width={300} height={300} className="h-8 w-auto"></Image>
					</a>
				</span>
			</div>
		</footer>
	)
}

