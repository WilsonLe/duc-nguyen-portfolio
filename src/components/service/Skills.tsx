import { HomeProps } from "@/models/HomeProps";
import { useTheme } from "next-themes";
import Image from "next/image";
// import serviceData from "../../data/serviceData";

export const Skills = (props: HomeProps["main"]) => {
	const { theme, setTheme } = useTheme();

	return (
		<>
			{props.skills.skills.map((item) => (
				<div
					className="about-box"
					key={item.id}
					style={{
						background: `${
							theme === "dark"
								? item.backgroundColorDark
								: item.backgroundColorLight
						}`
					}}
				>
					<Image
						className="w-10 h-10 object-contain block dark:hidden"
						src={item.iconLight.src}
						width={40}
						height={40}
						alt={item.iconLight.alt}
					/>
					<Image
						className="w-10 h-10 object-contain hidden dark:block"
						src={item.iconDark.src}
						width={40}
						height={40}
						alt={item.iconDark.alt}
					/>

					<div className="space-y-2 break-all skills-">
						<h3 className="dark:text-white text-xl font-semibold">
							{item.header}
						</h3>
						<div
							className="skills-paragraph-container"
							dangerouslySetInnerHTML={{ __html: item.content }}
						/>
					</div>
				</div>
			))}
		</>
	);
};
