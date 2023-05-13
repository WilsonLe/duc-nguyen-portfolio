import { ResumeProps } from "@/models/ResumeProps";
import { useTheme } from "next-themes";
import Image from "next/image";

export const ResumeSections = (props: ResumeProps["main"]) => {
	const { theme, setTheme } = useTheme();

	return (
		<>
			{props.sections.map((section) => (
				<div key={section.id}>
					<div className="flex items-center space-x-2 mb-4">
						<Image
							className="dark:hidden flex"
							src={section.iconLight.src}
							alt={section.iconLight.alt}
							height={40}
							width={40}
						/>
						<Image
							className="hidden dark:flex"
							src={section.iconDark.src}
							alt={section.iconDark.alt}
							height={40}
							width={40}
						/>
						<h4 className="text-5xl dark:text-white font-medium">
							{section.header}
						</h4>
					</div>
					{/* end flex */}

					{section.cards.map((card) => (
						<div
							className="py-4 pl-5 pr-3 space-y-2 mb-6 rounded-lg  dark:border-[#212425] dark:border-2"
							style={{
								background: `${
									theme === "dark"
										? card.backgroundColorDark
										: card.backgroundColorLight
								}`
							}}
							key={card.id}
						>
							<span className="text-tiny text-gray-lite dark:text-[#b7b7b7]">
								{card.date}
							</span>
							<h3 className="text-xl dark:text-white"> {card.header} </h3>
							<div
								className="resume-sections-cards-content"
								dangerouslySetInnerHTML={{ __html: card.content }}
							/>
						</div>
					))}
				</div>
			))}
		</>
	);
};
