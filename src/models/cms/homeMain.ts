import { Axios } from "@/services/axios";
import { z } from "zod";
import { serializeHTML } from "./serializeHTML";

export const HomeMainSchema = z
	.object({
		id: z.string(),
		"page title": z.string(),
		about: z.object({
			header: z.string(),
			content: z.any().transform(serializeHTML)
		}),
		skills: z.object({
			header: z.string(),
			skills: z.array(
				z.object({
					id: z.string(),
					header: z.string(),
					content: z.any().transform(serializeHTML),
					backgroundColorLight: z.string(),
					backgroundColorDark: z.string(),
					iconLight: z
						.object({
							url: z.string(),
							alt: z.string()
						})
						.transform((icon) => ({ ...icon, src: icon.url })),
					iconDark: z
						.object({
							url: z.string(),
							alt: z.string()
						})
						.transform((icon) => ({ ...icon, src: icon.url }))
				})
			)
		})
	})
	.transform((homeMain) => ({
		...homeMain,
		pageTitle: homeMain["page title"]
	}));

export type HomeMainData = z.infer<typeof HomeMainSchema>;

export class HomeMain {
	public static async get(): Promise<HomeMainData> {
		const res = await Axios.get("/api/globals/home");
		return this.parse(res.data);
	}

	public static parse(data: unknown): HomeMainData {
		return HomeMainSchema.parse(data);
	}
}
