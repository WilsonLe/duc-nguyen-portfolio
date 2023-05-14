import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<link
					href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Roboto+Slab:wght@300;400;500;600;700;800;900&display=swap"
					rel="stylesheet"
				/>
				<meta
					name="description"
					content="Bostami - Tailwind CSS  Personal Portfolio React Nextjs Template"
				/>
				<meta httpEquiv="x-ua-compatible" content="ie=edge" />
				<meta
					name="keywords"
					content=" cv, portfolio,react nextjs portfolio, resume"
				/>
				<meta name="ibthemes" content="ATFN" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
