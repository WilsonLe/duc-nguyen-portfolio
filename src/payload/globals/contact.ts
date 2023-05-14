import { Axios } from "@/services/axios";
import type { GlobalConfig } from "payload/types";

export const contact: GlobalConfig = {
	slug: "contact",
	access: {
		read: () => true
	},
	fields: [
		{
			name: "page title",
			type: "text",
			required: true
		},
		{
			name: "header",
			type: "text",
			required: true
		},
		{
			name: "contacts",
			type: "array",
			fields: [
				{
					name: "iconLight",
					type: "relationship",
					relationTo: "media",
					required: true
				},
				{
					name: "iconDark",
					type: "relationship",
					relationTo: "media",
					required: true
				},
				{
					name: "backgroundColorLight",
					type: "text",
					required: true
				},
				{
					name: "backgroundColorDark",
					type: "text",
					required: true
				},
				{
					name: "header",
					type: "text",
					required: true
				},
				{
					name: "content",
					type: "richText",
					required: true
				}
			]
		}
	],
	hooks: {
		afterChange: [
			async (args) => {
				await Axios.post("/api/revalidate", {
					token: process.env.REVALIDATION_TOKEN,
					paths: ["/contact"]
				});
				return args.doc;
			}
		]
	}
};
