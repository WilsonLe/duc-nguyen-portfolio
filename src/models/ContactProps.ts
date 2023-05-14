import { z } from "zod";
import { HeaderProps, defaultHeaderProps } from "./HeaderProps";
import { SidebarProps, defaultSidebarProps } from "./SidebarProps";

export const defaultContactProps = {
	header: defaultHeaderProps,
	sidebar: defaultSidebarProps,
	seo: {
		pageTitle: "Contact"
	},
	main: {
		header: "Contact",
		contacts: [
			{
				id: 0,
				iconDark: {
					src: "/images/icons/ai-outline-phone-dark.svg",
					alt: "Phone icon"
				},
				iconLight: {
					src: "/images/icons/ai-outline-phone-light.svg",
					alt: "Phone icon"
				},
				backgroundColorLight: "#FCF4FF",
				backgroundColorDark: "#212425",
				header: "Phone",
				content: "<p>+1 234 567 890</p><p>+9 876 543 210</p>"
			},
			{
				id: 1,
				iconDark: {
					src: "/images/icons/ai-outline-phone-dark.svg",
					alt: "Email icon"
				},
				iconLight: {
					src: "/images/icons/ai-outline-phone-light.svg",
					alt: "Email icon"
				},
				backgroundColorLight: "#EEFBFF",
				backgroundColorDark: "#212425",
				header: "Email",
				content: "<p>denny@denison.edu</p><p>hjhj@gmail.com</p>"
			}
		]
	}
};

export const ContactProps = z.object({
	header: HeaderProps,
	sidebar: SidebarProps,
	seo: z.object({ pageTitle: z.string() }).default(defaultContactProps.seo),
	main: z
		.object({
			header: z.string(),
			contacts: z.array(
				z.object({
					id: z.number(),
					iconDark: z.object({
						src: z.string(),
						alt: z.string()
					}),
					iconLight: z.object({
						src: z.string(),
						alt: z.string()
					}),
					backgroundColorLight: z.string(),
					backgroundColorDark: z.string(),
					header: z.string(),
					content: z.string()
				})
			)
		})
		.default(defaultContactProps.main)
});

export type ContactProps = z.infer<typeof ContactProps>;
