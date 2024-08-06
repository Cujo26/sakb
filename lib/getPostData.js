"use server"
import fs from "fs"
import path from "path"
import matter from "gray-matter"

export async function getPostNames() {
	const blogsDirectory = path.join(process.cwd(), "posts")
	const filenames = fs.readdirSync(blogsDirectory)

	const allPostsData = filenames.map((filename) => {
		const slug = filename.replace(/\.md$/, "")
		const filePath = path.join(blogsDirectory, filename)
		const fileContents = fs.readFileSync(filePath, "utf8")
		const { data } = matter(fileContents)

		return {
			slug,
			title: data.title || slug,
			image: data.image || "",
		}
	})

	return allPostsData
}

export async function getPostData(post) {
	const blogsDirectory = path.join(process.cwd(), "posts")

	const slugpath = path.join(blogsDirectory, `${post}.md`)

	const fileContents = fs.readFileSync(slugpath, "utf8")
	const { data, content } = matter(fileContents)

	return { data, content }
}

