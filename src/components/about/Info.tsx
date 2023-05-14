import { HomeProps } from "@/models/HomeProps";
import Image from "next/image";

const Info = (props: HomeProps["sidebar"]) => {
	return (
		<>
			{props.personalInfo.map((item, i) => (
				<div
					className={`flex py-2.5 ${
						i == props.personalInfo.length - 1 ? "" : "border-b"
					} border-[#E3E3E3] dark:border-[#3D3A3A]`}
					key={item.id}
				>
					<span
						className={`flex-shrink-0 socialbtn bg-white dark:bg-black shadow-md dark:hidden flex`}
					>
						<Image
							src={item.iconLight.src}
							alt={item.iconLight.alt}
							height={20}
							width={20}
						/>
					</span>
					<span
						className={`flex-shrink-0 socialbtn bg-white dark:bg-black shadow-md hidden dark:flex`}
					>
						<Image
							src={item.iconDark.src}
							alt={item.iconDark.alt}
							height={20}
							width={20}
						/>
					</span>
					<div className="text-left ml-2.5">
						<p className="text-xs text-[#44566C] dark:text-[#A6A6A6]">
							{item.name}
						</p>
						<p
							className="dark:text-white break-all"
							dangerouslySetInnerHTML={{ __html: item.content }}
						/>
					</div>
				</div>
			))}
		</>
	);
};

export default Info;
