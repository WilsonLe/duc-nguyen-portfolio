import { Axios } from "@/services/axios";
import type { GlobalConfig } from "payload/types";

export const header: GlobalConfig = {
	slug: "header",
	access: {
		read: () => true
	},
	fields: [
		{
			name: "logo",
			type: "relationship",
			relationTo: "media",
			hasMany: false,
			required: true
		},
		{
			name: "menu",
			type: "array",
			fields: [
				{
					name: "name",
					type: "text",
					required: true
				},
				{
					name: "routePath",
					type: "text",
					required: true
				},
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
				}
			]
		}
	],
	hooks: {
		afterChange: [
			async (args) => {
				await Axios.post("/api/revalidate", {
					token: process.env.REVALIDATION_TOKEN,
					paths: ["/", "/resume", "/works", "/contact"]
				});
				return args.doc;
			}
		]
	}
};
