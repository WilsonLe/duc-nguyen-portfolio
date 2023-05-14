import { z } from "zod";
import { HeaderProps, defaultHeaderProps } from "./HeaderProps";
import { SidebarProps, defaultSidebarProps } from "./SidebarProps";

export const defaultHome = {
	header: defaultHeaderProps,
	sidebar: defaultSidebarProps,
	seo: {
		pageTitle: "Home"
	},
	main: {
		about: {
			header: "About Me",
			content: `<p>I'm Creative Director and UI/UX Designer from Sydney, Australia, working in web development and print media. I enjoy turning complex problems into simple, beautiful and intuitive designs.</p><p>My aim is to bring across your message and identity in the most creative way. I created web design for many famous brand companies.</p>`
		},
		skills: {
			header: "What I Do!",
			skills: [
				{
					id: "1'",
					header: "Graphic Design",
					content: `<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.</p>`,
					backgroundColorLight: "#FCF4FF",
					backgroundColorDark: "#000000",
					iconLight: { src: "/images/icons/skills-0-light.svg", alt: "Icon" },
					iconDark: { src: "/images/icons/skills-0-dark.svg", alt: "Icon" }
				}
			]
		}
	}
};

export const HomeProps = z.object({
	header: HeaderProps,
	sidebar: SidebarProps,
	seo: z.object({ pageTitle: z.string() }).default(defaultHome.seo),
	main: z
		.object({
			about: z.object({ header: z.string(), content: z.string() }),
			skills: z.object({
				header: z.string(),
				skills: z.array(
					z.object({
						id: z.string(),
						header: z.string(),
						content: z.string(),
						iconLight: z.object({ src: z.string(), alt: z.string() }),
						iconDark: z.object({ src: z.string(), alt: z.string() }),
						backgroundColorLight: z.string(),
						backgroundColorDark: z.string()
					})
				)
			})
		})
		.default(defaultHome.main)
});

export type HomeProps = z.infer<typeof HomeProps>;
