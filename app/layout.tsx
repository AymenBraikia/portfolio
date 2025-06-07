import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const myCustomFont = localFont({
	src: [
		{
			path: "../public/font/Commissioner-Black.ttf",
			weight: "900",
			style: "normal",
		},
		{
			path: "../public/font/Commissioner-ExtraBold.ttf",
			weight: "800",
			style: "normal",
		},
		{
			path: "../public/font/Commissioner-Bold.ttf",
			weight: "700",
			style: "normal",
		},
		{
			path: "../public/font/Commissioner-SemiBold.ttf",
			weight: "600",
			style: "normal",
		},
		{
			path: "../public/font/Commissioner-Medium.ttf",
			weight: "500",
			style: "normal",
		},
		{
			path: "../public/font/Commissioner-Regular.ttf",
			weight: "400",
			style: "normal",
		},
		{
			path: "../public/font/Commissioner-Light.ttf",
			weight: "300",
			style: "normal",
		},
		{
			path: "../public/font/Commissioner-ExtraLight.ttf",
			weight: "200",
			style: "normal",
		},
		{
			path: "../public/font/Commissioner-Thin.ttf",
			weight: "100",
			style: "normal",
		},
	],
	display: "swap",
	variable: "--font-main",
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
