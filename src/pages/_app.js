import AOS from "aos";
import "aos/dist/aos.css";
import { ThemeProvider } from "next-themes";
import Head from "next/head";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "../styles/custom.css";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
	useEffect(() => {
		AOS.init({ duration: 1200 });
		AOS.refresh();
	}, []);
	return (
		<>
			<ToastContainer
				position="top-right"
				autoClose={2000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>

			<ThemeProvider attribute="class">
				<Head>
					<meta name="viewport" content="width=device-width, initial-scale=1" />
				</Head>
				<Component {...pageProps} />
			</ThemeProvider>
		</>
	);
}
