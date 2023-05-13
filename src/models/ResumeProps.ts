import { z } from "zod";
import { HeaderProps, defaultHeaderProps } from "./HeaderProps";
import { SidebarProps, defaultSidebarProps } from "./SidebarProps";

const defaultResume = {
	header: defaultHeaderProps,
	sidebar: defaultSidebarProps,
	seo: {
		pageTitle: "Home"
	},
	main: {
		header: "Resume",
		sections: [
			{
				id: 1,
				header: "Education",
				iconLight: {
					src: "/images/icons/md-outline-school-light.svg",
					alt: "Education icon"
				},
				iconDark: {
					src: "/images/icons/md-outline-school-dark.svg",
					alt: "Education icon"
				},
				cards: [
					{
						id: 1,
						date: "2020-2024",
						header: "Bachelor of Arts",
						content: "<p>Denison University, Granville, OH</p>",
						backgroundColorLight: "#FFF4F4",
						backgroundColorDark: "#000000"
					}
				]
			},
			{
				id: 2,
				header: "Experience",
				iconLight: {
					src: "/images/icons/md-outline-business-center-light.svg",
					alt: "Experience icon"
				},
				iconDark: {
					src: "/images/icons/md-outline-business-center-dark.svg",
					alt: "Experience icon"
				},
				cards: [
					{
						id: 1,
						date: "August 2023 - current",
						header: "Graphic Designer",
						content:
							"<p>Knowlton Center, Denison University, Granville, OH</p>",
						backgroundColorLight: "#EEF5FA",
						backgroundColorDark: "#000000"
					}
				]
			}
		]
	}
};

export const ResumeProps = z.object({
	header: HeaderProps,
	sidebar: SidebarProps,
	seo: z.object({ pageTitle: z.string() }).default(defaultResume.seo),
	main: z
		.object({
			header: z.string(),
			sections: z.array(
				z.object({
					id: z.number(),
					header: z.string(),
					iconLight: z.object({ src: z.string(), alt: z.string() }),
					iconDark: z.object({ src: z.string(), alt: z.string() }),
					cards: z.array(
						z.object({
							id: z.number(),
							date: z.string(),
							header: z.string(),
							content: z.string(),
							backgroundColorLight: z.string(),
							backgroundColorDark: z.string()
						})
					)
				})
			)
		})
		.default(defaultResume.main)
});

export type ResumeProps = z.infer<typeof ResumeProps>;
