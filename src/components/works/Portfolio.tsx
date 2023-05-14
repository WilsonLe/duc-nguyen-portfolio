import { WorksProps } from "@/models/WorksProps";
import { useTheme } from "next-themes";
import Image from "next/image";
import { FC, useCallback, useEffect, useState } from "react";
import { BsXCircle } from "react-icons/bs";
import Masonry from "react-masonry-css";
import Modal from "react-modal";

Modal.setAppElement("#__next");

export const Portfolio: FC<WorksProps["main"]> = (props) => {
	const breakpointColumnsObj = {
		default: 2,
		1100: 2,
		500: 1
	};

	// start dynamic portfolio with slug
	const [currentProject, setCurrentProject] = useState<
		WorksProps["main"]["projects"][0] | null
	>(null);
	const [isShowing, setIsShowing] = useState(false);
	const { theme } = useTheme();

	const onOpenProject = (id: number) => {
		const portfolio = props.projects.find((item) => item.id === id);
		setCurrentProject(portfolio ?? null);
		setIsShowing(true);
	};

	// start filter data based on function
	const [queryText, setQueryText] = useState("All");
	const [projects, setProjects] = useState(props.projects);

	// fillter portfilo data
	const queryProjects = useCallback(
		(text: string) => {
			if (text === "All") {
				setProjects(props.projects);
			} else {
				const projects = props.projects.filter((item) => item.tag === text);
				setProjects(projects);
			}
		},
		[props.projects]
	);

	const handleProjectQuery = (queryText: string) => {
		queryProjects(queryText);
		setQueryText(queryText);
	};

	useEffect(() => {
		setQueryText("All");
		queryProjects("All");
	}, [queryProjects]);

	return (
		<>
			{/* Portfilo fillter tab start */}
			<ul className="mt-[40px] flex w-full justify-start md:justify-end flex-wrap font-medium pb-12">
				<li
					className={`${
						queryText === "All" ? "text-[#FA5252]" : "fillter-btn"
					} mr-4 md:mx-4`}
					onClick={() => handleProjectQuery("All")}
				>
					All
				</li>
				{props.tags.map((tag) => (
					<li
						key={tag}
						className={`${
							queryText === tag ? "text-[#FA5252]" : "fillter-btn"
						} mr-4 md:mx-4`}
						onClick={() => handleProjectQuery(tag)}
					>
						{tag}
					</li>
				))}
			</ul>
			<Masonry
				breakpointCols={breakpointColumnsObj}
				className="my-masonry-grid"
				columnClassName="my-masonry-grid_column"
			>
				{projects.map((item) => (
					<div
						className="rounded-lg p-6 dark:border-[2px] border-[#212425]"
						style={{
							background: `${
								theme === "dark"
									? item.backgroundColorDark
									: item.backgroundColorLight
							}`
						}}
						key={item.id}
						onClick={() => onOpenProject(item?.id)}
					>
						<div className="overflow-hidden rounded-lg">
							<Image
								className="w-full    cursor-pointer transition duration-200 ease-in-out transform hover:scale-110 rounded-lg h-auto "
								src={item.thumbnail.src}
								width={300}
								height={300}
								priority
								alt={item.thumbnail.alt}
							/>
						</div>
						<span className="pt-5 text-[14px] font-normal text-gray-lite block dark:text-[#A6A6A6]">
							{item.tag}
						</span>
						<h2 className="font-medium cursor-pointer text-xl duration-300 transition hover:text-[#FA5252] dark:hover:text-[#FA5252] dark:text-white mt-2">
							{item.header}
						</h2>
					</div>
				))}
			</Masonry>

			{currentProject && (
				<Modal
					isOpen={isShowing}
					onRequestClose={() => setIsShowing(false)}
					className=" outline-none flex items-center  p-4 md:p-8  rounded-2xl my-8"
				>
					<div className=" w-full md:w-10/12 flex items-center   lg:w-[850px] bg-white dark:bg-[#323232] mx-auto rounded-xl p-4 md:p-8 absolute left-1/2 top-1/2 transform -translate-x-[50%] -translate-y-[50%] shadow-lg ">
						<div className=" overflow-y-scroll max-h-[80vh] no-scrollbar ">
							<BsXCircle
								onClick={() => setIsShowing(false)}
								className="text-7xl cursor-pointer  absolute right-2 -top-12 md:-right-10 md:-top-6 z-50  text-white transition transform hover:rotate-45 duration-300 ease-in-out"
							/>
							<h2 className="text-[#ef4060] dark:hover:text-[#FA5252] text-4xl text-center font-bold">
								{currentProject.header}
							</h2>
							<div className="flex flex-col py-2 border-y border-y-gray-lite">
								{currentProject.metadata.map((metadata) => (
									<div key={metadata.id} className="flex flex-row">
										<Image
											src={metadata.iconLight.src}
											alt={metadata.iconLight.alt}
											width={20}
											height={20}
											className="mr-1 dark:hidden block"
										/>
										<Image
											src={metadata.iconDark.src}
											alt={metadata.iconDark.alt}
											width={20}
											height={20}
											className="mr-1 hidden dark:block"
										/>
										<div
											dangerouslySetInnerHTML={{ __html: metadata.content }}
										/>
									</div>
								))}
							</div>

							<div
								className="portfolio-project-content mt-2"
								dangerouslySetInnerHTML={{ __html: currentProject.content }}
							/>

							<Image
								className="w-full md:h-[450px] h-auto object-cover rounded-xl mt-6"
								src={currentProject.banner.src}
								alt={currentProject.banner.alt}
								width={620}
								height={420}
								loading="lazy"
							/>
						</div>
					</div>
				</Modal>
			)}
		</>
	);
};
