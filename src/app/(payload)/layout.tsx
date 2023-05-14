export const metadata = {
	title: "Duc Nguyen",
	description: "Duc Nguyen Portfolio"
};

export default function RootLayout({
	children
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
