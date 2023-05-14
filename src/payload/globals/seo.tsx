import type { GlobalConfig } from "payload/types";

export const seo: GlobalConfig = {
	slug: "seo",
	fields: [
		{
			name: "page title",
			type: "text",
			required: true
		}
	]
};
