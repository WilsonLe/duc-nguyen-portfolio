import Head from "next/head";
import { FC } from "react";

interface SeoProps {
	pageTitle: string;
}

const Seo: FC<SeoProps> = ({ pageTitle }) => (
	<>
		<Head>
			<title>{pageTitle}</title>
		</Head>
	</>
);

export default Seo;
