import { CMS } from "@/services/cms";
import { z } from "zod";
import { serializeHTML } from "./serializeHTML";

export const WorksMainSchema = z
	.object({
		id: z.string(),
		"page title": z.string(),
		header: z.string(),
		tags: z.array(
			z
				.object({ id: z.string(), name: z.string() })
				.transform((tag) => tag.name)
		),
		projects: z.array(
			z.object({
				id: z.string(),
				header: z.string(),
				tags: z.array(
					z
						.object({ id: z.string(), name: z.string() })
						.transform((tag) => tag.name)
				),
				thumbnail: z
					.object({ url: z.string(), alt: z.string() })
					.transform((thumbnail) => ({ ...thumbnail, src: thumbnail.url })),
				banner: z
					.object({ url: z.string(), alt: z.string() })
					.transform((banner) => ({ ...banner, src: banner.url })),
				backgroundColorLight: z.string(),
				backgroundColorDark: z.string(),
				content: z.any().transform(serializeHTML),
				metadata: z.array(
					z.object({
						id: z.string(),
						iconLight: z
							.object({ url: z.string(), alt: z.string() })
							.transform((banner) => ({ ...banner, src: banner.url })),
						iconDark: z
							.object({ url: z.string(), alt: z.string() })
							.transform((banner) => ({ ...banner, src: banner.url })),
						content: z.any().transform(serializeHTML)
					})
				)
			})
		)
	})
	.transform((worksMain) => ({
		...worksMain,
		pageTitle: worksMain["page title"]
	}));

export type WorksMainData = z.infer<typeof WorksMainSchema>;

export class WorksMain {
	public static async get(): Promise<WorksMainData> {
		const resWorks = await CMS.get("/api/globals/works");
		const resTags = await CMS.get("/api/project tags?limit=100");
		return this.parse({ ...resWorks.data, tags: resTags.data.docs });
	}

	public static parse(data: unknown): WorksMainData {
		return WorksMainSchema.parse(data);
	}
}
