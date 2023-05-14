import { GetStaticProps } from "next";
import { z } from "zod";
import { HeaderProps, defaultHeaderProps } from "./HeaderProps";
import { SidebarProps, defaultSidebarProps } from "./SidebarProps";

export const getStaticProps: GetStaticProps<WorksProps> = async () => {
	return {
		props: WorksProps.parse({})
	};
};

const defaultWorksProps = {
	header: defaultHeaderProps,
	sidebar: defaultSidebarProps,
	seo: {
		pageTitle: "Works"
	},
	main: {
		header: "Portfolio",
		tags: ["Logo", "Poster", "Web Design", "Mobile App Design"],
		projects: [
			{
				id: "1",
				tags: ["Logo"],
				header: "DeerX Logo",
				thumbnail: {
					src: "/images/work_images/small/1.jpg",
					alt: "deerx logo thumbnail"
				},
				banner: {
					src: "/images/work_images/1.jpg",
					alt: "deerx logo"
				},
				backgroundColorLight: "#FFF0F0",
				backgroundColorDark: "#000000",
				metadata: [
					{
						id: "1",
						iconLight: {
							src: "/images/icons/ai-outline-project-light.svg",
							alt: "project icon"
						},
						iconDark: {
							src: "/images/icons/ai-outline-project-dark.svg",
							alt: "project icon"
						},
						content: `<p>Preview : <a href="https://deerx.vercel.app">deerx.vercel.app</a></p>`
					}
				],
				content: "I designed logo for DeerX"
			}
		]
	}
};

export const WorksProps = z.object({
	header: HeaderProps,
	sidebar: SidebarProps,
	seo: z.object({ pageTitle: z.string() }).default(defaultWorksProps.seo),
	main: z
		.object({
			header: z.string(),
			tags: z.array(z.string()),
			projects: z.array(
				z.object({
					id: z.string(),
					tags: z.array(z.string()),
					header: z.string(),
					thumbnail: z.object({ src: z.string(), alt: z.string() }),
					banner: z.object({ src: z.string(), alt: z.string() }),
					backgroundColorLight: z.string(),
					backgroundColorDark: z.string(),
					metadata: z.array(
						z.object({
							id: z.string(),
							iconLight: z.object({ src: z.string(), alt: z.string() }),
							iconDark: z.object({ src: z.string(), alt: z.string() }),
							content: z.string()
						})
					),
					content: z.string()
				})
			)
		})
		.default(defaultWorksProps.main)
});

export type WorksProps = z.infer<typeof WorksProps>;
