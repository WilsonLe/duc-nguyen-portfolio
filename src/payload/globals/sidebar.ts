import { Axios } from "@/services/axios";
import type { GlobalConfig } from "payload/types";

export const sidebar: GlobalConfig = {
	slug: "sidebar",
	access: {
		read: () => true
	},
	fields: [
		{
			name: "avatar",
			type: "relationship",
			relationTo: "media",
			hasMany: false,
			required: true
		},
		{
			name: "header1",
			type: "text",
			required: true
		},
		{
			name: "header2",
			type: "text",
			required: true
		},
		{
			name: "social",
			type: "array",
			required: true,
			fields: [
				{
					name: "link",
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
		},
		{
			name: "personalInfo",
			type: "array",
			required: true,
			fields: [
				{
					name: "name",
					type: "text",
					required: true
				},
				{
					name: "content",
					type: "richText",
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
		},
		{
			name: "resume",
			type: "group",
			fields: [
				{
					name: "file",
					type: "relationship",
					relationTo: "media",
					required: true
				},
				{
					name: "text",
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
