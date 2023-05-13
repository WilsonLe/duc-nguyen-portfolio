import { z } from "zod";

export const defaultHeaderProps = {
	logo: {
		src: "/images/logo/logo.png",
		alt: "logo"
	},
	menu: [
		{
			id: 1,
			name: "Home",
			routePath: "/",
			iconLight: {
				src: "/images/icons/ai-outline-home-light.svg",
				alt: "Home icon"
			},
			iconDark: {
				src: "/images/icons/ai-outline-home-dark.svg",
				alt: "Home icon"
			}
		},
		{
			id: 2,
			name: "Resume",
			routePath: "/resume",
			iconLight: {
				src: "/images/icons/cg-notes-light.svg",
				alt: "Resume icon"
			},
			iconDark: {
				src: "/images/icons/cg-notes-dark.svg",
				alt: "Resume icon"
			}
		},
		{
			id: 3,
			name: "Works",
			routePath: "/works",
			iconLight: {
				src: "/images/icons/fi-code-sandbox-light.svg",
				alt: "Work icon"
			},
			iconDark: {
				src: "/images/icons/fi-code-sandbox-dark.svg",
				alt: "Work icon"
			}
		},
		{
			id: 4,
			name: "Contact",
			routePath: "/contact",
			iconLight: {
				src: "/images/icons/ri-contacts-book-line-light.svg",
				alt: "Contact icon"
			},
			iconDark: {
				src: "/images/icons/ri-contacts-book-line-dark.svg",
				alt: "Contact icon"
			}
		}
	]
};

export const HeaderProps = z
	.object({
		logo: z.object({
			src: z.string(),
			alt: z.string()
		}),
		menu: z.array(
			z.object({
				id: z.number(),
				name: z.string(),
				routePath: z.string(),
				iconLight: z.object({ src: z.string(), alt: z.string() }),
				iconDark: z.object({ src: z.string(), alt: z.string() })
			})
		)
	})
	.default(defaultHeaderProps);

export type HeaderProps = z.infer<typeof HeaderProps>;
