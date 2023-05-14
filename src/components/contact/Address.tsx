import { ContactProps } from "@/models/ContactProps";
import { useTheme } from "next-themes";
import Image from "next/image";
import { FC } from "react";

export const Address: FC<ContactProps["main"]> = (props) => {
	const { theme } = useTheme();

	return (
		<>
			{props.contacts.map((contact, i) => (
				<div
					key={i}
					style={{
						background: `${
							theme === "dark"
								? contact.backgroundColorDark
								: contact.backgroundColorLight
						}`
					}}
					className="flex flex-wrap p-[30px]  border-[#A6A6A6] gap-2 rounded-xl "
				>
					<span className="w-8 mt-2">
						<Image
							src={contact.iconLight.src}
							width={24}
							height={24}
							alt={contact.iconLight.alt}
							className="block dark:hidden"
						/>
						<Image
							src={contact.iconDark.src}
							width={24}
							height={24}
							alt={contact.iconDark.alt}
							className="hidden dark:block"
						/>
					</span>
					<div className="space-y-2">
						<h1 className="text-xl font-semibold dark:text-white">
							{contact.header}
						</h1>
						<div
							className="contact-content"
							dangerouslySetInnerHTML={{ __html: contact.content }}
						/>
					</div>
				</div>
			))}
		</>
	);
};
