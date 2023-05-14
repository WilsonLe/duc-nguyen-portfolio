import { HomeProps } from "@/models/HomeProps";
import Image from "next/image";

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
						<Image
							src={item.iconDark.src}
							alt={item.iconDark.alt}
							height={20}
							width={20}
						/>
					</span>
					<span className="flex-shrink-0 socialbtn dark:hidden flex">
						<Image
							src={item.iconLight.src}
							alt={item.iconLight.alt}
							height={20}
							width={20}
						/>
					</span>
				</a>
			))}
		</>
	);
};

export default Social;
