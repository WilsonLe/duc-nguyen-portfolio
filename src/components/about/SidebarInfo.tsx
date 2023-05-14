import Image from "next/image";

import { HomeProps } from "@/models/HomeProps";
import Social from "../social/Social";
import Info from "./Info";

const SidebarInfo = (props: HomeProps["sidebar"]) => {
	return (
		<div className="w-full mb-6 lg:mb-0 mx-auto relative bg-white text-center dark:bg-[#111111] px-6 rounded-[20px] mt-[180px] md:mt-[220px] lg:mt-0 ">
			<Image
				src={props.avatar.src}
				width={240}
				height={240}
				className="w-[240px] absolute left-[50%] transform -translate-x-[50%] h-[240px] drop-shadow-xl mx-auto  rounded-[20px] -mt-[140px]"
				alt={props.avatar.alt}
			/>
			{/* Social card */}
			<div className="pt-[100px] pb-8">
				<h1 className="mt-6 mb-1 text-5xl font-semibold  dark:text-white">
					{props.header1}
				</h1>
				<h3 className="mb-4 text-[#7B7B7B] inline-block dark:bg-[#1D1D1D] px-5 py-1.5 rounded-lg dark:text-[#A6A6A6]  ">
					{props.header2}
				</h3>

				<div className="flex justify-center space-x-3">
					<Social {...props} />
				</div>

				{/* personal information */}
				<div className="p-7 rounded-2xl mt-7  bg-[#F3F6F6] dark:bg-[#1D1D1D]">
					<Info {...props} />
				</div>

				<a
					href={props.resume.url}
					download
					className="inline-flex items-center mx-auto bg-gradient-to-r duration-200 transition ease-linear hover:bg-gradient-to-l from-[#DD2476]  to-[#fa5252ef] px-8 py-3 text-lg text-white rounded-[35px] mt-6"
				>
					<span className="flex-shrink-0 mr-2 dark:hidden flex">
						<Image
							src={props.resume.iconLight.src}
							alt={props.resume.iconLight.alt}
							height={20}
							width={20}
						/>
					</span>
					<span className="flex-shrink-0 mr-2 dark:flex hidden">
						<Image
							src={props.resume.iconDark.src}
							alt={props.resume.iconDark.alt}
							height={20}
							width={20}
						/>
					</span>
					{props.resume.text}
				</a>
			</div>
		</div>
	);
};

export default SidebarInfo;
