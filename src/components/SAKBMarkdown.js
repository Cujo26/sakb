import React from "react"
import Markdown from "react-markdown"
import Image from "next/image"
// import Link from "next/link"

export default function SAKBMarkdown({ markdown }) {
	return (
		<Markdown
			children={markdown}
			components={{
				a: ({ node, children, ...props }) => <a className="after:font-materialSymbols">{children}</a>,
				blockquote: ({ node, children, ...props }) => (
					<div className="mx-auto mb-2 rounded-md border border-lvprose px-2 lg:w-8/12 lg:px-4">{children}</div>
				),
				h1: ({ node, ...props }) => (
					<h1 className="mb-2 text-6xl font-bold tracking-tighter text-white lg:text-8xl md:text-7xl">
						<span>{markdown.children}</span>
					</h1>
				),
				// li: ({ node, children, ...props }) => <li className="text-lvtext">{children}</li>,
				img: ({ node, ...props }) => (
					<Image
						src={props.src}
						width={2000}
						height={2000}
						alt={props.alt}
						className={`my-2 ${props.alt === "sm" ? "h-auto w-1/4" : "h-auto w-full"}`}
					/>
				),
				pre: ({ node, inline, className, children, ...props }) => (
					<>
						<div className="h-0 w-full translate-y-[calc(100%+10px)]">
							<CodeButton className="min-w-18 float-right mr-2 mt-2 origin-top-right cursor-pointer rounded border border-lvgraybright bg-black/50 p-1 text-xs text-white transition-transform hover:scale-110">
								{children}
							</CodeButton>
						</div>
						<pre className={`w-full  ${dark ? "border border-lvgraybright" : ""} bg-codebg p-2`}>{children}</pre>
					</>
				),
				code: ({ node, inline, className, children, ...props }) => {
					const match = /language-(\w+)/.exec(className || "")
					return !inline && match ? (
						<>
							<SyntaxHighlighter
								{...props}
								children={String(children).replace(/\n$/, "")}
								style={dark ? oneLight : materialOceanic}
								language={match[1]}
								customStyle={"w-full"}
								PreTag={CustomPreTag}
							/>
						</>
					) : (
						<span className={`inline rounded-md border bg-codebg px-1 py-[2px] ${dark ? "border-lvgraybright" : "border-codebg"}`}>
							<span
								// {...props}
								className={"text-lvinline font-robotoMono text-sm font-thin"}
							>
								{children}
							</span>
						</span>
					)
				},
			}}
			className="prose-pre:border-tr-none prose flex max-w-none flex-col items-start p-2 prose-headings:m-1 prose-headings:font-normal prose-headings:text-lvprose prose-p:m-1 prose-p:text-lvprose prose-a:text-lvtext xl:w-10/12"
		/>
	)
}

