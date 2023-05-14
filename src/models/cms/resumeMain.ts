import { Axios } from "@/services/axios";
import { z } from "zod";
import { serializeHTML } from "./serializeHTML";

export const ResumeMainSchema = z
	.object({
		id: z.string(),
		"page title": z.string(),
		header: z.string(),
		sections: z.array(
			z.object({
				id: z.string(),
				header: z.string(),
				iconLight: z
					.object({ url: z.string(), alt: z.string() })
					.transform((icon) => ({ ...icon, src: icon.url })),
				iconDark: z
					.object({ url: z.string(), alt: z.string() })
					.transform((icon) => ({ ...icon, src: icon.url })),
				cards: z.array(
					z.object({
						id: z.string(),
						date: z.string(),
						header: z.string(),
						content: z.any().transform(serializeHTML),
						backgroundColorLight: z.string(),
						backgroundColorDark: z.string()
					})
				)
			})
		)
	})
	.transform((resumeMain) => ({
		...resumeMain,
		pageTitle: resumeMain["page title"]
	}));

export type ResumeMainData = z.infer<typeof ResumeMainSchema>;

export class ResumeMain {
	public static async get(): Promise<ResumeMainData> {
		const res = await Axios.get("/api/globals/resume");
		return this.parse(res.data);
	}

	public static parse(data: unknown): ResumeMainData {
		return ResumeMainSchema.parse(data);
	}
}
