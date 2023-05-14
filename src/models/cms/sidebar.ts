import { CMS } from "@/services/cms";
import { z } from "zod";
import { serializeHTML } from "./serializeHTML";

export const SidebarSchema = z.object({
	id: z.string(),
	avatar: z
		.object({ url: z.string(), alt: z.string() })
		.transform((avatar) => ({ ...avatar, src: avatar.url })),
	header1: z.string(),
	header2: z.string(),
	social: z.array(
		z.object({
			id: z.string(),
			link: z.string().url(),
			iconLight: z
				.object({ url: z.string(), alt: z.string() })
				.transform((icon) => ({ ...icon, src: icon.url })),
			iconDark: z
				.object({ url: z.string(), alt: z.string() })
				.transform((icon) => ({ ...icon, src: icon.url }))
		})
	),
	personalInfo: z.array(
		z.object({
			id: z.string(),
			name: z.string(),
			content: z.any().transform(serializeHTML),
			iconLight: z
				.object({ url: z.string(), alt: z.string() })
				.transform((icon) => ({ ...icon, src: icon.url })),
			iconDark: z
				.object({ url: z.string(), alt: z.string() })
				.transform((icon) => ({ ...icon, src: icon.url }))
		})
	),
	resume: z.object({
		file: z
			.object({ url: z.string(), alt: z.string() })
			.transform((file) => ({ ...file, src: file.url })),
		text: z.string(),
		iconLight: z
			.object({ url: z.string(), alt: z.string() })
			.transform((icon) => ({ ...icon, src: icon.url })),
		iconDark: z
			.object({ url: z.string(), alt: z.string() })
			.transform((icon) => ({ ...icon, src: icon.url }))
	})
});

export type SidebarData = z.infer<typeof SidebarSchema>;

export class Sidebar {
	public static async get(): Promise<SidebarData | undefined> {
		try {
			const res = await CMS.get("/api/globals/sidebar");
			return this.parse(res.data);
		} catch (error) {
			console.log(error);
		}
	}

	public static parse(data: unknown): SidebarData {
		return SidebarSchema.parse(data);
	}
}
