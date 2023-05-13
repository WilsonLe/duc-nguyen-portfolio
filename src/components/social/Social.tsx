import { HomeProps } from "@/models/HomeProps";

const Social = (props: HomeProps["sidebar"]) => {
	return (
		<>
			{props.social.map((item) => (
				<a
					href={item.link}
					target="_blank"
					rel="noopener noreferrer"
					key={item.id}
				>
					<span className="flex-shrink-0 socialbtn hidden dark:flex ">
						<img src={item.iconDark.src} alt={item.iconDark.alt} />
					</span>
					<span className="flex-shrink-0 socialbtn dark:hidden flex">
						<img src={item.iconLight.src} alt={item.iconLight.alt} />
					</span>
				</a>
			))}
		</>
	);
};

export default Social;
