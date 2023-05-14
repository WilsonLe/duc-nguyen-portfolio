import { CMS } from "@/services/cms";
import { z } from "zod";

export const HeaderSchema = z.object({});

export type HeaderData = z.infer<typeof HeaderSchema>;

export class Header {
	public static async get(): Promise<HeaderData | undefined> {
		try {
			const res = await CMS.get("/api/globals/header");
			console.log(res.data);
			return this.parse(res.data);
		} catch (error) {
			console.log(error);
		}
	}

	public static parse(data: unknown): HeaderData {
		return HeaderSchema.parse(data);
	}
}
