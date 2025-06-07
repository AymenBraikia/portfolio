import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const myCustomFont = localFont({
	src: [
		{
			path: "../public/font/EduSAHand-Bold.ttf",
			weight: "700",
			style: "normal",
		},
		{
			path: "../public/font/EduSAHand-SemiBold.ttf",
			weight: "600",
			style: "normal",
		},
		{
			path: "../public/font/EduSAHand-Medium.ttf",
			weight: "500",
			style: "normal",
		},
		{
			path: "../public/font/EduSAHand-Regular.ttf",
			weight: "400",
			style: "normal",
		},
		{
			path: "../public/font/EduSAHand-Regular.ttf",
			weight: "300",
			style: "normal",
		},
	],
	display: "swap",
	variable: "--my-font",
});
export const metadata: Metadata = {
	title: "Aymen Braikia",
	description: "Aymen's Full stack web developer portfolio",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${myCustomFont.variable}`}>{children}</body>
		</html>
	);
}
