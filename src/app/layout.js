import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
	title: "SAKB",
	description: "South African Keyboards",
}

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<link rel="icon" href="/sakb.ico" sizes="any" />
			<body className={inter.className}>{children}</body>
		</html>
	)
}
