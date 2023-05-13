import { z } from "zod";

export const defaultSidebarProps = {
	avatar: { src: "/images/about/avatar.jpg", alt: "avatar" },
	header1: "Duc Nguyen",
	header2: "Graphic Designer",
	social: [
		{
			id: 1,
			link: "https://www.facebook.com/",
			iconLight: {
				src: "/images/icons/fa-facebook-f-light.svg",
				alt: "Facebook Social Profile"
			},
			iconDark: {
				src: "/images/icons/fa-facebook-f-dark.svg",
				alt: "Facebook Social Profile"
			}
		},
		{
			id: 2,
			link: "https://twitter.com/",
			iconLight: {
				src: "/images/icons/fa-twitter-light.svg",
				alt: "Twitter Social Profile"
			},
			iconDark: {
				src: "/images/icons/fa-twitter-dark.svg",
				alt: "Twitter Social Profile"
			}
		},
		{
			id: 4,
			link: "https://www.linkedin.com/",
			iconLight: {
				src: "/images/icons/fa-linkedin-in-light.svg",
				alt: "LinkedIn Social Profile"
			},
			iconDark: {
				src: "/images/icons/fa-linkedin-in-dark.svg",
				alt: "LinkedIn Social Profile"
			}
		}
	],
	personalInfo: [
		{
			id: 1,
			name: "Phone",
			content: `<a href="tel:+1234567890">+123 456 7890</a></>`,
			iconLight: {
				src: "/images/icons/fa-mobile-alt-light.svg",
				alt: "Phone icon"
			},
			iconDark: {
				src: "/images/icons/fa-mobile-alt-dark.svg",
				alt: "Phone icon"
			}
		},
		{
			id: 2,
			name: "Location",
			content: `Hong kong china`,
			iconLight: {
				src: "/images/icons/fa-map-marker-alt-light.svg",
				alt: "Map location icon"
			},
			iconDark: {
				src: "/images/icons/fa-map-marker-alt-dark.svg",
				alt: "Map location icon"
			}
		},
		{
			id: 3,
			name: "Email",
			content: `<a href="mailto:ibthemes21@gmail.com">example@mail.com</a>`,
			iconLight: {
				src: "/images/icons/fa-envelope-open-text-light.svg",
				alt: "Envelope icon"
			},
			iconDark: {
				src: "/images/icons/fa-envelope-open-text-dark.svg",
				alt: "Envelope icon"
			}
		},
		{
			id: 4,
			name: "Birthday",
			content: `May 27, 1990`,
			iconLight: {
				src: "/images/icons/fa-calendar-alt-light.svg",
				alt: "Calendar icon"
			},
			iconDark: {
				src: "/images/icons/fa-calendar-alt-dark.svg",
				alt: "Calendar icon"
			}
		}
	],
	resume: {
		url: "/images/cv.pdf",
		text: "Download Resume",
		iconLight: {
			src: "/images/icons/fa-download.svg",
			alt: "Download icon"
		},
		iconDark: {
			src: "/images/icons/fa-download.svg",
			alt: "Download icon"
		}
	}
};

export const SidebarProps = z
	.object({
		avatar: z.object({ src: z.string(), alt: z.string() }),
		header1: z.string(),
		header2: z.string(),
		social: z.array(
			z.object({
				id: z.number(),
				link: z.string().url(),
				iconLight: z.object({ src: z.string(), alt: z.string() }),
				iconDark: z.object({ src: z.string(), alt: z.string() })
			})
		),
		personalInfo: z.array(
			z.object({
				id: z.number(),
				name: z.string(),
				content: z.string(),
				iconLight: z.object({ src: z.string(), alt: z.string() }),
				iconDark: z.object({ src: z.string(), alt: z.string() })
			})
		),
		resume: z.object({
			url: z.string(),
			text: z.string(),
			iconLight: z.object({ src: z.string(), alt: z.string() }),
			iconDark: z.object({ src: z.string(), alt: z.string() })
		})
	})
	.default(defaultSidebarProps);

export type SidebarProps = z.infer<typeof SidebarProps>;
