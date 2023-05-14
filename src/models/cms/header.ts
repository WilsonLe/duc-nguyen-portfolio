import { CMS } from "@/services/cms";
import { z } from "zod";

export const HeaderSchema = z.object({
	id: z.string(),
	logo: z
		.object({
			alt: z.string(),
			url: z.string()
		})
		.transform((logo) => ({ ...logo, src: logo.url })),
	menu: z.array(
		z.object({
			id: z.string(),
			name: z.string(),
			routePath: z.string(),
			iconLight: z
				.object({
					alt: z.string(),
					url: z.string()
				})
				.transform((icon) => ({ ...icon, src: icon.url })),
			iconDark: z
				.object({
					alt: z.string(),
					url: z.string()
				})
				.transform((icon) => ({ ...icon, src: icon.url }))
		})
	)
});

export type HeaderData = z.infer<typeof HeaderSchema>;

export class Header {
	public static async get(): Promise<HeaderData | undefined> {
		try {
			const res = await CMS.get("/api/globals/header");
			return this.parse(res.data);
		} catch (error) {
			console.log(error);
		}
	}

	public static parse(data: unknown): HeaderData {
		return HeaderSchema.parse(data);
	}
}
