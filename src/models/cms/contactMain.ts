import { Axios } from "@/services/axios";
import { z } from "zod";
import { serializeHTML } from "./serializeHTML";

export const ContactMainSchema = z
	.object({
		id: z.string(),
		"page title": z.string(),
		header: z.string(),
		contacts: z.array(
			z.object({
				id: z.string(),
				header: z.string(),
				content: z.any().transform(serializeHTML),
				backgroundColorLight: z.string(),
				backgroundColorDark: z.string(),
				iconLight: z
					.object({ url: z.string(), alt: z.string() })
					.transform((icon) => ({ ...icon, src: icon.url })),
				iconDark: z
					.object({ url: z.string(), alt: z.string() })
					.transform((icon) => ({ ...icon, src: icon.url }))
			})
		)
	})
	.transform((worksMain) => ({
		...worksMain,
		pageTitle: worksMain["page title"]
	}));

export type ContactMainData = z.infer<typeof ContactMainSchema>;

export class ContactMain {
	public static async get(): Promise<ContactMainData> {
		const res = await Axios.get("/api/globals/contact");
		return this.parse(res.data);
	}

	public static parse(data: unknown): ContactMainData {
		return ContactMainSchema.parse(data);
	}
}
